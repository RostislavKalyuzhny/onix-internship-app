import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './en';
import ru from './ru';

i18n
    .use(LanguageDetector)
    .use (initReactI18next)
    .init({
        fallbackLng: localStorage.getItem('language') || 'en', // вместо language можно использовать i18nextLng 
        debug: true,
        interpolation: {
          escapeValue: false
        },

        resources: {
          en,
          ru,
        },
    });

export default i18n;