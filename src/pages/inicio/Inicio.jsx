import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, History, Users } from 'lucide-react';

import { useTranslation } from '../../i18n/I18nContext';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import SectionTitle from '../../components/common/SectionTitle';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--color-primary);
  position: relative;
  overflow: hidden;

  /* Patrón decorativo de fondo — placeholder hasta tener imagen real */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 70% 50%,
      rgba(185, 151, 91, 0.12) 0%,
      transparent 60%
    );
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 680px;
  padding: var(--spacing-4xl) 0;
`;

const HeroEyebrow = styled.span`
  display: block;
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-widest);
  text-transform: uppercase;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-lg);
`;

const HeroTitle = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: var(--font-weight-bold);
  color: #ffffff;
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-xl);
  letter-spacing: var(--letter-spacing-tight);
`;

const HeroDescription = styled.p`
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.75);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-2xl);
  max-width: 540px;
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
`;

// Sección de preview cards
const PreviewSection = styled.section`
  padding: var(--spacing-4xl) 0;
  background-color: var(--color-background);
`;

const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const PreviewCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-2xl);
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  text-decoration: none;
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base),
    border-color var(--transition-base);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-secondary);
  }
`;

const CardIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(185, 151, 91, 0.12);
  border-radius: var(--radius-md);
  color: var(--color-secondary);
  margin-bottom: var(--spacing-sm);
`;

const CardTitle = styled.h3`
  font-size: var(--font-size-xl);
  color: var(--color-heading);
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-text-light);
  line-height: var(--line-height-relaxed);
  flex: 1;
`;

const CardCta = styled.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-secondary);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  margin-top: var(--spacing-sm);
`;

// Sección CTA de contacto
const ContactSection = styled.section`
  padding: var(--spacing-4xl) 0;
  background-color: var(--color-primary);
  text-align: center;
`;

const ContactContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

// ─── Componente ───────────────────────────────────────────────────────────────

function Inicio() {
  const { t } = useTranslation();

  // SEO
  useEffect(() => {
    document.title = t('seo.inicio.title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('seo.inicio.description'));
  }, [t]);

  const cards = [
    {
      to: '/historia',
      icon: <History size={24} />,
      title: t('inicio.historia_preview.title'),
      description: t('inicio.historia_preview.description'),
      cta: t('inicio.historia_preview.cta'),
    },
    {
      to: '/finca',
      icon: <Leaf size={24} />,
      title: t('inicio.finca_preview.title'),
      description: t('inicio.finca_preview.description'),
      cta: t('inicio.finca_preview.cta'),
    },
    {
      to: '/profesionales',
      icon: <Users size={24} />,
      title: t('nav.profesionales'),
      description: t('profesionales.hero.description'),
      cta: t('nav.profesionales'),
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection id="inicio-hero">
        <Container>
          <HeroContent>
            <HeroEyebrow>Terra Brasilis</HeroEyebrow>
            <HeroTitle>{t('inicio.hero.title')}</HeroTitle>
            <HeroDescription>{t('inicio.hero.description')}</HeroDescription>
            <HeroActions>
              <Button as={Link} to="/historia" variant="secondary" size="lg">
                {t('inicio.hero.cta')}
              </Button>
              <Button as={Link} to="/contacto" variant="outline" size="lg">
                {t('nav.contacto')}
              </Button>
            </HeroActions>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Preview de páginas */}
      <PreviewSection id="inicio-preview">
        <Container>
          <SectionTitle
            eyebrow="Terra Brasilis"
            title={t('inicio.hero.title')}
            description={t('inicio.hero.description')}
            align="center"
          />
          <PreviewGrid>
            {cards.map(({ to, icon, title, description, cta }) => (
              <PreviewCard key={to} to={to}>
                <CardIconWrapper>{icon}</CardIconWrapper>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardCta>
                  {cta} <ArrowRight size={14} />
                </CardCta>
              </PreviewCard>
            ))}
          </PreviewGrid>
        </Container>
      </PreviewSection>

      {/* CTA de contacto */}
      <ContactSection id="inicio-contact-cta">
        <Container>
          <ContactContent>
            <SectionTitle
              eyebrow="Contacto"
              title={t('inicio.contact_cta.title')}
              description={t('inicio.contact_cta.description')}
              align="center"
              light
            />
            <Button as={Link} to="/contacto" variant="secondary" size="lg">
              {t('inicio.contact_cta.cta')}
            </Button>
          </ContactContent>
        </Container>
      </ContactSection>
    </>
  );
}

export default Inicio;
