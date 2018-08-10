import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';

import ICU from 'i18next-icu'

import {DEFAULT_LOCALE, appLocales} from './locales.config.js';

i18n
  .use(new ICU())
  .use(XHR)
  .use(reactI18nextModule)
  .init({
    fallbackLng: DEFAULT_LOCALE,

    // have a common namespace used around the full app
    ns: appLocales,
    defaultNS: DEFAULT_LOCALE,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    keySeparator: false,
    returnEmptyString: false,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true
    }
  });


export default i18n;
