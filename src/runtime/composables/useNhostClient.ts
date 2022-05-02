import { NhostClient } from '@nhost/nhost-js';
import { useRuntimeConfig, useNuxtApp } from '#app'

export const useNhostClient = (): NhostClient => {
  const nuxtApp = useNuxtApp()

  const { nhost: { backendUrl } } = useRuntimeConfig().public

  if (!nuxtApp._nhostClient) {
    nuxtApp._nhostClient = new NhostClient({
      backendUrl: backendUrl
    })

    // if (nuxtApp.ssrContext) {
    //   nuxtApp._nhostClient.auth.setAuth(token.value)
    // }

  }

  return nuxtApp._nhostClient
}
