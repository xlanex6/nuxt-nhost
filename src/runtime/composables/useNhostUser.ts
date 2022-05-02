import type { Ref } from 'vue'
import { User } from '../types'
import { useState } from '#app'

export const useNhostUser = (): Ref<User | null> => useState<User | null>('nhost_user')
