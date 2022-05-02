import { defineNuxtPlugin, NuxtApp } from '#app'
import { useNhostClient } from '../composables/useNhostClient'
import { useNhostUser } from '../composables/useNhostUser'
import { useRefreshToken } from '../composables/useRefreshToken'

export default defineNuxtPlugin(async (nuxtApp: NuxtApp) => {
  const user = useNhostUser()
  const client = useNhostClient()
  const token = useRefreshToken()

  if (!token.value) {
    return
  }

  // const { user: supabaseUser, error } = await client.auth.api.getUser(token.value)

  const { session, error } = await client.auth.refreshSession(token.value)
  user.value = error ? null : client.auth.getUser()
})
