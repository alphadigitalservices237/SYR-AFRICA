import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en/translation.json';
import frTranslations from './locales/fr/translation.json';

// the translations
const resources = {
  en: {
    translation: enTranslations
  },
  fr: {
    translation: frTranslations
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(LanguageDetector)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en', // fallback language
    // detection options
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;