import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../i18n/I18nContext';

// ─── SVGs ─────────────────────────────────────────────────────────────────────

const AltitudeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_430_301)">
      <path d="M9.00011 8.25L5.99987 2.25L1.49951 15.75H16.5007L12.7504 4.5L9.00011 8.25Z" stroke="#B9975B" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <defs>
      <clipPath id="clip0_430_301">
        <rect width="18" height="18" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const ClimateIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_430_306)">
      <path d="M6.74989 14.2506H13.1252C14.0204 14.2506 14.8788 13.895 15.5118 13.262C16.1448 12.629 16.5004 11.7704 16.5004 10.8752C16.5004 9.98 16.1448 9.12145 15.5118 8.48845C14.8788 7.85544 14.0204 7.49982 13.1252 7.49982H11.7826C11.5045 6.5667 10.9723 5.72931 10.2456 5.08125C9.51894 4.43318 8.62638 3.99996 7.66768 3.83C6.70897 3.66004 5.7219 3.76003 4.81675 4.1188C3.9116 4.47757 3.12404 5.08098 2.54207 5.86162C1.9601 6.64225 1.60666 7.56935 1.52123 8.5393C1.4358 9.50926 1.62175 10.4839 2.05831 11.3542C2.49487 12.2246 3.16484 12.9564 3.99334 13.4679C4.82184 13.9793 5.77624 14.2503 6.74989 14.2506Z" stroke="#B9975B" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <defs>
      <clipPath id="clip0_430_306">
        <rect width="18" height="18" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const SoilIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_430_311)">
      <path d="M1.49951 8.99981C1.49916 9.14327 1.53995 9.28382 1.61706 9.40479C1.69417 9.52577 1.80435 9.62209 1.93454 9.68235L8.385 12.615C8.57941 12.703 8.79037 12.7486 9.00379 12.7486C9.21721 12.7486 9.42817 12.703 9.62258 12.615L16.058 9.68985C16.1908 9.63017 16.3033 9.53316 16.3819 9.41063C16.4605 9.2881 16.5017 9.14536 16.5006 8.99981M1.49951 12.75C1.49916 12.8935 1.53995 13.034 1.61706 13.155C1.69417 13.276 1.80435 13.3723 1.93454 13.4326L8.385 16.3652C8.57941 16.4533 8.79037 16.4988 9.00379 16.4988C9.21721 16.4988 9.42817 16.4533 9.62258 16.3652L16.058 13.4401C16.1908 13.3804 16.3033 13.2834 16.3819 13.1608C16.4605 13.0383 16.5017 12.8956 16.5006 12.75M9.62292 1.63467C9.42748 1.54552 9.21518 1.49939 9.00038 1.49939C8.78557 1.49939 8.57327 1.54552 8.37783 1.63467L1.94988 4.55983C1.81679 4.61851 1.70362 4.71464 1.62418 4.83649C1.54474 4.95834 1.50244 5.10066 1.50244 5.24612C1.50244 5.39158 1.54474 5.5339 1.62418 5.65575C1.70362 5.7776 1.81679 5.87372 1.94988 5.9324L8.38533 8.86507C8.58077 8.95421 8.79307 9.00034 9.00788 9.00034C9.22268 9.00034 9.43498 8.95421 9.63042 8.86507L16.0659 5.93991C16.199 5.88122 16.3121 5.7851 16.3916 5.66325C16.471 5.5414 16.5133 5.39908 16.5133 5.25362C16.5133 5.10816 16.471 4.96584 16.3916 4.84399C16.3121 4.72214 16.199 4.62601 16.0659 4.56733L9.62292 1.63467Z" stroke="#B9975B" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <defs>
      <clipPath id="clip0_430_311">
        <rect width="18" height="18" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const NaturalShadeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_430_316)">
      <path d="M1.49951 15.75C1.49951 13.4999 2.88709 11.7298 5.30972 11.2498C7.12483 10.8898 8.99993 9.74974 9.74997 8.9997M8.24969 15C6.93266 15.0039 5.66224 14.5128 4.69038 13.624C3.71852 12.7351 3.11623 11.5135 3.00295 10.2013C2.88967 8.8892 3.27368 7.58242 4.07882 6.54016C4.88396 5.4979 6.05141 4.7963 7.34964 4.57452C11.6249 3.74948 12.7499 3.35947 14.25 1.49939C15.0001 2.99945 15.7501 4.63452 15.7501 7.49964C15.7501 11.6248 12.1649 15 8.24969 15Z" stroke="#B9975B" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <defs>
      <clipPath id="clip0_430_316">
        <rect width="18" height="18" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

// ─── Estilos ─────────────────────────────────────────────────────────────────

const StatsSection = styled.section`
  width: 100%;
  background: #DFD8C7;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 65px 100px 60px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 60px 40px;
    row-gap: 40px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 40px 20px;
    row-gap: 32px;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 640px) {
    position: relative;
    
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: -16px; /* Exactamente a la mitad del row-gap de 32px */
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 1px;
      background: #B9975B;
      opacity: 0.4;
    }
  }
`;

const IconWrapper = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatTitle = styled.h3`
  font-family: 'Constantia', var(--font-heading), serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #B9975B;
  margin: 0;
`;

const StatValue = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #1C2E26;
  margin: 0;
`;


// ─── Componente ───────────────────────────────────────────────────────────────

function FincaStats() {
  const { t } = useTranslation();

  const tVal = (key, fallback) => {
    const res = t(key);
    return res === key ? fallback : res;
  };

  const stats = [
    {
      icon: <AltitudeIcon />,
      title: tVal('finca.stats.altitude.title', 'ALTITUDE'),
      value: tVal('finca.stats.altitude.value', '900-1,300 MTS')
    },
    {
      icon: <ClimateIcon />,
      title: tVal('finca.stats.climate.title', 'CLIMATE'),
      value: tVal('finca.stats.climate.value', 'Mountain tropical')
    },
    {
      icon: <SoilIcon />,
      title: tVal('finca.stats.soil.title', 'SOIL'),
      value: tVal('finca.stats.soil.value', 'Rich in minerals')
    },
    {
      icon: <NaturalShadeIcon />,
      title: tVal('finca.stats.shade.title', 'NATURAL SHADE'),
      value: tVal('finca.stats.shade.value', 'Protection and biodiversity')
    }
  ];

  return (
    <StatsSection>
      <ContentWrapper>
        <Fade cascade damping={0.15} direction="up" triggerOnce duration={800} style={{ display: 'contents' }}>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <IconWrapper>{stat.icon}</IconWrapper>
              <StatTitle>{stat.title}</StatTitle>
              <StatValue>{stat.value}</StatValue>
            </StatItem>
          ))}
        </Fade>
      </ContentWrapper>
    </StatsSection>
  );
}

export default FincaStats;
