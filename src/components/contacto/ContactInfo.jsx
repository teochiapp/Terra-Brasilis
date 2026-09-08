import styled from 'styled-components';
import { useTranslation } from '../../i18n/I18nContext';

// ─── SVG Icons ───────────────────────────────────────────────────────────────

const FarmIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.9996 8.50017V11.0004M4.28549 5.37992C4.28537 5.56598 4.22596 5.74832 4.11391 5.90644C4.00187 6.06457 3.84165 6.1922 3.65126 6.27499L2.63422 6.72503C2.44383 6.80783 2.28361 6.93546 2.17157 7.09358C2.05953 7.25171 2.00011 7.43405 2 7.6201V8.00013C2 8.13275 2.0602 8.25994 2.16735 8.35371C2.2745 8.44749 2.41983 8.50017 2.57137 8.50017H9.42783C9.57937 8.50017 9.7247 8.44749 9.83185 8.35371C9.939 8.25994 9.9992 8.13275 9.9992 8.00013V7.6201C9.99909 7.43405 9.93967 7.25171 9.82763 7.09358C9.71559 6.93546 9.55537 6.80783 9.36498 6.72503L8.34794 6.27499C8.15755 6.1922 7.99733 6.06457 7.88529 5.90644C7.77324 5.74832 7.71383 5.56598 7.71371 5.37992V3.49977C7.71371 3.36715 7.77391 3.23997 7.88106 3.14619C7.98822 3.05242 8.13355 2.99973 8.28509 2.99973C8.58816 2.99973 8.87882 2.89437 9.09313 2.70682C9.30743 2.51926 9.42783 2.26489 9.42783 1.99965C9.42783 1.73442 9.30743 1.48004 9.09313 1.29249C8.87882 1.10494 8.58816 0.999573 8.28509 0.999573H3.71411C3.41104 0.999573 3.12038 1.10494 2.90607 1.29249C2.69177 1.48004 2.57137 1.73442 2.57137 1.99965C2.57137 2.26489 2.69177 2.51926 2.90607 2.70682C3.12038 2.89437 3.41104 2.99973 3.71411 2.99973C3.86565 2.99973 4.01098 3.05242 4.11813 3.14619C4.22529 3.23997 4.28549 3.36715 4.28549 3.49977V5.37992Z" stroke="#183029" strokeLinecap="round"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4183 4.24978L6.73477 6.63555C6.57584 6.70938 6.39531 6.74826 6.21151 6.74826C6.02771 6.74826 5.84718 6.70938 5.68825 6.63555L1 4.24978M2.04183 3.00003H10.3765C10.9519 3.00003 11.4183 3.37305 11.4183 3.8332V8.8322C11.4183 9.29234 10.9519 9.66536 10.3765 9.66536H2.04183C1.46644 9.66536 1 9.29234 1 8.8322V3.8332C1 3.37305 1.46644 3.00003 2.04183 3.00003Z" stroke="#183029" strokeLinecap="round"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_430_556_contact)">
      <path d="M8.75062 3.25018H8.75562M3.5002 1H8.5006C9.88142 1 11.0008 2.11938 11.0008 3.5002V8.5006C11.0008 9.88142 9.88142 11.0008 8.5006 11.0008H3.5002C2.11938 11.0008 1 9.88142 1 8.5006V3.5002C1 2.11938 2.11938 1 3.5002 1ZM8.00041 5.68553C8.06212 6.10168 7.99104 6.5267 7.79728 6.90013C7.60351 7.27356 7.29693 7.57638 6.92114 7.76553C6.54535 7.95467 6.11949 8.02051 5.70412 7.95367C5.28876 7.88684 4.90505 7.69073 4.60756 7.39324C4.31008 7.09576 4.11397 6.71205 4.04713 6.29668C3.98029 5.88132 4.04613 5.45545 4.23528 5.07966C4.42442 4.70387 4.72724 4.39729 5.10067 4.20353C5.4741 4.00976 5.89912 3.93868 6.31528 4.00039C6.73977 4.06334 7.13277 4.26114 7.43622 4.56459C7.73966 4.86803 7.93747 5.26103 8.00041 5.68553Z" stroke="#183029" strokeLinecap="round"/>
    </g>
    <defs>
      <clipPath id="clip0_430_556_contact">
        <rect width="12" height="12" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

// ─── Styled Components ────────────────────────────────────────────────────────

const InfoColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  max-width: 380px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const MapArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  background: url(${process.env.PUBLIC_URL + '/globalImgs/map-contact.png'}) center center / cover no-repeat;
  border-radius: 4px;
`;

const ContactItemsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 0px 0px;
  width: 100%;
  gap: 16px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 0px;
  gap: 8px;
  width: 100%;
`;

const IconLabelRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  height: 22px;
`;

const IconCircle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  background: #B9975B;
  border-radius: 11px;
  color: #183029;
  flex-shrink: 0;

  svg {
    width: 12px;
    height: 12px;
  }
`;

const ItemLabel = styled.span`
  font-family: 'Manrope', var(--font-label), sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
  color: #B9975B;
`;

const ItemValue = styled.p`
  font-family: 'Manrope', var(--font-label), sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0;
  color: #3D4F47;
  white-space: pre-line;
  margin: 0;
`;

const ItemLink = styled.a`
  font-family: 'Manrope', var(--font-label), sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  color: #3D4F47;
  text-decoration: none;
  transition: color var(--transition-fast);

  &:hover {
    color: #B9975B;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #B9975B;
  opacity: 0.2;
  margin: 4px 0;
`;

// ─── Componente ───────────────────────────────────────────────────────────────

function ContactInfo() {
  const { t } = useTranslation();

  return (
    <InfoColWrapper>
      {/* Mapa gráfico de Brasil / Minas Gerais */}
      <MapArea aria-label="Mapa de la Finca Terra Brasilis en Piracaia, São Paulo" />

      {/* Ítems de Contacto */}
      <ContactItemsList>
        {/* Ubicación / Finca */}
        <ContactItem>
          <IconLabelRow>
            <IconCircle>
              <FarmIcon />
            </IconCircle>
            <ItemLabel>{t('contacto.info.farm_label')}</ItemLabel>
          </IconLabelRow>
          <ItemValue>{t('contacto.info.address')}</ItemValue>
        </ContactItem>

        <Divider />

        {/* Email */}
        <ContactItem>
          <IconLabelRow>
            <IconCircle>
              <EmailIcon />
            </IconCircle>
            <ItemLabel>{t('contacto.info.email_label')}</ItemLabel>
          </IconLabelRow>
          <ItemLink href={`mailto:${t('contacto.info.email')}`}>
            {t('contacto.info.email')}
          </ItemLink>
        </ContactItem>

        <Divider />

        {/* Redes Sociales / Follow Us */}
        <ContactItem>
          <IconLabelRow>
            <IconCircle>
              <InstagramIcon />
            </IconCircle>
            <ItemLabel>{t('contacto.info.social_label')}</ItemLabel>
          </IconLabelRow>
          <ItemLink
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('contacto.info.social')}
          </ItemLink>
        </ContactItem>
      </ContactItemsList>
    </InfoColWrapper>
  );
}

export default ContactInfo;
