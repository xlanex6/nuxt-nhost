import { useCookie, useRuntimeConfig } from '#app'

export const useToken = () => {
  const { nhost: { cookies: cookieOptions } } = useRuntimeConfig().public
  const cookieName = `${cookieOptions.name}-access-token`

  return useCookie(cookieName)
}
