# OKP4 keycloak login page

## 🚧 WIP

This repo starts from this very cool project : [A starter/demo project](https://github.com/garronej/keycloakify-starter) for [Keycloakify](https://keycloakify.dev) and aims to use [@okp4/ui](https://github.com/okp4/ui) library to build a login template page for keycloak.

## ⚠️ Please read the two following notices ⚠️

> This starter is for **CSS-level customization**, if you want to customize the pages at
> **the component level** heads over to [keycloakify-advanced-starter](https://github.com/garronej/keycloakify-advanced-starter).

> If you are only looking to create a theme and don't care about integrating it into a React app there
> are a lot of things that you can remove from this starter.

## Quick start

```bash
yarn
yarn keycloak # Build the theme one time (some assets will be copied to
              # public/keycloak_static, they are needed to dev your page outside of Keycloak)
yarn start # See the Hello World app
# Uncomment line 5 of src/kcContext, reload https://localhost:3000
# You can now develop your Login pages.

# Think your theme is ready? Run
yarn keycloak
# Read the instruction printed on the console to see how to test
# your theme on a real Keycloak instance.
```

## Introduction

This repo constitutes an easily reusable CI setup for SPA React App that generates Keycloaks's theme
using [keycloakify](https://github.com/InseeFrLab/keycloakify).
