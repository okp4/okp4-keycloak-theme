import React, { useMemo } from 'react'
import type { KcContext } from './kcContext'
import type { DeepReadonly } from '@okp4/ui'
import KcAppBase, { defaultKcProps, useDownloadTerms } from 'keycloakify'
import darkCosmos from '@okp4/ui/lib/assets/images/cosmos-dark.png'
import { Footer, Logo } from '@okp4/ui'
import { ReactComponent as LogoSvg } from '../assets/icons/logo.svg'
import Login from './login/Login'
import tos_en_url from './tos_en.md'
import tos_fr_url from './tos_fr.md'

export type Props = {
  kcContext: KcContext
}

type CurrentLanguage = {
  readonly currentLanguageTag: string
}
// eslint-disable-next-line max-lines-per-function, @typescript-eslint/prefer-readonly-parameter-types
const KcApp = (props: Props): JSX.Element => {
  const { kcContext }: Props = props

  useDownloadTerms({
    kcContext,
    downloadTermMarkdown: async ({ currentLanguageTag }: CurrentLanguage) => {
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

  const langsCodes = [
    {
      name: 'English',
      lng: 'en'
    },
    {
      name: 'Français',
      lng: 'fr'
    }
  ]

  const renderContext = useMemo(() => {
    switch (kcContext.pageId) {
      case 'login.ftl':
        return <Login kcContext={kcContext} {...defaultKcProps} />
      default:
        return (
          <KcAppBase
            kcContext={kcContext}
            {...{
              ...defaultKcProps
            }}
          />
        )
    }
  }, [kcContext])

  return (
    <div className="okp4-login-main-container">
      <div className="okp4-login-main-content" style={{ backgroundImage: `url(${darkCosmos})` }}>
        <div className="okp4-login-main-left-content">
          <div className="okp4-login-main-left-content-wrapper">
            <div className="okp4-login-main-left-content-header">
              <Logo size="x-small" />
            </div>
            <div className="okp4-login-main-left-content-body">
              <LogoSvg />
            </div>
            <Footer languages={langsCodes} />
          </div>
        </div>
        <div className="okp4-login-main-right-content">
          <div className="okp4-login-main-backdrop"></div>
          <div className="okp4-login-main-right-content-wrapper">{renderContext}</div>
        </div>
      </div>
    </div>
  )
}

export default KcApp
