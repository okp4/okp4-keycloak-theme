import { loadTranslations } from "@okp4/ui";
import type { I18nResource } from "@okp4/ui";
import login_en from "./locales/en/login_en.json";
import login_fr from "./locales/fr/login_fr.json";

const translationsToLoad: I18nResource[] = [
  { lng: "en", namespace: "login", resource: login_en },
  { lng: "fr", namespace: "login", resource: login_fr },
];

loadTranslations(translationsToLoad);
