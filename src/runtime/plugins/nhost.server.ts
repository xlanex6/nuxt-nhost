import { defineNuxtPlugin, NuxtApp } from '#app'
import { useNhostClient } from '../composables/useNhostClient'
import { useNhostUser } from '../composables/useNhostUser'
import { useRefreshToken } from '../composables/useRefreshToken'

export default defineNuxtPlugin(async (nuxtApp: NuxtApp) => {
  const user = useNhostUser()
  const client = useNhostClient()
  const refreshToken = useRefreshToken()

  if (!refreshToken.value) {
    return
  }

  const { session, error } = await client.auth.refreshSession(refreshToken.value)
  user.value = error ? null : client.auth.getUser()
})
