import { useEffect } from 'react';
import { useTranslation } from '../../i18n/I18nContext';
import HistoryIntro from '../../components/historia/HistoryIntro';
import HistoryStats from '../../components/historia/HistoryStats';
import HistoryValues from '../../components/historia/HistoryValues';

// ─── Componente ───────────────────────────────────────────────────────────────

function Historia() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('seo.historia.title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('seo.historia.description'));
  }, [t]);

  return (
    <>
      <HistoryIntro />
      <HistoryStats />
      <HistoryValues />
    </>
  );
}

export default Historia;
