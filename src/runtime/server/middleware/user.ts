import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  console.log("module server middelware...")
  event.context.user = { id: 123, role: ['user', 'me'] }
})
