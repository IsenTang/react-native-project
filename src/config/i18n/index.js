import i18n from 'ex-react-native-i18n';
import en from './en';
import zh from './zh';

i18n.defaultLocale = 'en';
i18n.fallbacks = true;
i18n.translations = {
  en,
  zh,
};

export default i18n;
