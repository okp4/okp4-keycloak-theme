import { getKcContext } from 'keycloakify/lib/getKcContext'
import type { KcContextBase } from 'keycloakify/lib/getKcContext'

export const { kcContext }: { kcContext?: KcContextBase } = getKcContext({
  mockPageId: 'login.ftl',
  mockData: [
    {
      pageId: 'login.ftl',
      locale: {
        currentLanguageTag: 'fr'
      }
    }
  ]
})

export type KcContext = NonNullable<typeof kcContext>
