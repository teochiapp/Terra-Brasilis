import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../i18n/I18nContext';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const StatsBarSection = styled.section`
  width: 100%;
  background: #183029;
  display: flex;
  justify-content: center;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const StatItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  gap: 8px;
  flex: 1;
  border-right: ${({ $isLast }) => ($isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.082)')};

  @media (max-width: 768px) {
    flex: 0 0 50%;
    padding: 32px 20px;
    border: none !important;
    position: relative;
    
    ${({ $index }) => ($index === 0 || $index === 1) && `
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 1px;
        background: #B9975B;
        opacity: 0.5;
      }
    `}
  }

  @media (max-width: 480px) {
    flex: 0 0 100%;
    padding: 40px 20px;

    ${({ $isLast }) => !$isLast && `
      &::after {
        display: block;
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 1px;
        background: #B9975B;
        opacity: 0.5;
      }
    `}
  }
`;

const StatNumber = styled.span`
  font-family: 'Constantia', var(--font-heading), serif;
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 63px;
  color: #B9975B;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 42px;
    line-height: 50px;
  }
`;

const StatLabel = styled.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;


// ─── Componente ───────────────────────────────────────────────────────────────

function HistoryStats() {
  const { t } = useTranslation();

  const tVal = (key, fallback) => {
    const res = t(key);
    return res === key ? fallback : res;
  };

  const stats = [
    {
      number: '+20',
      label: tVal('historia.stats.tradition', 'YEARS OF TRADITION')
    },
    {
      number: '2',
      label: tVal('historia.stats.varieties', 'EXCLUSIVE VARIETIES')
    },
    {
      number: '100%',
      label: tVal('historia.stats.origin', 'ORIGIN COFFEE')
    },
    {
      number: '1',
      label: tVal('historia.stats.mission', 'CLEAR MISSION')
    }
  ];

  return (
    <StatsBarSection>
      <StatsContainer>
        <Fade cascade damping={0.15} direction="up" triggerOnce duration={800} style={{ display: 'contents' }}>
          {stats.map((stat, index) => (
            <StatItem key={index} $index={index} $isLast={index === stats.length - 1}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </Fade>
      </StatsContainer>
    </StatsBarSection>
  );
}

export default HistoryStats;
