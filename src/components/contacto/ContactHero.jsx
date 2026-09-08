import styled from 'styled-components';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media (min-width: 640px) {
    height: 340px;
  }

  @media (min-width: 1024px) {
    height: 380px;
  }
`;

/* Fondo de imagen placeholder — se reemplazará con imagen real */
const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--color-primary);
  background-image: linear-gradient(
    135deg,
    #183029 0%,
    #1e3d30 40%,
    #2a4a3a 100%
  );

  /* Patrón de textura sutil */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      ellipse at 60% 40%,
      rgba(185, 151, 91, 0.18) 0%,
      transparent 55%
    );
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(24, 48, 41, 0.68);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding-x);

  @media (min-width: 640px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2.5rem;
  }
`;

const Eyebrow = styled.span`
  display: block;
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-widest);
  text-transform: uppercase;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-md);
`;

const HeroTitle = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: var(--font-weight-bold);
  color: #ffffff;
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  margin: 0;
`;

// ─── Componente ───────────────────────────────────────────────────────────────

/**
 * ContactHero — banner superior de la página de contacto.
 * Fondo oscuro con overlay, eyebrow y título grande.
 */
function ContactHero({ eyebrow, title }) {
  return (
    <HeroWrapper id="contacto-hero">
      <HeroBg />
      <HeroOverlay />
      <HeroContent>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <HeroTitle>{title}</HeroTitle>
      </HeroContent>
    </HeroWrapper>
  );
}

export default ContactHero;
