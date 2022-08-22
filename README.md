<p align="center">
    <img src="https://github.com/garronej/keycloakify-starter/workflows/ci/badge.svg?branch=main">
</p>

# ⚠️ Please read the two following notices ⚠️

> This starter is for **CSS-level customization**, if you want to customize the pages at
> **the component level** heads over to [keycloakify-advanced-starter](https://github.com/garronej/keycloakify-advanced-starter).

> If you are only looking to create a theme and don't care about integrating it into a preexisting React app there
> are a lot of things that you can remove from this starter. [Please read this](/standalone-keycloak-theme).

# Quick start

```bash
yarn install
yarn start # See the Hello World app
# Uncomment line 6 of src/KcApp/kcContext, reload https://localhost:3000
# You can now develop your Login pages.

# Think your theme is ready? Run
yarn keycloak
# Read the instruction printed on the console to see how to test
# your theme on a real Keycloak instance.
```

# Introduction

This repo constitutes an easily reusable CI setup for SPA React App that generates Keycloaks's theme
using [keycloakify](https://github.com/InseeFrLab/keycloakify).

# The CI workflow

-   This CI is configured to both publish on [GitHub Pages](https://github.com/garronej/keycloakify-starter/blob/71baa789254f00bf521d40dc0a8db6925aa72942/.github/workflows/ci.yaml#L47-L65) and on [DockerHub](https://github.com/garronej/keycloakify-starter/blob/71baa789254f00bf521d40dc0a8db6925aa72942/.github/workflows/ci.yaml#L66-L111). In practice you probably want one
    or the other but not both.  
    We deploy the demo app at [demo-app.keycloakify.dev](https://demo-app.keycloakify.dev) using GitHub page on the branch `gh-pages` (you have to enable it).  
    To configure your own domain name please refer to [this documentation](https://docs.gitlanding.dev/using-a-custom-domain-name).
-   To release **don't create a tag manually**, the CI do it for you. Just update the `package.json`'s version field and push.
-   The `.jar` files that bundle the Keycloak theme will be attached as an asset with every GitHub release. [Example](https://github.com/InseeFrLab/keycloakify-starter/releases/tag/v0.1.0). The permalink to download the latest version is: `https://github.com/USER/PROJECT/releases/latest/download/keycloak-theme.jar`.
    For this demo repo it's [here](https://github.com/garronej/keycloakify-starter/releases/latest/download/keycloak-theme.jar)
-   The CI publishes the app docker image on DockerHub. `<org>/<repo>:main` for each **commit** on `main`, `<org>/<repo>:<feature-branch-name>` for each **pull-request** on `main`
    and when **releasing a new version**: `<org>/<repo>:latest` and `<org>/<repo>:X.Y.Z`
    [See on DockerHub](https://hub.docker.com/r/garronej/keycloakify-starter/tags?page=1&ordering=last_updated)
-   A [CHANGELOG.md](https://github.com/InseeFrLab/keycloakify-starter/blob/main/CHANGELOG.md) will be maintained for you using the commit messages between releases. _If you don't want a specific commit to appear
    in the changelog do something like. `git commit -am "yadi yada (changelog ignore)`._

![image](https://user-images.githubusercontent.com/6702424/149981027-a56dbd22-6b74-461b-be53-f460daa28700.png)

![image](https://user-images.githubusercontent.com/6702424/149980234-3587221c-5d50-47a2-a0fd-d3cf0fe46fc4.png)

If you want an example of an app that put that setup in production checkout onyxia-ui: [the repo](https://github.com/InseeFrLab/onyxia-ui), [the login](https://auth.lab.sspcloud.fr/auth/realms/sspcloud/protocol/openid-connect/auth?client_id=onyxia&redirect_uri=https%3A%2F%2Fonyxia.lab.sspcloud.fr), [the app](https://datalab.sspcloud.fr).

> This repo is currently configured to build the theme with [`--external-assets`](https://github.com/InseeFrLab/keycloakify#specify-from-where-the-resources-should-be-downloaded).
> If your keycloak pages need to stay up even when your app is down you should remove `--external-assets` [here](https://github.com/garronej/keycloakify-starter/blob/f87f211c433d1520c9ecf66565c6b88779aa98ed/.github/workflows/ci.yaml#L139).

# Docker

```bash
docker build -f Dockerfile -t garronej/keycloakify-starter:test .
#OR (to reproduce how the image is built in the ci workflow):
yarn && yarn build && tar -cvf build.tar ./build && docker build -f Dockerfile.ci -t garronej/keycloakify-starter:test . && rm build.tar

docker run -it -dp 8083:80 garronej/keycloakify-starter:test
```

## DockerHub credentials

To enables the CI to publish on DockerHub on your behalf go to
repository `Settings` tab, then `Secrets` you will need to add two new secrets:

-   `DOCKERHUB_TOKEN`, you Dockerhub authorization token.
-   `DOCKERHUB_USERNAME`, Your Dockerhub username.

# Standalone keycloak theme

If you are only looking to create a keycloak theme, there are a lot of things you should remove after clicking ![image](https://user-images.githubusercontent.com/6702424/98155461-92395e80-1ed6-11eb-93b2-98c64453043f.png):

-   You can remove all things related to building a docker image and publishing on github pages:
    remove [these lines](https://github.com/garronej/keycloakify-starter/blob/fc6bcb98b8d09ed13b5f52ed8d39923511669000/.github/workflows/ci.yaml#L45-L109)
    and [this line](https://github.com/garronej/keycloakify-starter/blob/fc6bcb98b8d09ed13b5f52ed8d39923511669000/.github/workflows/ci.yaml#L118-L119) from `.github/workflows/ci.yaml`.
-   All the assets will need to be served by Keycloak: remove `--external-assets` from [this](https://github.com/garronej/keycloakify-starter/blob/fc6bcb98b8d09ed13b5f52ed8d39923511669000/.github/workflows/ci.yaml#L21) line.
-   You can remove `/Dockerfile`, `Dockerfile.ci` ,`/.dockerignore` and `/nginx.conf`
-   You can assume the app will only run in the context of Keycloak so you can remove [these lines](https://github.com/garronej/keycloakify-starter/blob/095e8e9b044044364ffb8a4c6e6a14e33674886e/src/index.tsx#L30-L31)
    in `src/index.tsx` (and you can, of course, remove `src/App.tsx`, `App.css` ect...).
-   You can remove the `homepage` field from [the package.json](https://github.com/garronej/keycloakify-starter/blob/095e8e9b044044364ffb8a4c6e6a14e33674886e/package.json#L2)

For the rest all stays the same, when your theme is ready, just upgrade the version in `package.json` and push.  
You will find your theme packaged in a `.tar` file in the GitHub releases of your project.
