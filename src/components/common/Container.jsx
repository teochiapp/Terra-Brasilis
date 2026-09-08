import styled from 'styled-components';

/**
 * Container — patrón de ancho máximo centralizado.
 *
 * Controla: max-width, márgenes automáticos, padding horizontal, responsive.
 *
 * @example
 * <Container>
 *   <p>Contenido centrado y con padding correcto</p>
 * </Container>
 */
const Container = styled.div`
  width: 100%;
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-padding-x);
  padding-right: var(--container-padding-x);

  @media (min-width: 640px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

export default Container;
