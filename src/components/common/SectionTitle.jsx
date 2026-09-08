import styled from 'styled-components';

// ─── Styled components ────────────────────────────────────────────────────────

const Wrapper = styled.div`
  margin-bottom: var(--spacing-2xl);
  text-align: ${({ $align }) => $align ?? 'left'};
`;

const Eyebrow = styled.span`
  display: block;
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-widest);
  text-transform: uppercase;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-sm);
`;

const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: ${({ $light }) => ($light ? '#ffffff' : 'var(--color-heading)')};
  line-height: var(--line-height-tight);
  margin-bottom: ${({ $description }) => ($description ? 'var(--spacing-md)' : '0')};

  @media (min-width: 640px) {
    font-size: var(--font-size-4xl);
  }
`;

const Description = styled.p`
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: ${({ $light }) => ($light ? 'rgba(255,255,255,0.8)' : 'var(--color-text-light)')};
  max-width: 600px;
  margin: ${({ $align }) => ($align === 'center' ? '0 auto' : '0')};
`;

const Divider = styled.div`
  width: 48px;
  height: 3px;
  background-color: var(--color-secondary);
  margin-top: var(--spacing-md);
  margin-left: ${({ $align }) => ($align === 'center' ? 'auto' : '0')};
  margin-right: ${({ $align }) => ($align === 'center' ? 'auto' : '0')};
`;

// ─── Componente ───────────────────────────────────────────────────────────────

/**
 * SectionTitle — título de sección estandarizado.
 *
 * @param {string} eyebrow - Texto pequeño sobre el título (etiqueta de sección)
 * @param {string} title - Título principal
 * @param {string} description - Descripción opcional bajo el título
 * @param {'left'|'center'|'right'} align - Alineación del texto
 * @param {boolean} light - Versión en color claro (para fondos oscuros)
 * @param {boolean} showDivider - Muestra línea decorativa bajo el título
 *
 * @example
 * <SectionTitle
 *   eyebrow="Nuestra historia"
 *   title="Décadas de pasión"
 *   description="La historia de Terra Brasilis..."
 *   align="center"
 * />
 */
function SectionTitle({ eyebrow, title, description, align = 'left', light = false, showDivider = true }) {
  return (
    <Wrapper $align={align}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Title $light={light} $description={!!description}>
        {title}
      </Title>
      {showDivider && <Divider $align={align} />}
      {description && (
        <Description $light={light} $align={align} style={{ marginTop: 'var(--spacing-md)' }}>
          {description}
        </Description>
      )}
    </Wrapper>
  );
}

export default SectionTitle;
