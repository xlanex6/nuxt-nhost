import { useCookie, useRuntimeConfig } from '#app'

export const useRefreshToken = () => {
  const { nhost: { cookies: cookieOptions } } = useRuntimeConfig().public
  const cookieName = `${cookieOptions.name}-access-token`

  return useCookie(cookieName)
}
