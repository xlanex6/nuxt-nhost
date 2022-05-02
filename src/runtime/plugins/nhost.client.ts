
import { defineNuxtPlugin, NuxtApp } from '#app'
import { useNhostClient } from '../composables/useNhostClient'
import { useNhostUser } from '../composables/useNhostUser'
import { useRefreshToken } from '../composables/useRefreshToken'

export default defineNuxtPlugin(async (nuxtApp: NuxtApp) => {
  const user = useNhostUser()
  const client = useNhostClient()
  const token = useRefreshToken()

  // If user has not been set on server side (for instance in SPA), set it for client
  if (!user.value) {
    if (token.value) {
      await client.auth.refreshSession(token.value)
      const nhostUser = client.auth.getUser()
      user.value = nhostUser
    }
  }

  // Once Nuxt app is mounted
  nuxtApp.hooks.hook('app:mounted', () => {
    // Listen to Nhost auth changes
    client.auth.onAuthStateChanged(async (event, session) => {
      await setServerSession(event, session)
      const nhostUser = client.auth.getUser()
      user.value = nhostUser
    })
  })
})

function setServerSession(event, session): Promise<any> {
  return $fetch('/api/_nhost/session', {
    method: 'POST',
    body: { event, session }
  })
}
