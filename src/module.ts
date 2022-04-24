import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defu } from 'defu'
import { defineNuxtModule } from '@nuxt/kit'



export interface ModuleOptions {
  backendUrl: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxtjs/nhost',
    configKey: 'nhost',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    backendUrl: ''
  },

  setup(options, nuxt) {

    // if (!options.backendUrl) {
    //   throw new Error('Missing `backendUrl` in nuxt.config.js|ts')
    // }

    // Default runtimeConfig
    nuxt.options.runtimeConfig.public.nhost = defu(nuxt.options.runtimeConfig.public.nhost, {
      backendUrl: options.backendUrl
    })

    // Transpile runtime
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    // addPlugin(resolve(runtimeDir, 'plugins', 'nhost'))
  
    // Add nhost composables
    nuxt.hook('autoImports:dirs', (dirs) => {
      dirs.push(resolve(runtimeDir, 'composables'))
    })

    // // Optimize cross-fetch
    // extendViteConfig((config) => {
    //   config.optimizeDeps = config.optimizeDeps || {}
    //   config.optimizeDeps.include = config.optimizeDeps.include || []
    //   config.optimizeDeps.include.push('cross-fetch')
    // })

    // // Optimize websocket only at dev time
    // if (nuxt.options.dev) {
    //   extendViteConfig((config) => {
    //     config.optimizeDeps.include.push('websocket')
    //   })
    // }
  }
})
