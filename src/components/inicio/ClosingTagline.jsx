import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../i18n/I18nContext';

// ─── Styled Components ────────────────────────────────────────────────────────

const SectionWrapper = styled.section`
  width: 100%;
  background: #dfd8c7;
  padding: 50px 20px 49px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const TaglineText = styled.h2`
  font-family: 'Constantia', Georgia, serif;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(24px, 3vw, 32px);
  line-height: 120%;
  text-align: center;
  color: #183029;
  margin: 0;
  max-width: 800px;
`;

// ─── Component ────────────────────────────────────────────────────────────────

function ClosingTagline() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="closing-tagline">
      <TaglineText>
        {t('inicio.closing_tagline') || '"The Origin Changes Everything"'}
      </TaglineText>
    </SectionWrapper>
  );
}

export default ClosingTagline;
