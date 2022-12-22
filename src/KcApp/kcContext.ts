import { getKcContext } from 'keycloakify/lib/getKcContext'
import type { KcContextBase } from 'keycloakify/lib/getKcContext'

export const { kcContext }: { kcContext?: KcContextBase } = getKcContext({
  mockPageId: 'login.ftl',
  mockData: [
    {
      pageId: 'login.ftl',
      locale: {
        currentLanguageTag: 'fr' //When we test the login page we do it in french
      }
    }
  ]
})

export type KcContext = NonNullable<typeof kcContext>
