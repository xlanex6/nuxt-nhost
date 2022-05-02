import { useCookie, useRuntimeConfig } from '#app'

export const useRefreshToken = () => {
  const { nhost: { cookies: cookieOptions } } = useRuntimeConfig().public
  // shoub be set as refresh token 
  const cookieName = `${cookieOptions.name}-access-token`

  return useCookie(cookieName)
}
