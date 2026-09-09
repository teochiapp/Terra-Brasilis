import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../i18n/I18nContext';

// ─── Styled Components ────────────────────────────────────────────────────────

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 80px 80px;
  box-sizing: border-box;
  isolation: isolate;

  /* Fondo con overlay oscuro (rgba 10,25,19, 0.65) e imagen de la finca al amanecer */
  background:
    linear-gradient(0deg, rgba(10, 25, 19, 0.65), rgba(10, 25, 19, 0.65)),
    url('/globalImgs/hero.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    min-height: 600px;
    padding: 100px 40px 60px;
  }

  @media (max-width: 640px) {
    min-height: 540px;
    padding: 80px 20px 48px;
  }
`;

const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1074px;
  width: 100%;
  gap: 24px;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-family: 'Constantia', Georgia, serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 115%;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
  max-width: 1074px;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 640px) {
    font-size: 26px;
    line-height: 120%;
  }
`;

const HeroSubtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff;
  opacity: 0.9;
  max-width: 700px;
  margin: 0;
`;

const ActionsFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    gap: 14px;
    margin-top: 8px;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  gap: 8px;
  background: #b9975b;
  border: 1.5px solid #b9975b;
  border-radius: 4px;
  box-sizing: border-box;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #183029;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.15s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: #a07e40;
    border-color: #a07e40;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(185, 151, 91, 0.3);
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 14px 24px;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  gap: 8px;
  background: transparent;
  border: 1.5px solid #ffffff;
  border-radius: 4px;
  box-sizing: border-box;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    transform 0.15s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: #ffffff;
    color: #183029;
    border-color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 14px 24px;
  }
`;


// ─── Component ────────────────────────────────────────────────────────────────

function HomeHero() {
  const { t } = useTranslation();

  return (
    <HeroContainer id="home-hero">
      <ContentFrame>
        <Fade cascade damping={0.2} direction="up" triggerOnce>
          <HeroTitle dangerouslySetInnerHTML={{ __html: t('inicio.hero.title') !== 'inicio.hero.title' ? t('inicio.hero.title') : "FROM THE HEART OF BRAZIL <br /> TO THE WORLD'S FINEST CUPS" }} />
          <HeroSubtitle dangerouslySetInnerHTML={{ __html: t('inicio.hero.subtitle') !== 'inicio.hero.subtitle' ? t('inicio.hero.subtitle') : "We grow coffee from the origin, <br /> respecting the land, time, and people" }} />
          <ActionsFrame>
            <PrimaryButton to="/historia" onClick={() => window.scrollTo(0, 0)}>
              {t('inicio.hero.cta_discover') || 'DISCOVER TERRA BRASILIS'}
              <ArrowRight size={14} color="currentColor" strokeWidth={2.5} />
            </PrimaryButton>
            <SecondaryButton to="/finca" onClick={() => window.scrollTo(0, 0)}>
              {t('inicio.hero.cta_farm') || 'VISIT THE FARM'}
            </SecondaryButton>
          </ActionsFrame>
        </Fade>
      </ContentFrame>
    </HeroContainer>
  );
}

export default HomeHero;
