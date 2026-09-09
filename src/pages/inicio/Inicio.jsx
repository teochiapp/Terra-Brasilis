import { useEffect } from 'react';

import { useTranslation } from '../../i18n/I18nContext';
import HomeHero from '../../components/inicio/HomeHero';
import NuestrosCafes from '../../components/inicio/NuestrosCafes';
import HomeHistoria from '../../components/inicio/HomeHistoria';
import ProcessStrip from '../../components/inicio/ProcessStrip';
import ProcessStepsRow from '../../components/inicio/ProcessStepsRow';
import ProfessionalsBanner from '../../components/inicio/ProfessionalsBanner';
import ClosingTagline from '../../components/inicio/ClosingTagline';

// ─── Componente ───────────────────────────────────────────────────────────────

function Inicio() {
  const { t } = useTranslation();

  // SEO
  useEffect(() => {
    document.title = t('seo.inicio.title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('seo.inicio.description'));
  }, [t]);

  return (
    <>
      {/* Hero Section */}
      <HomeHero />

      {/* Seccion Nuestros Cafes */}
      <NuestrosCafes />

      {/* Seccion Historia Home */}
      <HomeHistoria />

      {/* Process Strip: FROM ORIGIN TO BEAN */}
      <ProcessStrip />

      {/* Process Steps: Cultivation, Flowering, Harvesting, Selection, Processing, Export */}
      <ProcessStepsRow />

      {/* Professionals Banner */}
      <ProfessionalsBanner />

      {/* Closing Tagline */}
      <ClosingTagline />
    </>
  );
}

export default Inicio;
