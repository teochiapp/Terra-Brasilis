import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../i18n/I18nContext';

// ─── Styled Components ────────────────────────────────────────────────────────

const SectionWrapper = styled.section`
  width: 100%;
  background: #dfd8c7;
  padding: 0 40px 64px;
  box-sizing: border-box;
`;

const StepsContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(24px, 6vw, 100px);
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  flex: 1;
  min-width: 80px;
`;

const IconWrapper = styled.div`
  width: clamp(40px, 4.5vw, 56px);
  height: clamp(40px, 4.5vw, 56px); 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepIconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StepTitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #183029;
`;


// ─── Component ────────────────────────────────────────────────────────────────

function ProcessStepsRow() {
  const { t } = useTranslation();

  const steps = [
    {
      id: 'cultivation',
      label: t('inicio.process_steps.cultivation') || 'CULTIVATION',
      imgSrc: '/steps-img/cultivation.png',
    },
    {
      id: 'flowering',
      label: t('inicio.process_steps.flowering') || 'FLOWERING',
      imgSrc: '/steps-img/flowering.png',
    },
    {
      id: 'harvesting',
      label: t('inicio.process_steps.harvesting') || 'HARVESTING',
      imgSrc: '/steps-img/harvesting.png',
    },
    {
      id: 'selection',
      label: t('inicio.process_steps.selection') || 'SELECTION',
      imgSrc: '/steps-img/selection.png',
    },
    {
      id: 'processing',
      label: t('inicio.process_steps.processing') || 'PROCESSING',
      imgSrc: '/steps-img/processing.png',
    },
    {
      id: 'export',
      label: t('inicio.process_steps.export') || 'EXPORT',
      imgSrc: '/steps-img/export.png',
    },
  ];

  return (
    <SectionWrapper id="process-steps-row">
      <StepsContainer>
        <Fade cascade damping={0.15} direction="up" triggerOnce duration={600}>
          {steps.map((step) => (
            <StepItem key={step.id}>
              <IconWrapper>
                <StepIconImg src={step.imgSrc} alt={step.label} />
              </IconWrapper>
              <StepTitle>{step.label}</StepTitle>
            </StepItem>
          ))}
        </Fade>
      </StepsContainer>
    </SectionWrapper>
  );
}

export default ProcessStepsRow;
