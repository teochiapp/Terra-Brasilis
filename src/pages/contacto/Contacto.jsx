import { useEffect } from 'react';
import styled from 'styled-components';

import { useTranslation } from '../../i18n/I18nContext';
import Container from '../../components/common/Container';
import ContactInfo from '../../components/contacto/ContactInfo';
import ContactForm from '../../components/contacto/ContactForm';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const ContentSection = styled.section`
  padding: 80px 0;
  background-color: var(--color-background);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: start;

  @media (min-width: 1024px) {
    grid-template-columns: 380px 1fr;
    gap: 80px;
  }
`;

// ─── Componente ───────────────────────────────────────────────────────────────

function Contacto() {
  const { t } = useTranslation();

  // SEO básico
  useEffect(() => {
    document.title = t('seo.contacto.title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('seo.contacto.description'));
  }, [t]);

  return (
    <ContentSection id="contacto-content">
      <Container>
        <ContactGrid>
          <ContactInfo />
          <ContactForm />
        </ContactGrid>
      </Container>
    </ContentSection>
  );
}

export default Contacto;
