import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    whitelist: ['en'],
    backend: {
      loadPath: 'https://bhanu49.github.io/profile/locales/en/common.json',
    },
    /*
    debug: true,
*/
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
