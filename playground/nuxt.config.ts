import { defineNuxtConfig } from 'nuxt'
import nhostModule from '../src/module'

export default defineNuxtConfig({
  modules: [
    nhostModule
  ],
  nhost: {
    backendUrl: 'https://ppmymzmmecfuzhvrcgbb.nhost.run'
  }
})
