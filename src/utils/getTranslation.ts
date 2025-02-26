import en from "./i18n/en.json";
import es from "./i18n/es.json";
import { LanguageState } from "./const";

const translations = {
  [LanguageState.EN]: en,
  [LanguageState.ES]: es,
};

export const getTranslation = (language: LanguageState) =>
  translations[language];
