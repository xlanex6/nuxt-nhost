import { useNhostClient } from './useNhostClient'
export const useAccessToken = () => {
  const { auth } = useNhostClient()
// TS should be good, useState
  return auth.getAccessToken()
}




