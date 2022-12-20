import { useState, useCallback, memo } from "react";
import type { KcContextBase, KcProps } from "keycloakify";
import type { FormEventHandler } from "react";
import { Typography } from "@okp4/ui";
import { clsx } from "keycloakify/lib/tools/clsx";
import { useConstCallback } from "powerhooks/useConstCallback";
import { SvgIcon } from "KcApp/SvgIcon";
import "./login.scss";

type LoginState = {
  email: string;
  password: string;
};

type LoginProps = KcProps & {
  kcContext: KcContextBase.Login;
};

const Login = memo((props: LoginProps) => {
  const { kcContext, ...kcProps } = props;
  const { realm, url, usernameEditDisabled } = kcContext;

  const label = !realm.loginWithEmailAllowed
    ? "username"
    : realm.registrationEmailAsUsername
    ? "email"
    : "username-or-email";

  const autoCompleteHelper: typeof label =
    label === "username-or-email" ? "username" : label;

  const [credentials, setCredentials] = useState<LoginState>({
    email: "",
    password: "",
  });

  const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(e => {
    e.preventDefault();
  });

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCredentials((prevState: LoginState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  return (
    <div className="kc-form">
      <Typography color="inverted-text" fontSize="medium" fontWeight="bold">
        Connexion
      </Typography>
      <div className="kc-form-wrapper">
        {realm.password && (
          <form action={url.loginAction} method="post" onSubmit={onSubmit}>
            <div className={clsx(kcProps.kcFormGroupClass)}>
              {(() => {
                return (
                  <div className={clsx(kcProps.kcInputClass)}>
                    <SvgIcon type="profile" />
                    <input
                      id={autoCompleteHelper}
                      name="email"
                      onChange={handleInputChange}
                      placeholder="Email"
                      tabIndex={1}
                      type="text"
                      value={credentials.email}
                      {...(usernameEditDisabled
                        ? { disabled: true }
                        : {
                            autoFocus: true,
                            autoComplete: "off",
                          })}
                    />
                  </div>
                );
              })()}
            </div>
            <div className={clsx(kcProps.kcInputClass)}>
              <SvgIcon type="lock" />
              <input
                autoComplete="off"
                id="password"
                name="password"
                onChange={handleInputChange}
                placeholder="Password"
                tabIndex={2}
                type="password"
                value={credentials.password}
              />
            </div>
            <div
              className={clsx(
                kcProps.kcFormGroupClass,
                kcProps.kcFormSettingClass
              )}
            >
              <div className={clsx(kcProps.kcFormOptionsWrapperClass)}>
                {realm.resetPasswordAllowed && (
                  <span>
                    <a href={url.loginResetCredentialsUrl} tabIndex={5}>
                      Mot de passe oublié ?
                    </a>
                  </span>
                )}
              </div>
            </div>
            <div className={clsx(kcProps.kcFormGroupClass)}>
              <button
                className="kc-login-btn"
                disabled={
                  !credentials.email.length || !credentials.password.length
                }
                name="login"
                tabIndex={4}
                type="submit"
              >
                Connexion
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
});

export default Login;
