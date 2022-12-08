import { getKcContext } from "keycloakify/lib/getKcContext";

export const { kcContext } = getKcContext({
    /* Uncomment to test the login page with mock data */
    "mockPageId": "login.ftl",
    "mockData": [
        {
            "pageId": "login.ftl",
            "locale": {
                "currentLanguageTag": "fr", //When we test the login page we do it in french
            },
        },
    ],
});

export type KcContext = NonNullable<typeof kcContext>;
