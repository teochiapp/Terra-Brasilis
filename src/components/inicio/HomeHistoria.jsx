import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../i18n/I18nContext';

// ─── SVG Leaf Icon ────────────────────────────────────────────────────────────

const LeafBrandIcon = () => (
  <img
    src="/globalImgs/icon-cultivation.png"
    alt="Cultivation Icon"
    width="32"
    height="32"
    style={{ objectFit: 'contain' }}
  />
);

// ─── Styled Components ────────────────────────────────────────────────────────

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 560px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;

  /* Fondo con la foto de las manos sosteniendo café a la derecha y gradiente suave a beige (#DFD8C7) a la izquierda */
  background-color: #dfd8c7;
  background-image: linear-gradient(
      90deg,
      #dfd8c7 0%,
      #dfd8c7 25%,
      rgba(223, 216, 199, 0.92) 40%,
      rgba(223, 216, 199, 0.4) 55%,
      rgba(223, 216, 199, 0) 70%
    ),
    url('/globalImgs/story-home.webp');
  background-size: 88% auto;
  background-position: center right;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    min-height: 500px;
    background-size: cover;
    background-image: linear-gradient(
        90deg,
        #dfd8c7 0%,
        #dfd8c7 45%,
        rgba(223, 216, 199, 0.85) 65%,
        rgba(223, 216, 199, 0.2) 100%
      ),
      url('/globalImgs/story-home.webp');
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 60px 20px;
    background-image: linear-gradient(
        180deg,
        rgba(223, 216, 199, 0.96) 0%,
        rgba(223, 216, 199, 0.88) 100%
      ),
      url('/globalImgs/story-home.webp');
    background-position: center;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  @media (max-width: 640px) {
    padding: 0;
  }
`;

const ContentBox = styled.div`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;

const SectionTitle = styled.h2`
  font-family: 'Constantia', Georgia, serif;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(26px, 3.2vw, 36px);
  line-height: 115%;
  color: #1c2421;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: -0.01em;
  max-width: 480px;

  @media (max-width: 640px) {
    font-size: 24px;
    line-height: 120%;
  }
`;

const DiamondDivider = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0px;
  gap: 8px;
  width: 106px;
  height: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;
  align-self: center;
  margin: 4px 0;
`;

const DividerLine = styled.div`
  width: 36px;
  height: 1px;
  background: #b9975b;
  opacity: 0.6;
`;

const DiamondShape = styled.div`
  width: 8px;
  height: 8px;
  border: 1.5px solid #b9975b;
  transform: rotate(-45deg);
  box-sizing: border-box;
`;

const DescriptionText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  letter-spacing: 0%;
  color: #5c6661;
  margin: 0;
  max-width: 520px;
`;

const QuoteBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
`;

const QuoteText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 170%;
  letter-spacing: 0%;
  color: #b9975b;
  margin: 0;
`;


// ─── Component ────────────────────────────────────────────────────────────────

function HomeHistoria() {
  const { t } = useTranslation();

  return (
    <SectionContainer id="home-historia-section">
      <ContentWrapper>
        <Fade direction="left" triggerOnce duration={1000}>
          <ContentBox>
            <IconWrapper>
              <LeafBrandIcon />
            </IconWrapper>

            <SectionTitle>
              {t('inicio.historia_section.title') ||
                'MORE THAN COFFEE, WE CULTIVATE A STORY'}
            </SectionTitle>

            <DiamondDivider>
              <DividerLine />
              <DiamondShape />
              <DividerLine />
            </DiamondDivider>

            <DescriptionText>
              {t('inicio.historia_section.description') ||
                'Terra Brasilis Café was born from the desire to recover the essence of authentic Brazilian coffee. Our project is a tradition, innovation, and respect for craftsmanship to create origin coffees with their own personality.'}
            </DescriptionText>

            <QuoteBox>
              <QuoteText>
                {t('inicio.historia_section.quote_line1') ||
                  "We don't seek to produce large quantities."}
              </QuoteText>
              <QuoteText>
                {t('inicio.historia_section.quote_line2') ||
                  'We seek to produce coffees that linger in memory.'}
              </QuoteText>
            </QuoteBox>
          </ContentBox>
        </Fade>
      </ContentWrapper>
    </SectionContainer>
  );
}

export default HomeHistoria;
