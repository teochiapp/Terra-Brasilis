import { useEffect } from 'react';
import styled from 'styled-components';

import { useTranslation } from '../../i18n/I18nContext';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const PageHero = styled.section`
  padding: var(--spacing-4xl) 0;
  background-color: var(--color-primary);
`;

const ContentSection = styled.section`
  padding: var(--spacing-4xl) 0;
  background-color: var(--color-background);
`;

const PlaceholderBlock = styled.div`
  height: 200px;
  background-color: var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  font-style: italic;
`;

// ─── Componente ───────────────────────────────────────────────────────────────

function Finca() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('seo.finca.title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('seo.finca.description'));
  }, [t]);

  return (
    <>
      <PageHero id="finca-hero">
        <Container>
          <SectionTitle
            eyebrow="Terra Brasilis"
            title={t('finca.hero.title')}
            description={t('finca.hero.description')}
            light
          />
        </Container>
      </PageHero>

      <ContentSection id="finca-content">
        <Container>
          {/* Placeholder — contenido visual de Finca se implementará en etapa 2 */}
          <PlaceholderBlock>
            Secciones de La Finca — pendiente implementación visual (Etapa 2)
          </PlaceholderBlock>
        </Container>
      </ContentSection>
    </>
  );
}

export default Finca;
