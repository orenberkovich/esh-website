import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import dataEn from "./locales/en/data.json";
import dataHe from "./locales/he/data.json";

const resources = {
  en: {
    nav: dataEn.nav,
    homePage: dataEn.homePage,
    footer: dataEn.footer,
    blog: dataEn.blog,
  },
  he: {
    nav: dataHe.nav,
    homePage: dataHe.homePage,
    footer: dataHe.footer,
    blog: dataHe.blog,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  debug: false,
  fallbackLng: "en",
  saveMissing: true,
});

export default i18next;
