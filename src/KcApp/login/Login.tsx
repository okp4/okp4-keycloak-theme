import React, { useState, useCallback, memo } from 'react'
import type { KcContextBase, KcProps } from 'keycloakify'
import type { FormEventHandler } from 'react'
import type { UseState, UseTranslationResponse } from '@okp4/ui'
import { Typography, useTranslation } from '@okp4/ui'
import { clsx } from 'keycloakify/lib/tools/clsx'
import { useConstCallback } from 'powerhooks/useConstCallback'
import { ReactComponent as ProfileSvg } from '../../assets/icons/profile.svg'
import { ReactComponent as LockSvg } from '../../assets/icons/lock.svg'
import './login.scss'

type LoginState = {
  readonly email: string
  readonly password: string
}

type ContextProps = {
  realm: KcContextBase.Login['realm']
  url: KcContextBase.Login['url']
  usernameEditDisabled: boolean
}

type LoginProps = KcProps & {
  kcContext: KcContextBase.Login
}

// eslint-disable-next-line max-lines-per-function, @typescript-eslint/prefer-readonly-parameter-types
const Login = (props: LoginProps): JSX.Element => {
  const { kcContext, ...kcProps }: LoginProps = props
  const { t }: UseTranslationResponse = useTranslation()
  const { realm, url, usernameEditDisabled }: ContextProps = kcContext

  const label = !realm.loginWithEmailAllowed
    ? 'username'
    : realm.registrationEmailAsUsername
    ? 'email'
    : 'username-or-email'

  const autoCompleteHelper: typeof label = label === 'username-or-email' ? 'username' : label

  const [credentials, setCredentials]: UseState<LoginState | ((value: LoginState) => LoginState)> =
    useState<LoginState>({
      email: '',
      password: ''
    })

  const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    }
  )

  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prevState: LoginState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }, [])

  return (
    <div className="kc-form">
      <Typography color="inverted-text" fontSize="medium" fontWeight="bold">
        {t('login:sign-in')}
      </Typography>
      <div className="kc-form-wrapper">
        {realm.password && (
          <form action={url.loginAction} method="post" onSubmit={onSubmit}>
            <div className={clsx(kcProps.kcFormGroupClass)}>
              {((): JSX.Element => {
                return (
                  <div className={clsx(kcProps.kcInputClass)}>
                    <ProfileSvg />
                    <input
                      id={autoCompleteHelper}
                      name="email"
                      onChange={handleInputChange}
                      placeholder={t(`login:${autoCompleteHelper}`)}
                      tabIndex={1}
                      type="text"
                      value={credentials.email}
                      {...(usernameEditDisabled
                        ? { disabled: true }
                        : {
                            autoFocus: true,
                            autoComplete: 'off'
                          })}
                    />
                  </div>
                )
              })()}
            </div>
            <div className={clsx(kcProps.kcInputClass)}>
              <LockSvg />
              <input
                autoComplete="off"
                id="password"
                name="password"
                onChange={handleInputChange}
                placeholder={t('login:password')}
                tabIndex={2}
                type="password"
                value={credentials.password}
              />
            </div>
            <div className={clsx(kcProps.kcFormGroupClass, kcProps.kcFormSettingClass)}>
              <div className={clsx(kcProps.kcFormOptionsWrapperClass)}>
                {realm.resetPasswordAllowed && (
                  <span>
                    <a href={url.loginResetCredentialsUrl} tabIndex={5}>
                      {t('login:forget-password')}
                    </a>
                  </span>
                )}
              </div>
            </div>
            <div className={clsx(kcProps.kcFormGroupClass)}>
              <button
                className="kc-login-btn"
                disabled={!credentials.email.length || !credentials.password.length}
                name="login"
                tabIndex={4}
                type="submit"
              >
                {t('login:sign-in')}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default memo(Login)
