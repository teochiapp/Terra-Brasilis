const fs = require('fs');
const path = require('path');

const i18nPath = 'c:\\Users\\teoch\\OneDrive\\Desktop\\React\\Terra-brasilis\\Terra-Brasilis\\src\\i18n';

const translations = {
  es: {
    title: "Valoramos tu privacidad",
    description: "Utilizamos cookies propias y de terceros para asegurar el funcionamiento del sitio web, analizar nuestro tráfico y personalizar tu experiencia. Puedes aceptar todas las cookies, rechazarlas o configurar tus preferencias.",
    btn_config: "Configurar",
    btn_reject: "Rechazar",
    btn_accept: "Aceptar todas",
    modal_title: "Configuración de Cookies",
    modal_desc: "Cuando visitas un sitio web, este puede almacenar o recuperar información en tu navegador, principalmente en forma de cookies. Esta información podría ser sobre ti, tus preferencias o tu dispositivo.",
    necessary_title: "Estrictamente necesarias",
    necessary_desc: "Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Por lo general, solo se configuran en respuesta a acciones que realizas, como establecer tus preferencias de privacidad o iniciar sesión.",
    analytics_title: "Cookies de Análisis",
    analytics_desc: "Nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más o menos populares.",
    marketing_title: "Cookies de Marketing",
    marketing_desc: "Pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden ser utilizadas por esas empresas para crear un perfil de tus intereses y mostrarte anuncios relevantes en otros sitios.",
    btn_save: "Guardar Preferencias"
  },
  en: {
    title: "We value your privacy",
    description: "We use our own and third-party cookies to ensure the website works properly, analyze our traffic, and personalize your experience. You can accept all cookies, reject them, or configure your preferences.",
    btn_config: "Configure",
    btn_reject: "Reject",
    btn_accept: "Accept all",
    modal_title: "Cookie Settings",
    modal_desc: "When you visit a website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device.",
    necessary_title: "Strictly necessary",
    necessary_desc: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.",
    analytics_title: "Analytics Cookies",
    analytics_desc: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.",
    marketing_title: "Marketing Cookies",
    marketing_desc: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.",
    btn_save: "Save Preferences"
  },
  pt: {
    title: "Valorizamos a sua privacidade",
    description: "Usamos cookies próprios e de terceiros para garantir que o site funcione corretamente, analisar nosso tráfego e personalizar sua experiência. Você pode aceitar todos os cookies, rejeitá-los ou configurar suas preferências.",
    btn_config: "Configurar",
    btn_reject: "Rejeitar",
    btn_accept: "Aceitar todos",
    modal_title: "Configurações de Cookies",
    modal_desc: "Quando você visita qualquer site, ele pode armazenar ou recuperar informações no seu navegador, principalmente na forma de cookies. Essas informações podem ser sobre você, suas preferências ou seu dispositivo.",
    necessary_title: "Estritamente necessários",
    necessary_desc: "Estes cookies são necessários para que o website funcione e não podem ser desligados nos nossos sistemas. Normalmente, eles só são configurados em resposta a ações levadas a cabo por si e que correspondem a uma solicitação de serviços, tais como definir as suas preferências de privacidade, iniciar sessão ou preencher formulários.",
    analytics_title: "Cookies de Análise",
    analytics_desc: "Estes cookies permitem-nos contar visitas e fontes de tráfego, para que possamos medir e melhorar o desempenho do nosso website. Eles ajudam-nos a saber quais são as páginas mais e menos populares.",
    marketing_title: "Cookies de Marketing",
    marketing_desc: "Estes cookies podem ser estabelecidos através do nosso site pelos nossos parceiros de publicidade. Podem ser usados por essas empresas para construir um perfil sobre os seus interesses e mostrar-lhe anúncios relevantes em outros websites.",
    btn_save: "Salvar Preferências"
  },
  ger: {
    title: "Wir schätzen Ihre Privatsphäre",
    description: "Wir verwenden eigene und Cookies von Drittanbietern, um sicherzustellen, dass die Website ordnungsgemäß funktioniert, unseren Datenverkehr zu analysieren und Ihr Erlebnis zu personalisieren. Sie können alle Cookies akzeptieren, ablehnen oder Ihre Einstellungen konfigurieren.",
    btn_config: "Konfigurieren",
    btn_reject: "Ablehnen",
    btn_accept: "Alle akzeptieren",
    modal_title: "Cookie-Einstellungen",
    modal_desc: "Wenn Sie eine Website besuchen, kann diese Informationen über Ihren Browser abrufen oder speichern. Dies geschieht meist in Form von Cookies. Hierbei kann es sich um Informationen über Sie, Ihre Einstellungen oder Ihr Gerät handeln.",
    necessary_title: "Unbedingt erforderlich",
    necessary_desc: "Diese Cookies sind zur Funktion der Website erforderlich und können in Ihren Systemen nicht deaktiviert werden. In der Regel werden diese Cookies nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, die einer Dienstanforderung entsprechen, wie etwa dem Festlegen Ihrer Datenschutzeinstellungen, dem Anmelden oder dem Ausfüllen von Formularen.",
    analytics_title: "Analyse-Cookies",
    analytics_desc: "Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie unterstützen uns bei der Beantwortung der Fragen, welche Seiten am beliebtesten sind.",
    marketing_title: "Marketing-Cookies",
    marketing_desc: "Diese Cookies können über unsere Website von unseren Werbepartnern gesetzt werden. Sie können von diesen Unternehmen verwendet werden, um ein Profil Ihrer Interessen zu erstellen und Ihnen relevante Anzeigen auf anderen Websites zu zeigen.",
    btn_save: "Einstellungen speichern"
  }
};

Object.keys(translations).forEach(lang => {
  const filePath = path.join(i18nPath, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.cookie_banner = translations[lang];
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
  }
});
