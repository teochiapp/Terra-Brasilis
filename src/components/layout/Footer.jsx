import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useTranslation } from '../../i18n/I18nContext';

// ─── SVG Social Icons ─────────────────────────────────────────────────────────

const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#B9975B"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#B9975B"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#B9975B"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" fill="#B9975B" />
  </svg>
);

// ─── Styled Components ────────────────────────────────────────────────────────

const FooterWrapper = styled.footer`
  width: 100%;
  background: #183029;
  padding: 0 80px 36px 80px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 0 40px 32px 40px;
  }

  @media (max-width: 640px) {
    padding: 0 20px 28px 20px;
  }
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.12549);
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 48px;
  gap: 48px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 340px;
  max-width: 100%;
  flex-shrink: 0;
`;

const FooterLogo = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  width: 217px;
  height: 123px;
  transition: opacity var(--transition-fast);

  &:hover {
    opacity: 0.88;
  }
`;

const FooterLogoImg = styled.img`
  width: 217px;
  height: 123px;
  object-fit: contain;
  display: block;
`;

const FooterBrandDescription = styled.p`
  width: 100%;
  max-width: 340px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #ffffff;
  opacity: 0.7;
  margin: 0;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: clamp(32px, 5vw, 64px);
  flex-wrap: wrap;

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    width: 100%;
  }
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const FooterColTitle = styled.h4`
  font-family: 'Constantia', Georgia, serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #b9975b;
  margin: 0;
`;

const FooterNavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const FooterLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  opacity: 0.8;
  text-decoration: none;
  transition: color var(--transition-fast), opacity var(--transition-fast);

  &:hover {
    color: #b9975b;
    opacity: 1;
  }
`;

const FooterExternalLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  opacity: 0.8;
  text-decoration: none;
  transition: color var(--transition-fast), opacity var(--transition-fast);

  &:hover {
    color: #b9975b;
    opacity: 1;
  }
`;

const FooterText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  opacity: 0.8;
`;

const FooterAddress = styled.address`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  opacity: 0.8;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
`;

const SocialButton = styled.a`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.12549);
  border-radius: 18px;
  background: transparent;
  transition: all var(--transition-fast);

  &:hover {
    border-color: #b9975b;
    background: rgba(185, 151, 91, 0.15);
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding-top: 32px;
  }
`;

const CopyrightText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  opacity: 0.5;
  margin: 0;
`;

const MottoText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #b9975b;
  opacity: 0.8;
  margin: 0;
`;

// ─── Componente ───────────────────────────────────────────────────────────────

function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { to: '/', label: t('nav.inicio') || 'Home' },
    { to: '/historia', label: t('nav.historia') || 'Our Story' },
    { to: '/finca', label: t('nav.finca') || 'The Farm' },
    { to: '/profesionales', label: t('nav.profesionales') || 'For Professionals' },
  ];

  return (
    <FooterWrapper>
      <FooterInner>
        {/* Línea divisoria superior */}
        <FooterDivider />

        <FooterTop>
          {/* Columna Marca */}
          <FooterBrand>
            <FooterLogo to="/" aria-label="Terra Brasilis - Inicio">
              <FooterLogoImg
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt="Terra Brasilis"
                width="217"
                height="123"
              />
            </FooterLogo>
            <FooterBrandDescription>
              {t('footer.tagline') ||
                'Dedicated to cultivating and roasting the most exclusive varieties of specialty coffee on our family farm in Minas Gerais, Brazil.'}
            </FooterBrandDescription>
          </FooterBrand>

          {/* Contenedor de enlaces y contacto */}
          <FooterLinksContainer>
            {/* Columna 1: Navigation */}
            <FooterCol>
              <FooterColTitle>{t('footer.nav_title') || 'Navigation'}</FooterColTitle>
              <FooterNavItems>
                {navLinks.map(({ to, label }) => (
                  <FooterLink key={to} to={to}>
                    {label}
                  </FooterLink>
                ))}
              </FooterNavItems>
            </FooterCol>

            {/* Columna 2: Information */}
            <FooterCol>
              <FooterColTitle>{t('footer.info_title') || 'Information'}</FooterColTitle>
              <FooterNavItems>
                <FooterLink to="/aviso-legal">
                  {t('footer.legal') || 'Legal Notice'}
                </FooterLink>
                <FooterLink to="/privacidad">
                  {t('footer.privacy') || 'Privacy Policy'}
                </FooterLink>
              </FooterNavItems>
            </FooterCol>

            {/* Columna 3: Contact */}
            <FooterCol>
              <FooterColTitle>{t('footer.contact_title') || 'Contact'}</FooterColTitle>
              <FooterNavItems>
                <FooterText>Terra Brasilis Café</FooterText>
                <FooterExternalLink href="mailto:henrique@terrabrasilis.cafe">
                  henrique@terrabrasilis.cafe
                </FooterExternalLink>
                <FooterAddress>
                  Sítio do Branco<br />
                  Estrada Municipal Lamartine Peçanha, 1825 · Km 2<br />
                  Boa Vista · Piracaia, São Paulo · Brasil<br />
                  CEP 12971-008
                </FooterAddress>

                {/* Íconos sociales circulares según Figma */}
                <SocialIcons aria-label="Redes sociales">
                  <SocialButton
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Terra Brasilis"
                  >
                    <InstagramIcon />
                  </SocialButton>
                  <SocialButton
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook de Terra Brasilis"
                  >
                    <FacebookIcon />
                  </SocialButton>
                  <SocialButton
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube de Terra Brasilis"
                  >
                    <YoutubeIcon />
                  </SocialButton>
                </SocialIcons>
              </FooterNavItems>
            </FooterCol>
          </FooterLinksContainer>
        </FooterTop>

        {/* Barra inferior de copyright y motto */}
        <FooterBottom>
          <CopyrightText>
            {t('footer.copyright') ||
              '© 2026 Terra Brasilis Specialty Coffee. All rights reserved.'}
          </CopyrightText>
          <MottoText>
            {t('footer.motto') || 'Grown with passion, roasted with precision.'}
          </MottoText>
        </FooterBottom>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;

