import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from '../../i18n/I18nContext';
import { Fade } from 'react-awesome-reveal';

const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const BannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #183029;
  color: #DFD8C7;
  padding: 24px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'Montserrat', sans-serif;
  animation: ${slideUp} 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px 48px;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 800px;

  h3 {
    margin: 0 0 10px 0;
    color: #B9975B;
    font-size: 18px;
    font-family: 'Constantia', serif;
  }

  p {
    margin: 0;
    font-size: 13px;
    line-height: 1.5;
    color: rgba(223, 216, 199, 0.8);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 10px 24px;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #B9975B;

  ${({ $primary }) =>
    $primary
      ? `
    background-color: #B9975B;
    color: #183029;
    
    &:hover {
      background-color: #a38249;
      border-color: #a38249;
    }
  `
      : `
    background-color: transparent;
    color: #B9975B;
    
    &:hover {
      background-color: rgba(185, 151, 91, 0.1);
    }
  `}
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(24, 48, 41, 0.8);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: #DFD8C7;
  color: #183029;
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  padding: 32px;
  max-height: 90vh;
  overflow-y: auto;

  h2 {
    font-family: 'Constantia', serif;
    color: #183029;
    margin-top: 0;
  }
`;

const CookieOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0;
  border-bottom: 1px solid rgba(24, 48, 41, 0.1);

  &:last-of-type {
    border-bottom: none;
  }

  .info {
    flex: 1;
    padding-right: 20px;
    
    h4 {
      margin: 0 0 8px 0;
      font-size: 15px;
    }
    
    p {
      margin: 0;
      font-size: 12px;
      color: #3D4F47;
      line-height: 1.5;
    }
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  flex-shrink: 0;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: #B9975B;
  }
  
  input:disabled + span {
    background-color: #183029;
    opacity: 0.5;
    cursor: not-allowed;
  }

  input:checked + span:before {
    transform: translateX(20px);
  }
`;

const ModalFooter = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

const CookieBanner = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Estado de las preferencias
  const [preferences, setPreferences] = useState({
    necessary: true, // Siempre true por GDPR
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Comprobar si ya existe el consentimiento guardado
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      setPreferences(JSON.parse(consent));
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    saveConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const allRejected = { necessary: true, analytics: false, marketing: false };
    saveConsent(allRejected);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs) => {
    localStorage.setItem('cookie_consent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowModal(false);
    
    // Aquí puedes disparar eventos o inicializar Google Analytics / Píxeles
    // basado en prefs.analytics y prefs.marketing
    console.log("Cookies guardadas:", prefs);
  };

  const handleToggle = (type) => {
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner && !showModal) return null;

  return (
    <>
      {showBanner && !showModal && (
        <BannerWrapper>
          <Content>
            <h3>{t('cookie_banner.title')}</h3>
            <p>
              {t('cookie_banner.description')}
            </p>
          </Content>
          <ButtonGroup>
            <Button onClick={() => setShowModal(true)}>{t('cookie_banner.btn_config')}</Button>
            <Button onClick={handleRejectAll}>{t('cookie_banner.btn_reject')}</Button>
            <Button $primary onClick={handleAcceptAll}>{t('cookie_banner.btn_accept')}</Button>
          </ButtonGroup>
        </BannerWrapper>
      )}

      {showModal && (
        <ModalOverlay>
          <Fade duration={300}>
            <ModalContent>
              <h2>{t('cookie_banner.modal_title')}</h2>
              <p style={{ fontSize: '14px', marginBottom: '30px', color: '#3D4F47' }}>
                {t('cookie_banner.modal_desc')}
              </p>

              <CookieOption>
                <div className="info">
                  <h4>{t('cookie_banner.necessary_title')}</h4>
                  <p>{t('cookie_banner.necessary_desc')}</p>
                </div>
                <ToggleSwitch>
                  <input type="checkbox" checked={true} disabled />
                  <span />
                </ToggleSwitch>
              </CookieOption>

              <CookieOption>
                <div className="info">
                  <h4>{t('cookie_banner.analytics_title')}</h4>
                  <p>{t('cookie_banner.analytics_desc')}</p>
                </div>
                <ToggleSwitch>
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics}
                    onChange={() => handleToggle('analytics')}
                  />
                  <span />
                </ToggleSwitch>
              </CookieOption>

              <CookieOption>
                <div className="info">
                  <h4>{t('cookie_banner.marketing_title')}</h4>
                  <p>{t('cookie_banner.marketing_desc')}</p>
                </div>
                <ToggleSwitch>
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing}
                    onChange={() => handleToggle('marketing')}
                  />
                  <span />
                </ToggleSwitch>
              </CookieOption>

              <ModalFooter>
                <Button $primary onClick={handleSavePreferences}>{t('cookie_banner.btn_save')}</Button>
              </ModalFooter>
            </ModalContent>
          </Fade>
        </ModalOverlay>
      )}
    </>
  );
};

export default CookieBanner;
