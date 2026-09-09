import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../i18n/I18nContext';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const QuoteSection = styled.section`
  width: 100%;
  background: #DFD8C7;
  display: flex;
  justify-content: center;
  padding: 0px 20px 80px;

  @media (max-width: 640px) {
    padding: 0px 20px 40px;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 800px;
  width: 100%;
`;

const SeparatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Line = styled.div`
  width: 40px;
  height: 1px;
  background: #B9975B;
  opacity: 0.7;
`;

const Diamond = styled.div`
  width: 8px;
  height: 8px;
  border: 1.5px solid #B9975B;
  transform: rotate(45deg);
`;

const QuoteText = styled.p`
  font-family: 'Cormorant Garamond', 'Constantia', var(--font-heading), serif;
  font-style: italic;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
  text-align: center;
  color: #1C2E26;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 22px;
  }
`;


// ─── Componente ───────────────────────────────────────────────────────────────

function FincaQuote() {
  const { t } = useTranslation();

  const tVal = (key, fallback) => {
    const res = t(key);
    return res === key ? fallback : res;
  };

  return (
    <QuoteSection>
      <Fade direction="up" triggerOnce duration={1000}>
        <QuoteContainer>
          <SeparatorContainer>
            <Line />
            <Diamond />
            <Line />
          </SeparatorContainer>
          <QuoteText>
            {tVal('finca.quote', '“Nature is in no hurry, and yet, everything is accomplished.”')}
          </QuoteText>
        </QuoteContainer>
      </Fade>
    </QuoteSection>
  );
}

export default FincaQuote;
