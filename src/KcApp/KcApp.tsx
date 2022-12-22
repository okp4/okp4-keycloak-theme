import React from 'react'
import type { KcContext } from './kcContext'
import type { ThemeContextType, DeepReadonly } from '@okp4/ui'
import KcAppBase, { defaultKcProps, useDownloadTerms, useI18n } from 'keycloakify'
import { Header, Logo, useTheme } from '@okp4/ui'
import tos_en_url from './tos_en.md'
import tos_fr_url from './tos_fr.md'
import lightCosmos from '@okp4/ui/lib/assets/images/cosmos-clear.png'
import darkCosmos from '@okp4/ui/lib/assets/images/cosmos-dark.png'
import './KcApp.scss'

export type Props = {
  kcContext: KcContext
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, max-lines-per-function
export default function KcApp(props: Props): JSX.Element {
  const { kcContext }: Props = props
  const { theme }: ThemeContextType = useTheme()
  const themedImage = theme === 'light' ? lightCosmos : darkCosmos

  useDownloadTerms({
    kcContext,
    downloadTermMarkdown: async ({
      currentLanguageTag
    }: {
      readonly currentLanguageTag: string
    }) => {
      const markdownString = await fetch(
        ((): string => {
          switch (currentLanguageTag) {
            case 'fr':
              return tos_fr_url
            default:
              return tos_en_url
          }
        })()
      ).then(async (response: DeepReadonly<Response>) => await response.text())

      return markdownString
    }
  })

  const i18n = useI18n({
    kcContext,
    extraMessages: {
      en: {
        foo: 'foo in English',
        doForgotPassword: 'I forgot my password'
      },
      fr: {
        foo: 'foo en Francais',
        doForgotPassword: "J'ai oublié mon mot de passe"
      }
    }
  })

  if (i18n === null) {
    return <div>null</div>
  }

  return (
    <div style={{ backgroundImage: `url(${themedImage})` }}>
      <Header firstElement={<Logo />} />
      <KcAppBase
        i18n={i18n}
        kcContext={kcContext}
        {...{
          ...defaultKcProps,
          kcHeaderWrapperClass: 'my-color my-font'
        }}
      />
    </div>
  )
}
