import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../i18n/I18nContext';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const ValuesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 100px 100px;
  gap: 44px;
  width: 100%;
  background: #DFD8C7;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    gap: 32px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const SectionTitle = styled.h2`
  font-family: 'Constantia', var(--font-heading), serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  text-align: center;
  color: #183029;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const DecorativeDivider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const DividerLine = styled.div`
  width: 40px;
  height: 1px;
  background: #B9975B;
  opacity: 0.7;
`;

const Diamond = styled.div`
  width: 8px;
  height: 8px;
  border: 1px solid #B9975B;
  transform: rotate(45deg);
`;

const ValuesRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const ValueItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 40px;
  gap: 16px;
  flex: 1;
  border-right: 1px solid #183029;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 1024px) {
    flex: 0 0 50%;
    
    &:nth-child(2) {
      border-right: none;
    }
    &:nth-child(1), &:nth-child(2) {
      border-bottom: 1px solid #183029;
    }
  }

  @media (max-width: 640px) {
    flex: 0 0 100%;
    border-right: none !important;
    border-bottom: 1px solid #183029;
    padding: 26px 20px;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const IconWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid #B9975B;
  border-radius: 24px;
`;

const ValueIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ValueTitle = styled.h3`
  font-family: 'Constantia', var(--font-heading), serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  color: #183029;
  margin: 0;
`;

const ValueDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 165%;
  text-align: center;
  color: #3D4A3E;
  margin: 0;
  max-width: 280px;
`;


// ─── Componente ───────────────────────────────────────────────────────────────

function HistoryValues() {
  const { t } = useTranslation();

  const tVal = (key, fallback) => {
    const res = t(key);
    return res === key ? fallback : res;
  };

  const valuesData = [
    {
      icon: 'authenticity.png',
      title: tVal('historia.values.auth.title', 'Authenticity'),
      description: tVal('historia.values.auth.desc', 'We cultivate the origin and our essence. Every cup reflects who we are and where we come from.')
    },
    {
      icon: 'respect.png',
      title: tVal('historia.values.respect.title', 'Respect'),
      description: tVal('historia.values.respect.desc', 'We respect the land, the people, and the process. They are the foundation of everything we do.')
    },
    {
      icon: 'excellence.png',
      title: tVal('historia.values.excellence.title', 'Excellence'),
      description: tVal('historia.values.excellence.desc', 'We pursue excellence in every detail, from the seed to the final cup.')
    },
    {
      icon: 'transparency.png',
      title: tVal('historia.values.transparency.title', 'Transparency'),
      description: tVal('historia.values.transparency.desc', 'We believe in honest and lasting relationships with all our partners.')
    }
  ];

  return (
    <ValuesSection>
      <Fade direction="up" triggerOnce duration={800}>
        <HeaderWrapper>
          <SectionTitle>{tVal('historia.values.title', 'OUR VALUES')}</SectionTitle>
          <DecorativeDivider>
            <DividerLine />
            <Diamond />
            <DividerLine />
          </DecorativeDivider>
        </HeaderWrapper>
      </Fade>

      <ValuesRow>
        <Fade cascade damping={0.15} direction="up" triggerOnce duration={800} style={{ display: 'contents' }}>
          {valuesData.map((val, index) => (
            <ValueItem key={index}>
              <IconWrapper>
                <ValueIcon
                  src={`${process.env.PUBLIC_URL}/values/${val.icon}`}
                  alt={val.title}
                  loading="lazy"
                />
              </IconWrapper>
              <ValueTitle>{val.title}</ValueTitle>
              <ValueDescription>{val.description}</ValueDescription>
            </ValueItem>
          ))}
        </Fade>
      </ValuesRow>
    </ValuesSection>
  );
}

export default HistoryValues;
