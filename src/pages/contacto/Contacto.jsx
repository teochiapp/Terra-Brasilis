import { useEffect } from 'react';
import styled from 'styled-components';

import { useTranslation } from '../../i18n/I18nContext';
import Container from '../../components/common/Container';
import ContactHero from '../../components/contacto/ContactHero';
import ContactInfo from '../../components/contacto/ContactInfo';
import ContactForm from '../../components/contacto/ContactForm';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const ContentSection = styled.section`
  padding: var(--spacing-4xl) 0;
  background-color: var(--color-background);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-4xl);

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
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
    <>
      <ContactHero 
        eyebrow="Terra Brasilis" 
        title={t('contacto.hero.title')} 
      />

      <ContentSection id="contacto-content">
        <Container>
          <ContactGrid>
            {/* Columna Izquierda: Información visual y de contacto */}
            <ContactInfo />
            
            {/* Columna Derecha: Formulario de mensaje */}
            <ContactForm />
          </ContactGrid>
        </Container>
      </ContentSection>
    </>
  );
}

export default Contacto;
