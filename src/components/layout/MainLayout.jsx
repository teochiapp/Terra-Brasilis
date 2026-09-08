import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

// ─── Styled components ────────────────────────────────────────────────────────

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  /* Compensa el header fijo */
  padding-top: var(--header-height);
`;

// ─── Componente ───────────────────────────────────────────────────────────────

/**
 * MainLayout — estructura global del sitio.
 *
 * Envuelve cada página con:
 *  - Header (fijo, global)
 *  - main (contenido de la página)
 *  - Footer (global)
 *
 * @example
 * <MainLayout>
 *   <Inicio />
 * </MainLayout>
 */
function MainLayout({ children }) {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
}

export default MainLayout;
