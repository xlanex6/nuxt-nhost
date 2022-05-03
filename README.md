# NUXT / NHOST

> [NHOST](https://nhost.io/) module for [NUXT](https://v3.nuxtjs.org/)

**DO NOT USE IN PRODUCTION - WIP**


## ROADMAP

- [x] init module 
- [x] basic setup / config 
- [x] make composables for client
- [x] make composables for User / token 
- [x] add middelware with cookie, refresh token 
- [x] add middelware in demo to protect route if not login
- [x] Auth feature READY
- [x] Auth refacto ( accessToken != refeshToken) 
- [ ] Composables useAccessToken if needed in server side ( JWT / role  )
- [ ] make composables for GRAPHQL request ?
- [x] GRAPHQL feature + demo
- [ ] make composables for storage ?
- [ ] make composables for fonctions ??? Nuxt + serverless on the edge.
- [ ] Basic design for demo / playground
- [ ] publish demo on Netlify
- [ ] Basic test with vitest
- [ ] Add doc, base on DOCUS
- [ ] Publish on npm 
- [ ] PR on Nuxt Modules
<!-- - [ ]  -->


## Nuxt 2

If you are looking for a solution with Nuxt 2, checkout https://github.com/nhost/nuxt


## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Run `npm run dev:prepare` to generate type stubs.
4. Use `npm run dev` to start [playground](./playground) in development mode.

## License

[MIT License](./LICENSE)
