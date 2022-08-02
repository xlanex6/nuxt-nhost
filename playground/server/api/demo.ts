import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  const { context } = event
  return {
    api: "ok",
    context
  }
})
