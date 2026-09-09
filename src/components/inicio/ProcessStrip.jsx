import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../i18n/I18nContext';

// ─── Styled Components ────────────────────────────────────────────────────────

const StripWrapper = styled.section`
  width: 100%;
  background: #dfd8c7;
  padding: 48px 20px 52px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-top: 1px solid rgba(185, 151, 91, 0.2);

  @media (max-width: 640px) {
    padding: 36px 16px 40px;
  }
`;

const StripTitle = styled.h2`
  font-family: 'Constantia', Georgia, serif;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(24px, 3vw, 32px);
  line-height: 120%;
  text-align: center;
  color: #183029;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0;
`;

const DiamondDivider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 10px;
`;

const DividerLine = styled.div`
  width: 40px;
  height: 1px;
  background: #b9975b;
  opacity: 0.5;
`;

const DiamondShape = styled.div`
  width: 10px;
  height: 10px;
  border: 2px solid #b9975b;
  transform: rotate(-45deg);
  box-sizing: border-box;
`;

// ─── Component ────────────────────────────────────────────────────────────────

function ProcessStrip() {
  const { t } = useTranslation();

  return (
    <StripWrapper id="process-strip">
      <StripTitle>
        {t('inicio.from_origin_to_bean') || 'FROM ORIGIN TO BEAN'}
      </StripTitle>
      <DiamondDivider>
        <DividerLine />
        <DiamondShape />
        <DividerLine />
      </DiamondDivider>
    </StripWrapper>
  );
}

export default ProcessStrip;
