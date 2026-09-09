import { Fade } from 'react-awesome-reveal';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useTranslation } from '../../i18n/I18nContext';

// ─── SVG Components ───────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2.5 6.5L5 9L9.5 3" stroke="#B9975B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DiamondIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M0.907584 4.61754C0.958107 4.49566 1.03216 4.38492 1.1255 4.29167L4.2877 1.12947C4.38095 1.03613 4.49169 0.962075 4.61358 0.911551C4.73546 0.861027 4.86611 0.835022 4.99805 0.835022C5.13 0.835022 5.26065 0.861027 5.38253 0.911551C5.50442 0.962075 5.61515 1.03613 5.7084 1.12947L8.87061 4.29167C8.96395 4.38492 9.038 4.49566 9.08852 4.61754C9.13905 4.73943 9.16505 4.87008 9.16505 5.00202C9.16505 5.13397 9.13905 5.26461 9.08852 5.3865C9.038 5.50839 8.96395 5.61912 8.87061 5.71237L5.7084 8.87457C5.61515 8.96792 5.50442 9.04197 5.38253 9.09249C5.26065 9.14302 5.13 9.16902 4.99805 9.16902C4.86611 9.16902 4.73546 9.14302 4.61358 9.09249C4.49169 9.04197 4.38095 8.96792 4.2877 8.87457L1.1255 5.71237C1.03216 5.61912 0.958107 5.50839 0.907584 5.3865C0.85706 5.26461 0.831055 5.13397 0.831055 5.00202C0.831055 4.87008 0.85706 4.73943 0.907584 4.61754Z"
      stroke="#B9975B"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const SectionDiamondDivider = () => (
  <DividerWrapper>
    <DividerLine />
    <DiamondIcon />
    <DividerLine />
  </DividerWrapper>
);

// ─── Styled Components ────────────────────────────────────────────────────────

const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

/* ── Section 1: About / Intro ── */
const AboutSection = styled.section`
  width: 100%;
  background: #EDE6D8;
  padding: 60px 60px 70px;
  box-sizing: border-box;
  isolation: isolate;

  @media (max-width: 1024px) {
    padding: 60px 40px 50px;
  }

  @media (max-width: 640px) {
    padding: 40px 20px;
  }
`;

const AboutContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 48px;
  }
`;

const AboutLeft = styled.div`
  flex: 1;
  max-width: 530px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  isolation: isolate;
`;

const MainTitle = styled.h1`
  font-family: 'Constantia', Georgia, serif;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(26px, 2.5vw, 36px);
  line-height: 100%;
  letter-spacing: 0;
  color: #183029;
  max-width: 453px;
  margin: 0;
`;

const AboutDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(16px, 1.5vw, 22px);
  line-height: 153%;
  letter-spacing: 0;
  color: #3D4A3E;
  max-width: 518px;
  margin: 0;
`;

const Checklist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  list-style: none;
`;

const CheckItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(15px, 1.4vw, 22px);
  line-height: 27px;
  letter-spacing: 0;
  color: #4A5548;
`;

const CheckIconBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  flex-shrink: 0;
`;

const CtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px 14px 30px;
  height: 44px;
  background: #183029;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.06em;
  color: #FFFFFF;
  text-decoration: none;
  text-transform: uppercase;
  box-sizing: border-box;
  transition: background var(--transition-fast), transform var(--transition-fast);

  &:hover {
    background: #B9975B;
    color: #183029;
    transform: translateY(-2px);
  }
`;

const AboutRight = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NurseryImage = styled.img`
  width: 100%;
  max-width: 635px;
  height: 533px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(24, 48, 41, 0.12);

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 640px) {
    height: 280px;
  }
`;

/* ── Section 2: Features Strip ── */
const FeaturesStrip = styled.section`
  width: 100%;
  background: #183029;
  padding: 24px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    padding: 20px;
    gap: 20px;
  }
`;

const FeatureItem = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #DFD8C7;
`;

const DiamondSeparator = styled.span`
  width: 6px;
  height: 6px;
  background: #B89658;
  transform: rotate(-45deg);
  flex-shrink: 0;

  @media (max-width: 640px) {
    display: none;
  }
`;

/* ── Section 3: How We Work ── */
const HowWeWorkSection = styled.section`
  width: 100%;
  background: #DFD8C7;
  padding: 64px var(--container-padding-x, 80px) 80px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 56px 40px 64px;
  }

  @media (max-width: 640px) {
    padding: 40px 20px 48px;
  }
`;

const HowWeWorkContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const SectionTitleHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const SectionHeaderTitle = styled.h2`
  font-family: 'Constantia', Georgia, serif;
  font-style: normal;
  font-weight: 800;
  font-size: clamp(28px, 4vw, 38px);
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #183029;
  margin: 0;
  text-transform: uppercase;
`;

const DividerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 122px;
`;

const DividerLine = styled.div`
  width: 48px;
  height: 1px;
  background: #B9975B;
  opacity: 0.6;
`;

const StepsRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StepCard = styled.div`
  background: #EDE6D8;
  border-radius: 8px;
  padding: 36px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  box-shadow: 0 4px 16px rgba(24, 48, 41, 0.04);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(24, 48, 41, 0.08);
  }
`;

const StepNumberCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: #183029;
  border-radius: 50%;
  font-family: 'Constantia', Georgia, serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 1;
  color: #B9975B;
  flex-shrink: 0;
`;

const StepTitle = styled.h3`
  font-family: 'Constantia', Georgia, serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #183029;
  text-transform: uppercase;
  margin: 0;
`;

const StepUnderline = styled.div`
  width: 24px;
  height: 2px;
  background: #B9975B;
`;

const StepDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 160%;
  text-align: center;
  color: #4A5548;
  margin: 0;
`;


// ─── Componente Principal ──────────────────────────────────────────────────────

function Profesionales() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('seo.profesionales.title') || 'Para Profesionales — Terra Brasilis';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        t('seo.profesionales.description') || 'Información para profesionales de Terra Brasilis.'
      );
    }
  }, [t]);

  // Lista de items objetivo (checklist)
  const targets = (t('profesionales.about.targets', { returnObjects: true }) || [
    'Tostadores',
    'Distribuidores',
    'Cafeterías y proyectos gastronómicos',
    'Empresas que buscan café con origen y personalidad',
  ]);

  // Lista de rasgos/características para la tira verde
  const features = (t('profesionales.features', { returnObjects: true }) || [
    'FULL TRACEABILITY',
    'EXCLUSIVE VARIETIES',
    'UNIQUE SENSORY PROFILES',
    'RESPONSIBLE AND CONSISTENT SUPPLY',
    'PERSONALIZED SERVICE',
  ]);

  // Pasos de "Cómo trabajamos"
  const steps = (t('profesionales.how_we_work.steps', { returnObjects: true }) || [
    {
      number: '1',
      title: 'WE CONNECT',
      description: 'We understand your needs and your market',
    },
    {
      number: '2',
      title: 'WE SELECT',
      description: 'We choose the ideal coffee for your profile',
    },
    {
      number: '3',
      title: 'WE DELIVER',
      description: 'We guarantee quality and consistency',
    },
    {
      number: '4',
      title: 'WE GROW TOGETHER',
      description: 'We build long-term relationships',
    },
  ]);

  return (
    <PageWrapper id="profesionales-page">
      {/* ── Seccion 1: About / Intro ── */}
      <AboutSection id="profesionales-about">
        <AboutContainer>
          <Fade direction="left" triggerOnce duration={1000} style={{ flex: 1, display: 'flex', maxWidth: '530px', width: '100%' }}>
            <AboutLeft style={{ maxWidth: '100%' }}>
              <MainTitle>
                {t('profesionales.about.title') ||
                  'We connect our coffee with those who share our vision'}
              </MainTitle>
              <AboutDescription>
                {t('profesionales.about.description') ||
                  'We believe in relationships built for the long term. We work with professionals who share our passion for quality, origin, and sustainability.'}
              </AboutDescription>
              <Checklist>
                {Array.isArray(targets) &&
                  targets.map((item, idx) => (
                    <CheckItem key={idx}>
                      <CheckIconBox>
                        <CheckIcon />
                      </CheckIconBox>
                      <span>{item}</span>
                    </CheckItem>
                  ))}
              </Checklist>
              <CtaButton to="/contacto" onClick={() => window.scrollTo(0, 0)}>
                {t('profesionales.about.cta') || 'CONTACT US'}
              </CtaButton>
            </AboutLeft>
          </Fade>

          <Fade direction="right" triggerOnce duration={1000} style={{ flex: 1, display: 'flex', width: '100%' }}>
            <AboutRight>
              <NurseryImage
                src={process.env.PUBLIC_URL + '/globalImgs/professionals-section.webp'}
                alt="Plantación y cultivo de café Terra Brasilis"
                width="635"
                height="533"
              />
            </AboutRight>
          </Fade>
        </AboutContainer>
      </AboutSection>

      {/* ── Seccion 2: Features Strip ── */}
      <FeaturesStrip id="profesionales-features">
        <Fade cascade damping={0.1} direction="up" triggerOnce style={{ display: 'contents' }}>
          {Array.isArray(features) &&
            features.map((feature, idx) => (
              <React.Fragment key={idx}>
                <FeatureItem>{feature}</FeatureItem>
                {idx < features.length - 1 && <DiamondSeparator />}
              </React.Fragment>
            ))}
        </Fade>
      </FeaturesStrip>

      {/* ── Seccion 3: How We Work (Como Trabajamos) ── */}
      <HowWeWorkSection id="profesionales-how-we-work">
        <HowWeWorkContainer>
          <Fade direction="up" triggerOnce>
            <SectionTitleHeader>
              <SectionHeaderTitle>
                {t('profesionales.how_we_work.title') || 'HOW WE WORK'}
              </SectionHeaderTitle>
              <SectionDiamondDivider />
            </SectionTitleHeader>
          </Fade>

          <StepsRow>
            <Fade cascade damping={0.15} direction="up" triggerOnce duration={800} style={{ display: 'contents' }}>
              {Array.isArray(steps) &&
                steps.map((step, idx) => (
                  <StepCard key={idx}>
                    <StepNumberCircle>{step.number || idx + 1}</StepNumberCircle>
                    <StepTitle>{step.title}</StepTitle>
                    <StepUnderline />
                    <StepDescription>{step.description}</StepDescription>
                  </StepCard>
                ))}
            </Fade>
          </StepsRow>
        </HowWeWorkContainer>
      </HowWeWorkSection>
    </PageWrapper>
  );
}

export default Profesionales;
