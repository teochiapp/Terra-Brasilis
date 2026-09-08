import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import styled from 'styled-components';

import { useTranslation, SUPPORTED_LANGUAGES } from '../../i18n/I18nContext';

// ─── Styled Components ────────────────────────────────────────────────────────

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height, 111px);
  background: #DFD8C7;
  border-radius: 0;
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? '0 4px 20px rgba(24, 48, 41, 0.08)' : 'none'};
  border-bottom: 1px solid
    ${({ $scrolled }) => ($scrolled ? 'rgba(24, 48, 41, 0.12)' : 'transparent')};
  transition: box-shadow var(--transition-base), border-color var(--transition-base);
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  gap: clamp(24px, 4vw, 94px);

  @media (max-width: 1200px) {
    padding: 0 32px;
  }

  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

const BrandLogo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 12px;
  width: 176px;
  height: 105px;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-decoration: none;
  transition: opacity var(--transition-fast);

  &:hover {
    opacity: 0.88;
  }

  @media (max-width: 640px) {
    width: 136px;
    height: 80px;
  }
`;

const BrandLogoImg = styled.img`
  width: 176px;
  height: 105px;
  object-fit: contain;
  display: block;

  @media (max-width: 640px) {
    width: 136px;
    height: 80px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

const NavCenter = styled.nav`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex: 0 0 auto;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  gap: 16px;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const NavItem = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #183029;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  position: relative;
  transition: color var(--transition-fast), font-weight var(--transition-fast);

  &.active {
    font-weight: 600;
    transition: 0.1s;
  }



  &.active::after,
  &:hover::after {
    transition: 0.1s;
  }

  &:hover {
    color: #183029;
  }
`;

// ─── Selector de idioma dropdown ──────────────────────────────────────────────

const LangDropdownWrapper = styled.div`
  position: relative;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const LangTriggerButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 22px;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #183029;
  text-transform: uppercase;
  transition: opacity var(--transition-fast);

  &:hover {
    opacity: 0.8;
  }

  svg {
    transition: transform var(--transition-fast);
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

const LangMenu = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  width: 133px;
  height: 164px;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  background: #183029;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 110;
  animation: fadeIn 150ms ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -4px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
`;

const LangOption = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  width: 133px;
  height: 37px;
  background: ${({ $active }) =>
    $active ? 'rgba(223, 216, 199, 0.12)' : 'transparent'};
  border: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: ${({ $active }) => ($active ? '700' : '500')};
  font-size: 14px;
  line-height: 17px;
  color: #DFD8C7;
  text-align: center;
  white-space: nowrap;
  transition: background-color var(--transition-fast);

  &:hover {
    background: rgba(223, 216, 199, 0.16);
  }
`;

// ─── Mobile Menu ─────────────────────────────────────────────────────────────

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #183029;
  padding: var(--spacing-sm, 8px);
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: var(--header-height, 111px);
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #DFD8C7;
  border-top: 1px solid rgba(24, 48, 41, 0.1);
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  gap: 20px;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform var(--transition-slow);
  z-index: 99;
  overflow-y: auto;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileNavItem = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #183029;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(24, 48, 41, 0.12);
  transition: color var(--transition-fast);

  &.active {
    font-weight: 700;
  }

  &:hover {
    color: var(--color-secondary, #B9975B);
  }
`;

const MobileLangWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  padding-top: 24px;
`;

const MobileLangLabel = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(24, 48, 41, 0.6);
  letter-spacing: 0.08em;
`;

const MobileLangButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const MobileLangButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: ${({ $active }) => ($active ? '700' : '500')};
  color: #183029;
  background: ${({ $active }) => ($active ? 'rgba(24, 48, 41, 0.15)' : 'transparent')};
  border: 1px solid ${({ $active }) => ($active ? '#183029' : 'rgba(24, 48, 41, 0.25)')};
  border-radius: var(--radius-sm, 4px);
  padding: 6px 14px;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    background: rgba(24, 48, 41, 0.12);
  }
`;

// ─── Componente ───────────────────────────────────────────────────────────────

function Header() {
  const { t, language, changeLanguage } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar menú mobile al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false);
    setLangDropdownOpen(false);
  }, [location.pathname]);

  // Detectar scroll para ajustar sombra y borde
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar dropdown de idioma al hacer click afuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    }
    if (langDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langDropdownOpen]);

  // Cerrar con Escape
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setLangDropdownOpen(false);
        setMobileOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { to: '/', label: t('nav.inicio'), end: true },
    { to: '/historia', label: t('nav.historia') },
    { to: '/finca', label: t('nav.finca') },
    { to: '/profesionales', label: t('nav.profesionales') },
    { to: '/contacto', label: t('nav.contacto') },
  ];

  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === language) || {
    code: language || 'es',
    label: (language || 'es').toUpperCase(),
    name: 'Español',
  };

  return (
    <>
      <HeaderWrapper $scrolled={scrolled || mobileOpen}>
        <NavbarContainer>
          {/* brand-logo a la izquierda */}
          <HeaderLeft>
            <BrandLogo to="/" aria-label="Terra Brasilis - Inicio" onClick={() => window.scrollTo(0, 0)}>
              <BrandLogoImg
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt="Terra Brasilis"
                width="176"
                height="105"
              />
            </BrandLogo>
          </HeaderLeft>

          {/* Menú de navegación centrado horizontalmente */}
          <NavCenter aria-label="Navegación principal">
            {navLinks.map(({ to, label, end }) => (
              <NavItem key={to} to={to} end={end} onClick={() => window.scrollTo(0, 0)}>
                {label}
              </NavItem>
            ))}
          </NavCenter>

          {/* Selector de idioma separado a la derecha + menú mobile */}
          <HeaderRight>
            {/* EN▼ Selector de idioma según Figma */}
            <LangDropdownWrapper ref={dropdownRef}>
              <LangTriggerButton
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={langDropdownOpen}
                aria-label={`Idioma actual: ${currentLangObj.name}. Cambiar idioma.`}
                $isOpen={langDropdownOpen}
              >
                {currentLangObj.label}
                <ChevronDown size={14} strokeWidth={2.5} aria-hidden="true" />
              </LangTriggerButton>

              <LangMenu $isOpen={langDropdownOpen} role="menu">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <LangOption
                    key={lang.code}
                    role="menuitem"
                    $active={language === lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    aria-label={`Seleccionar idioma ${lang.name}`}
                  >
                    {lang.label} {lang.name}
                  </LangOption>
                ))}
              </LangMenu>
            </LangDropdownWrapper>

            {/* Botón hamburguesa mobile */}
            <MobileMenuButton
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </MobileMenuButton>
          </HeaderRight>
        </NavbarContainer>
      </HeaderWrapper>

      {/* Menú Mobile */}
      <MobileMenu $open={mobileOpen} aria-hidden={!mobileOpen}>
        {navLinks.map(({ to, label, end }) => (
          <MobileNavItem
            key={to}
            to={to}
            end={end}
            onClick={() => {
              setMobileOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            {label}
          </MobileNavItem>
        ))}

        <MobileLangWrapper>
          <MobileLangLabel>Idioma / Language</MobileLangLabel>
          <MobileLangButtons>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <MobileLangButton
                key={lang.code}
                $active={language === lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setMobileOpen(false);
                }}
                aria-label={`Cambiar idioma a ${lang.name}`}
                aria-pressed={language === lang.code}
              >
                {lang.label}
              </MobileLangButton>
            ))}
          </MobileLangButtons>
        </MobileLangWrapper>
      </MobileMenu>
    </>
  );
}

export default Header;

