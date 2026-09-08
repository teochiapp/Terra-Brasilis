import styled, { css } from 'styled-components';

// ─── Variantes ────────────────────────────────────────────────────────────────

const variants = {
  primary: css`
    background-color: var(--color-primary);
    color: #ffffff;
    border: 2px solid var(--color-primary);

    &:hover {
      background-color: var(--color-heading);
      border-color: var(--color-heading);
    }
  `,
  secondary: css`
    background-color: var(--color-secondary);
    color: #ffffff;
    border: 2px solid var(--color-secondary);

    &:hover {
      background-color: #a07e40;
      border-color: #a07e40;
    }
  `,
  outline: css`
    background-color: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);

    &:hover {
      background-color: var(--color-primary);
      color: #ffffff;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: var(--color-primary);
    border: 2px solid transparent;

    &:hover {
      border-color: var(--color-primary);
    }
  `,
};

// ─── Tamaños ─────────────────────────────────────────────────────────────────

const sizes = {
  sm: css`
    padding: 0.5rem 1rem;
    font-size: var(--font-size-sm);
  `,
  md: css`
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-base);
  `,
  lg: css`
    padding: 1rem 2rem;
    font-size: var(--font-size-lg);
  `,
};

// ─── Styled component ─────────────────────────────────────────────────────────

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition:
    background-color var(--transition-base),
    color var(--transition-base),
    border-color var(--transition-base),
    transform var(--transition-fast);
  text-decoration: none;
  line-height: 1;

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Variante */
  ${({ $variant = 'primary' }) => variants[$variant] ?? variants.primary}

  /* Tamaño */
  ${({ $size = 'md' }) => sizes[$size] ?? sizes.md}

  /* Full width */
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
`;

// ─── Componente ───────────────────────────────────────────────────────────────

/**
 * Button — componente de botón reutilizable.
 *
 * @param {'primary'|'secondary'|'outline'|'ghost'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} fullWidth
 *
 * @example
 * <Button variant="primary" size="lg">Descubrir más</Button>
 * <Button variant="outline" size="md">Ver más</Button>
 */
function Button({ variant = 'primary', size = 'md', fullWidth = false, children, ...props }) {
  return (
    <StyledButton $variant={variant} $size={size} $fullWidth={fullWidth} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
