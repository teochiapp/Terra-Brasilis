import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/I18nContext';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const TwoColSection = styled.section`
  width: 100%;
  background: #EDE6D8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: stretch;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 80px 64px 80px 100px;
  gap: 24px;
  flex: 1;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  @media (max-width: 640px) {
    padding: 40px 20px;
  }
`;

const Subtitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #B9975B;
  letter-spacing: 0.05em;
`;

const MainTitle = styled.h2`
  font-family: 'Constantia', var(--font-heading), serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  color: #183029;
  margin: 0;
  max-width: 516px;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`;

const Divider = styled.div`
  width: 40px;
  height: 2px;
  background: #B9975B;
`;

const TextParagraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 175%;
  color: #3D4A3E;
  margin: 0;
  max-width: 516px;
`;

const CtaButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  background: #B9975B;
  border-radius: 4px;
  
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  color: #EDE6D8;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 12px;
  transition: all var(--transition-fast);

  &:hover {
    background: #a3844f;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const ImageCol = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 100px 80px 0;

  @media (max-width: 1024px) {
    padding: 0 40px 60px 40px;
  }

  @media (max-width: 640px) {
    padding: 0 20px 40px 20px;
  }
`;

const StoryImg = styled.img`
  width: 100%;
  max-width: 631px;
  height: 530px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 400px;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    height: 300px;
  }
`;


// ─── Componente ───────────────────────────────────────────────────────────────

function HistoryIntro() {
  const { t } = useTranslation();

  // Helper para fallback si la clave no existe en el JSON
  const tVal = (key, fallback) => {
    const res = t(key);
    return res === key ? fallback : res;
  };

  return (
    <TwoColSection>
      <ContentWrapper>
        <Fade direction="left" triggerOnce duration={1000} style={{ flex: 1, display: 'flex' }}>
          <TextCol>
            <Subtitle>
              {tVal('historia.intro.subtitle', 'THE BIRTH OF A PASSION')}
            </Subtitle>
            <MainTitle>
              {tVal('historia.intro.title', 'Terra Brasilis Café is the result of a story that began long before our first harvest. It was born from a deep respect for the land, for the process, and for the people who dedicate their lives to growing exceptional coffee.')}
            </MainTitle>
            
            <Divider />
            
            <TextParagraph>
              {tVal('historia.intro.p1', 'We were born from a deep connection with the land, from generations who understood that the best coffee is not just grown — it is nurtured with patience, knowledge, and love.')}
            </TextParagraph>
            <TextParagraph>
              {tVal('historia.intro.p2', 'Today, we remain faithful to that vision with the determination to offer exceptional coffees that carry the soul of their origin in every cup.')}
            </TextParagraph>
            
            <CtaButton to="/finca">
              {tVal('historia.intro.cta', 'VISIT THE FARM')}
            </CtaButton>
          </TextCol>
        </Fade>

        <Fade direction="right" triggerOnce duration={1000} style={{ flex: 1, display: 'flex' }}>
          <ImageCol>
            <StoryImg 
              src={process.env.PUBLIC_URL + '/globalImgs/historia-main-image.webp'} 
              alt="Coffee beans" 
              loading="lazy"
            />
          </ImageCol>
        </Fade>
      </ContentWrapper>
    </TwoColSection>
  );
}

export default HistoryIntro;
