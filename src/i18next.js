import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import english from './config/english';
import russian from './config/russian';
import ukranian from './config/ukranian';

i18n
    .use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        ...english,
		...russian,
		...ukranian,
    },
});

export default i18n;
