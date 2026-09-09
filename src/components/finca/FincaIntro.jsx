import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../i18n/I18nContext';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const Section = styled.section`
  width: 100%;
  background: #EDE6D8;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 80px 100px;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 60px 40px;
    gap: 60px;
  }

  @media (max-width: 640px) {
    padding: 40px 20px;
    gap: 40px;
  }
`;

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1;
  max-width: 635px;
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
`;

const ImageCol = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 641px;
`;

const FincaImg = styled.img`
  width: 100%;
  height: 534px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 1024px) {
    height: 450px;
  }

  @media (max-width: 640px) {
    height: 300px;
  }
`;

// ─── Componente ───────────────────────────────────────────────────────────────

function FincaIntro() {
  const { t } = useTranslation();

  const tVal = (key, fallback) => {
    const res = t(key);
    return res === key ? fallback : res;
  };

  return (
    <Section>
      <ContentWrapper>
        <Fade direction="left" triggerOnce duration={1000} style={{ flex: 1, display: 'flex' }}>
          <TextCol>
            <Subtitle>
              {tVal('finca.intro.subtitle', 'AMONG MOUNTAINS, LAND, AND COFFEE')}
            </Subtitle>
            <MainTitle>
              {tVal('finca.intro.title', 'We grow coffee in the mountains of Brazil, where nature and human work come together to create something exceptional.')}
            </MainTitle>
            
            <Divider />
            
            <TextParagraph>
              {tVal('finca.intro.p1', 'Our farm is located in a privileged region for its climate, altitude, and biodiversity — ideal conditions for cultivating specialty coffee.')}
            </TextParagraph>
            <TextParagraph>
              {tVal('finca.intro.p2', 'Here, the rhythms of nature and human work coexist in balance, giving life to coffees that carry the identity of their terroir.')}
            </TextParagraph>
          </TextCol>
        </Fade>

        <Fade direction="right" triggerOnce duration={1000} style={{ flex: 1, display: 'flex' }}>
          <ImageCol>
            <FincaImg 
              src={process.env.PUBLIC_URL + '/globalImgs/finca.webp'} 
              alt="Terra Brasilis Farm" 
              loading="lazy"
            />
          </ImageCol>
        </Fade>
      </ContentWrapper>
    </Section>
  );
}

export default FincaIntro;
