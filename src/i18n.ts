import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../en.json";
import esTranslation from "../es.json";
import frTranslation from "../fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
    fr: { translation: frTranslation },
  },
  lng: "es", // Idioma predeterminado
  fallbackLng: "en", // Si el idioma no está disponible, usa inglés
  interpolation: {
    escapeValue: false, // No escapar caracteres HTML
  },
});

export default i18n;
