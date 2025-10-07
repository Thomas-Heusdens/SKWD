import i18n from 'i18next'; 
import { initReactI18next } from 'react-i18next'; 
import en from '@/locales/en/common.json'; 
import fr from '@/locales/fr/common.json'; 
import nl from '@/locales/nl/common.json'; 

const resources = { en: { translation: en }, fr: { translation: fr }, nl: { translation: nl }, }; 

if (!i18n.isInitialized) { 
    i18n .use(initReactI18next) 
        .init({ fallbackLng: 'en', debug: process.env.NODE_ENV === 'development', resources, interpolation: { escapeValue: false }, }); 
} 

export function setLanguage(locale: string) {
  if (i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }
}

export default i18n;