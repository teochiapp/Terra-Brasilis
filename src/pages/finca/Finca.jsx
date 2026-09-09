import { useEffect } from 'react';
import { useTranslation } from '../../i18n/I18nContext';
import FincaIntro from '../../components/finca/FincaIntro';
import FincaStats from '../../components/finca/FincaStats';
import FincaGallery from '../../components/finca/FincaGallery';
import FincaQuote from '../../components/finca/FincaQuote';

// ─── Componente ───────────────────────────────────────────────────────────────

function Finca() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('seo.finca.title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('seo.finca.description'));
  }, [t]);

  return (
    <>
      <FincaIntro />
      <FincaStats />
      <FincaGallery />
      <FincaQuote />
    </>
  );
}

export default Finca;
