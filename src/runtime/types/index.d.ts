export type NhosAuthProvider =
  | 'github'
  | 'facebook'
  | 'google'
  | 'spotify'


export type User = {
  id: string
  createdAt: string
  displayName: string
  avatarUrl: string
  locale: string
  email?: string
  isAnonymous: boolean
  defaultRole: string
  roles: string[]
  metadata: Record<string, unknown>
  emailVerified: boolean
  phoneNumber: string | null
  phoneNumberVerified: boolean
  activeMfaType: 'totp' | null
}
