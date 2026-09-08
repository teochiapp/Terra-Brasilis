import styled from 'styled-components';
import { useTranslation } from '../../i18n/I18nContext';
import Button from '../common/Button';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-heading);
  margin-bottom: var(--spacing-sm);
  line-height: var(--line-height-tight);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const Label = styled.label`
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-heading);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wider);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  outline: none;
  transition: 
    border-color var(--transition-fast), 
    box-shadow var(--transition-fast);

  &:focus {
    border-color: var(--color-secondary);
    box-shadow: 0 0 0 2px rgba(185, 151, 91, 0.15);
  }

  &::placeholder {
    color: var(--color-text-light);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.25rem;
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  outline: none;
  transition: 
    border-color var(--transition-fast), 
    box-shadow var(--transition-fast);
  resize: vertical;
  min-height: 160px;

  &:focus {
    border-color: var(--color-secondary);
    box-shadow: 0 0 0 2px rgba(185, 151, 91, 0.15);
  }

  &::placeholder {
    color: var(--color-text-light);
  }
`;

// ─── Componente ───────────────────────────────────────────────────────────────

function ContactForm() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí implementaremos la integración con emailjs en el futuro
    console.log("Formulario enviado");
  };

  return (
    <FormWrapper>
      <Title>Envianos un mensaje</Title>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">{t('contacto.form.name')}</Label>
          <Input 
            id="name" 
            type="text" 
            placeholder="Tu nombre completo" 
            required 
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">{t('contacto.form.email')}</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="tu@email.com" 
            required 
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">{t('contacto.form.message')}</Label>
          <Textarea 
            id="message" 
            placeholder="¿En qué podemos ayudarte?" 
            required 
          />
        </FormGroup>

        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          style={{ alignSelf: 'flex-start', marginTop: 'var(--spacing-sm)' }}
        >
          {t('contacto.form.submit')}
        </Button>
      </Form>
    </FormWrapper>
  );
}

export default ContactForm;
