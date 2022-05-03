export default defineNuxtRouteMiddleware(() => {
  const user = useNhostUser()

  if (!user.value) {
    return navigateTo('/')
  }
})
