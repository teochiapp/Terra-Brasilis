import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ChevronDown, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { useTranslation } from '../../i18n/I18nContext';
import emailjs from '@emailjs/browser';

// ─── Animations & Modal Components ───────────────────────────

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const backdropFade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(24, 48, 41, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: ${backdropFade} 0.25s ease-out forwards;
`;

const ModalCard = styled.div`
  background: #FDFBF7;
  border: 1px solid rgba(185, 151, 91, 0.35);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 40px 32px 32px 32px;
  width: 100%;
  max-width: 440px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  color: #183029;
  opacity: 0.5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 50%;
  transition: all var(--transition-fast);

  &:hover {
    opacity: 1;
    background: rgba(24, 48, 41, 0.08);
  }
`;

const ModalIconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background: ${props => props.$isError ? 'rgba(217, 83, 79, 0.12)' : 'rgba(185, 151, 91, 0.15)'};
  border: 1.5px solid ${props => props.$isError ? '#d9534f' : '#B9975B'};
  color: ${props => props.$isError ? '#d9534f' : '#B9975B'};
`;

const ModalTitle = styled.h3`
  font-family: 'Constantia', var(--font-heading), 'Times New Roman', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 120%;
  color: #183029;
  margin: 0 0 12px 0;
`;

const ModalDescription = styled.p`
  font-family: 'Montserrat', var(--font-body), sans-serif;
  font-size: 14px;
  line-height: 160%;
  color: #3D4F47;
  margin: 0 0 28px 0;
`;

const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 36px;
  background: #183029;
  border: 1px solid #B9975B;
  border-radius: 4px;
  color: #DFD8C7;
  font-family: 'Montserrat', var(--font-body), sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all var(--transition-fast);
  width: 100%;
  max-width: 220px;

  &:hover {
    background: #B9975B;
    color: #183029;
  }
`;

// ─── Styled Components ────────────────────────────────────────────────────────

const FormColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 100%;
  max-width: 780px;
`;

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 100%;
`;

const LabelRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
`;

const GoldDividerLine = styled.div`
  width: 32px;
  height: 1px;
  background: #B9975B;
`;

const CategoryLabel = styled.span`
  font-family: 'Manrope', var(--font-label), sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #B9975B;
`;

const HeaderTitle = styled.h2`
  font-family: 'Constantia', var(--font-heading), 'Times New Roman', serif;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(32px, 4vw, 52px);
  line-height: 110%;
  letter-spacing: 0;
  color: #183029;
  margin: 0;
`;

const HeaderDescription = styled.p`
  font-family: 'Manrope', var(--font-label), sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 170%;
  letter-spacing: 0;
  color: #3D4F47;
  margin: 0;
`;

const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 36px;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 28px;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  flex: 1;
  width: 100%;
  position: relative;
`;

const FieldLabel = styled.label`
  font-family: 'Manrope', var(--font-label), sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
  color: #B9975B;
`;

const UnderlineInput = styled.input`
  width: 100%;
  padding: 6px 0;
  font-family: 'Montserrat', var(--font-body), sans-serif;
  font-size: 15px;
  color: #183029;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(24, 48, 41, 0.3);
  outline: none;
  transition: border-color var(--transition-fast);

  &:focus {
    border-bottom-color: #B9975B;
  }

  &::placeholder {
    color: rgba(61, 79, 71, 0.45);
  }
`;

const SelectWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    right: 0;
    pointer-events: none;
    color: #B9975B;
  }
`;

const UnderlineSelect = styled.select`
  width: 100%;
  padding: 6px 20px 6px 0;
  font-family: 'Montserrat', var(--font-body), sans-serif;
  font-size: 15px;
  color: #183029;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(24, 48, 41, 0.3);
  outline: none;
  appearance: none;
  cursor: pointer;
  transition: border-color var(--transition-fast);

  &:focus {
    border-bottom-color: #B9975B;
  }
`;

const RadioSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;
  width: 100%;
`;

const RadioOptionsGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

const RadioOptionLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: 'Montserrat', var(--font-body), sans-serif;
  font-size: 13px;
  color: #183029;
  user-select: none;
`;

const CustomRadio = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1.5px solid #183029;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
  margin: 0;
  transition: all var(--transition-fast);

  &:checked {
    background-color: #183029;
    border-color: #183029;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background-color: #DFD8C7;
    border-radius: 50%;
  }
`;

const MessageTextarea = styled.textarea`
  width: 100%;
  padding: 8px 0;
  font-family: 'Montserrat', var(--font-body), sans-serif;
  font-size: 14px;
  color: #183029;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(24, 48, 41, 0.3);
  outline: none;
  resize: vertical;
  min-height: 90px;
  transition: border-color var(--transition-fast);

  &:focus {
    border-bottom-color: #B9975B;
  }

  &::placeholder {
    color: rgba(61, 79, 71, 0.45);
  }
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;
`;

const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 18px 40px;
  height: 52px;
  background: #183029;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-family: 'Montserrat', var(--font-body), sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #DFD8C7;
  transition: background-color var(--transition-fast), transform var(--transition-fast);

  &:hover:not(:disabled) {
    background: #25473d;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const RequiredNotice = styled.span`
  font-family: 'Montserrat', var(--font-body), sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  color: #3D4F47;
  opacity: 0.6;
`;


// ─── Componente ───────────────────────────────────────────────────────────────

function ContactForm() {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState('general');
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    country: 'Brasil',
    message: '',
  });

  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'success',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_4czxb83';
    const templateID = 'template_hur8fhh';
    const publicKey = 'gT_biWcgI-ZvmnYrK';

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      company: formData.company,
      country: formData.country,
      help_option: selectedOption,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setFormData({
          fullName: '',
          company: '',
          email: '',
          country: 'Brasil',
          message: '',
        });
        setSelectedOption('general');
        setModalState({ isOpen: true, type: 'success' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setIsSubmitting(false);
        setModalState({ isOpen: true, type: 'error' });
      });
  };

  return (
    <>
      <FormColWrapper>
        <Fade direction="up" triggerOnce duration={800} style={{ width: '100%' }}>
          {/* Encabezado del Formulario */}
          <FormHeader>
            <LabelRow>
              <GoldDividerLine />
              <CategoryLabel>{t('contacto.form.category')}</CategoryLabel>
            </LabelRow>
            <HeaderTitle>{t('contacto.form.title')}</HeaderTitle>
            <HeaderDescription>{t('contacto.form.description')}</HeaderDescription>
          </FormHeader>
        </Fade>

        <Fade direction="up" triggerOnce duration={800} style={{ width: '100%' }}>
          {/* Formulario */}
          <FormBody onSubmit={handleSubmit}>
            {/* Fila 1: Nombre + Empresa */}
            <FormRow>
              <FieldGroup>
                <FieldLabel htmlFor="fullName">{t('contacto.form.name')}</FieldLabel>
                <UnderlineInput
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <FieldLabel htmlFor="company">{t('contacto.form.company')}</FieldLabel>
                <UnderlineInput
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                />
              </FieldGroup>
            </FormRow>

            {/* Fila 2: Email + País */}
            <FormRow>
              <FieldGroup>
                <FieldLabel htmlFor="email">{t('contacto.form.email')}</FieldLabel>
                <UnderlineInput
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <FieldLabel htmlFor="country">{t('contacto.form.country')}</FieldLabel>
                <SelectWrapper>
                  <UnderlineSelect
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="Brasil">Brasil</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="España">España</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="Otro">Otro</option>
                  </UnderlineSelect>
                  <ChevronDown size={14} />
                </SelectWrapper>
              </FieldGroup>
            </FormRow>

            {/* Opciones de Radio */}
            <RadioSection>
              <FieldLabel>{t('contacto.form.help_label')}</FieldLabel>
              <RadioOptionsGroup>
                <RadioOptionLabel>
                  <CustomRadio
                    name="helpOption"
                    value="general"
                    checked={selectedOption === 'general'}
                    onChange={() => setSelectedOption('general')}
                  />
                  {t('contacto.form.help_options.general')}
                </RadioOptionLabel>

                <RadioOptionLabel>
                  <CustomRadio
                    name="helpOption"
                    value="professionals"
                    checked={selectedOption === 'professionals'}
                    onChange={() => setSelectedOption('professionals')}
                  />
                  {t('contacto.form.help_options.professionals')}
                </RadioOptionLabel>

                <RadioOptionLabel>
                  <CustomRadio
                    name="helpOption"
                    value="coffees"
                    checked={selectedOption === 'coffees'}
                    onChange={() => setSelectedOption('coffees')}
                  />
                  {t('contacto.form.help_options.coffees')}
                </RadioOptionLabel>

                <RadioOptionLabel>
                  <CustomRadio
                    name="helpOption"
                    value="other"
                    checked={selectedOption === 'other'}
                    onChange={() => setSelectedOption('other')}
                  />
                  {t('contacto.form.help_options.other')}
                </RadioOptionLabel>
              </RadioOptionsGroup>
            </RadioSection>

            {/* Mensaje */}
            <FieldGroup>
              <FieldLabel htmlFor="message">{t('contacto.form.message')}</FieldLabel>
              <MessageTextarea
                id="message"
                name="message"
                placeholder={t('contacto.form.placeholder')}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FieldGroup>

            {/* Footer del Formulario */}
            <FormFooter>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? '...' : t('contacto.form.submit')}
              </SubmitButton>
              <RequiredNotice>{t('contacto.form.required')}</RequiredNotice>
            </FormFooter>
          </FormBody>
        </Fade>
      </FormColWrapper>

      {/* Modal estilizado de confirmación / error */}
      {modalState.isOpen && (
        <ModalBackdrop onClick={closeModal}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalCloseBtn onClick={closeModal} aria-label="Cerrar modal">
              <X size={18} />
            </ModalCloseBtn>

            <ModalIconCircle $isError={modalState.type === 'error'}>
              {modalState.type === 'error' ? (
                <AlertCircle size={32} />
              ) : (
                <CheckCircle2 size={34} />
              )}
            </ModalIconCircle>

            <ModalTitle>
              {modalState.type === 'error'
                ? t('contacto.form.modal_error_title')
                : t('contacto.form.modal_success_title')}
            </ModalTitle>

            <ModalDescription>
              {modalState.type === 'error'
                ? t('contacto.form.modal_error_desc')
                : t('contacto.form.modal_success_desc')}
            </ModalDescription>

            <ModalButton onClick={closeModal}>
              {t('contacto.form.modal_close')}
            </ModalButton>
          </ModalCard>
        </ModalBackdrop>
      )}
    </>
  );
}

export default ContactForm;
