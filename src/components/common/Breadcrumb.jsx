import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../../i18n/I18nContext';

// ─── Mapeo de rutas a imágenes y configuración ──────────────────────────────────
const BREADCRUMB_CONFIG = {
  '/contacto': {
    pageKey: 'contacto',
    image: `${process.env.PUBLIC_URL}/breadcrumbs/contact.webp`,
    bgPosition: 'center center',
    defaultTitle: 'Contacto',
  },
  '/historia': {
    pageKey: 'historia',
    image: `${process.env.PUBLIC_URL}/breadcrumbs/story.webp`,
    bgPosition: 'center 55%',
    bgSize: '100%',
    defaultTitle: 'Our Story',
  },
  '/finca': {
    pageKey: 'finca',
    image: `${process.env.PUBLIC_URL}/breadcrumbs/farm.webp`,
    bgPosition: 'center 45%',
    defaultTitle: 'La Finca',
  },
  '/profesionales': {
    pageKey: 'profesionales',
    image: `${process.env.PUBLIC_URL}/breadcrumbs/professionals.webp`,
    bgPosition: 'center 35%',
    defaultTitle: 'Profesionales',
  },
};

// ─── Styled Components ────────────────────────────────────────────────────────

const BannerWrapper = styled.section`
  /* Auto layout según Figma */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 100%;
  height: 30vh;

  /* Fondo con gradiente oscuro rgba(24, 48, 41, 0.68) e imagen */
  background: 
    linear-gradient(0deg, rgba(24, 48, 41, 0.68), rgba(24, 48, 41, 0.68)),
    url(${({ $bgImage }) => $bgImage});
  background-size: ${({ $bgSize }) => $bgSize || 'cover'};
  background-position: ${({ $bgPosition }) => $bgPosition || 'center center'};
  background-repeat: no-repeat;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: 768px) {
    height: 190px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const BannerTitle = styled.h1`
  /* Tipografía según Figma */
  font-family: 'Constantia', var(--font-heading), 'Times New Roman', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  color: #DFD8C7;
  margin: 0;
  padding: 0 var(--spacing-md, 16px);
  max-width: 100%;
  word-break: break-word;
  letter-spacing: 0%;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  @media (max-width: 768px) {
    font-size: 44px;
    line-height: 54px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

// ─── Componente ───────────────────────────────────────────────────────────────

/**
 * Breadcrumb — Banner de cabecera común para las páginas internas (no Home).
 * Puede usarse de forma automática en MainLayout detectando la ruta actual,
 * o con props explícitas (title, image, bgPosition) si se requiere customización.
 */
function Breadcrumb({ title: explicitTitle, image: explicitImage, bgPosition: explicitPosition }) {
  const location = useLocation();
  const { t } = useTranslation();

  // Normalizar ruta quitando trailing slash
  const path = location.pathname.length > 1 ? location.pathname.replace(/\/$/, '') : location.pathname;

  // Si estamos en Home ('/') y no se especificó título/imagen explícito, no renderizar
  if (path === '/' && !explicitTitle && !explicitImage) {
    return null;
  }

  const config = BREADCRUMB_CONFIG[path];

  // Si la ruta no está mapeada y no hay props explícitas, no renderizar
  if (!config && !explicitTitle && !explicitImage) {
    return null;
  }

  const bgImage = explicitImage || config?.image;
  const bgPosition = explicitPosition || config?.bgPosition || 'center center';
  const bgSize = config?.bgSize || 'cover';

  // Obtener título traducido: primero 'breadcrumb.<key>', luego 'nav.<key>', luego defaultTitle
  const resolvedTitle =
    explicitTitle ||
    (config ? t(`breadcrumb.${config.pageKey}`) || t(`nav.${config.pageKey}`) || config.defaultTitle : '');

  return (
    <BannerWrapper
      id="page-breadcrumb-banner"
      $bgImage={bgImage}
      $bgPosition={bgPosition}
      $bgSize={bgSize}
      aria-label={resolvedTitle}
    >
      <BannerTitle>{resolvedTitle}</BannerTitle>
    </BannerWrapper>
  );
}

export default Breadcrumb;
