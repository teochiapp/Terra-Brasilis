import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/I18nContext';

// ─── Styled Components ────────────────────────────────────────────────────────

const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 80px;
  box-sizing: border-box;
  isolation: isolate;

  background:
    linear-gradient(0deg, rgba(10, 25, 19, 0.4), rgba(10, 25, 19, 0.4)),
    url('/globalImgs/professional-home.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  gap: 24px;

  @media (max-width: 640px) {
    min-height: 200px;
    padding: 48px 20px;
    gap: 18px;
  }
`;

const BannerTitle = styled.h2`
  font-family: 'Constantia', Georgia, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0;
  text-shadow:
    0px 4px 10px rgba(0, 0, 0, 0.6),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 800px;

  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 38px;
  }
`;

const CtaButton = styled(Link)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: #b9975b;
  border-radius: 4px;
  box-sizing: border-box;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #183029;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.15s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: #a07e40;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(185, 151, 91, 0.35);
  }
`;


// ─── Component ────────────────────────────────────────────────────────────────

function ProfessionalsBanner() {
  const { t } = useTranslation();

  return (
    <BannerContainer id="professionals-banner">
      <Fade direction="up" cascade damping={0.2} triggerOnce duration={800}>
        <BannerTitle>
          {t('inicio.professionals_banner.title') || 'FOR PROFESSIONALS'}
        </BannerTitle>
        <CtaButton to="/profesionales" onClick={() => window.scrollTo(0, 0)}>
          {t('inicio.professionals_banner.cta') || 'CONTACT TERRA BRASILIS'}
        </CtaButton>
      </Fade>
    </BannerContainer>
  );
}

export default ProfessionalsBanner;
