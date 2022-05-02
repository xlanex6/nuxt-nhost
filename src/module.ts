import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defu } from 'defu'
import { defineNuxtModule, addPlugin, addServerMiddleware } from '@nuxt/kit'



export interface ModuleOptions {
  backendUrl: string
  cookies?: object
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-nhost',
    configKey: 'nhost',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    backendUrl: '',
    cookies: {
      name: 'nhost',
      lifetime: 60 * 60 * 8,
      domain: '',
      path: '/',
      sameSite: 'lax'
    }
  },

  setup(options, nuxt) {

    // Default runtimeConfig
    nuxt.options.runtimeConfig.public.nhost = defu(nuxt.options.runtimeConfig.public.nhost, {
      backendUrl: options.backendUrl,
      cookies: options.cookies
    })

    // Transpile runtime
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    addPlugin(resolve(runtimeDir, 'plugins', 'nhost.client'))
    addPlugin(resolve(runtimeDir, 'plugins', 'nhost.server'))
  
    // Add nhost composables
    nuxt.hook('autoImports:dirs', (dirs) => {
      dirs.push(resolve(runtimeDir, 'composables'))
    })

    addServerMiddleware({
      route: '/api/_nhost/session',
      handler: resolve(runtimeDir, 'server/api/session')
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
