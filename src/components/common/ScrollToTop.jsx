import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop automáticamente desplaza la ventana hacia la parte superior de la página (0, 0)
 * cada vez que cambia la ruta en React Router.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
