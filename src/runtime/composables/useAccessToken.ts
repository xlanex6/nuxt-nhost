import type { Ref } from 'vue'
import { useState } from '#app'
import { useNhostClient } from './useNhostClient'

export const useAccessToken = (): Ref<String | null> => {
  const { auth } = useNhostClient()
  const accessToken = auth.getAccessToken()

  return useState<String | null>('nhost_access_token', () => accessToken)
  
}
