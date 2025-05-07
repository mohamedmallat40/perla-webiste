import { useLocale } from "@react-aria/i18n";
import { translations, type TranslationKey } from "../i18n/translations";

export function useTranslations() {
  const { locale } = useLocale();
  const lang = locale.slice(0, 2) as keyof typeof translations;

  const t = (key: TranslationKey) => {
    return translations[lang]?.[key] || translations.en[key];
  };

  return { t };
}
