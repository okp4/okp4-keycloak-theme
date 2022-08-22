import "./KcApp.css";
import type { KcContext } from "./kcContext";
import KcAppBase, { defaultKcProps, useDownloadTerms, useI18n } from "keycloakify";
import tos_en_url from "./tos_en.md";
import tos_fr_url from "./tos_fr.md";

export type Props = {
    kcContext: KcContext;
};

export default function KcApp(props: Props) {
    const { kcContext } = props;

    useDownloadTerms({
        kcContext,
        "downloadTermMarkdown": async ({ currentLanguageTag }) => {
            const markdownString = await fetch(
                (() => {
                    switch (currentLanguageTag) {
                        case "fr":
                            return tos_fr_url;
                        default:
                            return tos_en_url;
                    }
                })(),
            ).then(response => response.text());

            return markdownString;
        },
    });

    const i18n = useI18n({
        kcContext,
        // NOTE: Here you can override the default i18n messages
        // or define new ones that, for example, you would have
        // defined in the Keycloak admin UI for UserProfile
        // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
        "extraMessages": {
            "en": {
                "foo": "foo in English",
            },
            "fr": {
                /* spell-checker: disable */
                "foo": "foo en Francais",
                /* spell-checker: enable */
            },
        },
    });

    //NOTE: Locale not yet downloaded
    if (i18n === null) {
        return null;
    }

    return (
        <KcAppBase
            kcContext={kcContext}
            i18n={i18n}
            {...{
                ...defaultKcProps,
                // NOTE: The classes are defined in ./KcApp.css
                "kcHeaderWrapperClass": "my-color my-font",
            }}
        />
    );
}
