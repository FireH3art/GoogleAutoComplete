import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from './en.json';

const resources = {
  en: {
    common: enJson
  }
}; 

i18n
  .use(initReactI18next)
  .init({     
    resources,       // open for local language
    partialBundledLanguages: true,
    compatibilityJSON: 'v3',
    fallbackLng: "en", 
    debug: false,
    defaultNS: "common",               // namespace common - load local resources when offline instead showing message tag
    ns: ["translation", "common"],     // translation - backend, common - local
    interpolation: {
      escapeValue: false
    },
  });
 

export default i18n;