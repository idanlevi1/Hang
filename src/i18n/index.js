import I18n from 'react-native-i18n';
import he from './locales/he';
import en from './locales/en';
I18n.fallbacks = true;

I18n.translations = {
  he, en
};

export default I18n;