import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../i18n/I18nContext';

// ─── Styled Components ────────────────────────────────────────────────────────

const SectionWrapper = styled.section`
  width: 100%;
  background: #dfd8c7;
  padding: 60px 80px 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media (max-width: 1024px) {
    padding: 50px 40px 64px;
    gap: 40px;
  }

  @media (max-width: 640px) {
    padding: 40px 20px 48px;
    gap: 32px;
  }
`;

const HeaderFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 600px;
  width: 100%;
`;

const MainTitle = styled.h2`
  font-family: 'Constantia', Georgia, serif;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(28px, 3.5vw, 36px);
  line-height: 120%;
  text-align: center;
  color: #1c2421;
  text-transform: uppercase;
  margin: 0;
`;

const DiamondDivider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 106px;
  height: 10px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const DividerLine = styled.div`
  width: 40px;
  height: 1px;
  background: #c59b2f;
  opacity: 0.5;
`;

const DiamondShape = styled.div`
  width: 10px;
  height: 10px;
  border: 2px solid #c59b2f;
  transform: rotate(-45deg);
  box-sizing: border-box;
`;

const HeaderDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(14px, 1.4vw, 16px);
  line-height: 140%;
  text-align: center;
  color: #5c6661;
  margin: 0;
  max-width: 600px;
`;

const CafesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1240px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 640px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 320px;
  background: #183029;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(24, 48, 41, 0.12);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(24, 48, 41, 0.2);
  }

  @media (max-width: 640px) {
    flex-direction: column;
    height: auto;
  }
`;

const CardImage = styled.img`
  width: 220px;
  height: 320px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 640px) {
    width: 100%;
    height: 200px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  height: 320px;
  box-sizing: border-box;
  flex: 1;

  @media (max-width: 640px) {
    padding: 28px 24px;
    height: auto;
    gap: 24px;
  }
`;

const CardTopBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

const CardTitle = styled.h3`
  font-family: 'Constantia', Georgia, serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #b9975b;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 640px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const AccentLine = styled.div`
  width: 32px;
  height: 1px;
  background: #b9975b;
`;

const CardDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #ffffff;
  opacity: 0.8;
  margin: 0;
`;

const CardCtaLink = styled(Link)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  cursor: pointer;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.06em;
  color: #b9975b;
  text-transform: uppercase;
  transition: color 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #d4b57a;
    svg {
      transform: translateX(4px);
    }
  }
`;


// ─── Component ────────────────────────────────────────────────────────────────

function NuestrosCafes() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="nuestros-cafes">
      {/* Header */}
      <Fade direction="up" triggerOnce duration={800}>
        <HeaderFrame>
          <MainTitle>
            {t('inicio.nuestros_cafes.title') || 'OUR COFFEES'}
          </MainTitle>
          <DiamondDivider>
            <DividerLine />
            <DiamondShape />
            <DividerLine />
          </DiamondDivider>
          <HeaderDescription>
            {t('inicio.nuestros_cafes.description') ||
              'Hand-selected collections, processed with cutting-edge techniques for discerning palates.'}
          </HeaderDescription>
        </HeaderFrame>
      </Fade>

      {/* Grid de 2 tarjetas */}
      <Fade cascade damping={0.2} direction="up" triggerOnce duration={800}>
        <CafesGrid>
          {/* Card 1: FROM THE ORIGIN */}
          <CardContainer>
            <CardImage
              src="/globalImgs/origin.webp"
              alt="From The Origin Coffee"
              width="220"
              height="320"
            />
            <CardContent>
              <CardTopBlock>
                <CardTitle>
                  {t('inicio.nuestros_cafes.card1.title') || 'FROM THE ORIGIN'}
                </CardTitle>
                <AccentLine />
                <CardDescription>
                  {t('inicio.nuestros_cafes.card1.description') ||
                    'Each coffee begins on our land, where care and dedication accompany every step.'}
                </CardDescription>
              </CardTopBlock>
              <CardCtaLink to="/finca" onClick={() => window.scrollTo(0, 0)}>
                <span>
                  {t('inicio.nuestros_cafes.card1.cta') || 'DISCOVER OUR COFFEES'}
                </span>
                <ArrowRight size={12} color="#B9975B" strokeWidth={2.5} />
              </CardCtaLink>
            </CardContent>
          </CardContainer>

          {/* Card 2: ARARA */}
          <CardContainer>
            <CardImage
              src="/globalImgs/arara.webp"
              alt="Arara Coffee"
              width="220"
              height="320"
            />
            <CardContent>
              <CardTopBlock>
                <CardTitle>
                  {t('inicio.nuestros_cafes.card2.title') || 'ARARA'}
                </CardTitle>
                <AccentLine />
                <CardDescription>
                  {t('inicio.nuestros_cafes.card2.description') ||
                    'Balance and character. Notes of chocolate, caramel, and nuts with a silky body and persistent sweetness.'}
                </CardDescription>
              </CardTopBlock>
              <CardCtaLink to="/finca" onClick={() => window.scrollTo(0, 0)}>
                <span>
                  {t('inicio.nuestros_cafes.card2.cta') || 'DISCOVER OUR COFFEES'}
                </span>
                <ArrowRight size={12} color="#B9975B" strokeWidth={2.5} />
              </CardCtaLink>
            </CardContent>
          </CardContainer>
        </CafesGrid>
      </Fade>
    </SectionWrapper>
  );
}

export default NuestrosCafes;
