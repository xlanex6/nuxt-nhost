<template>
Auth
<p>USER</p>
<pre>{{user}}</pre>
{{token}}
<button @click="auth.signIn({provider: 'github'})">LOGIN</button>
<hr>
</template>

<script setup lang="ts">
import { useCookie } from '#app'
const { auth } = useNhostClient()
const user = useNhostUser()
const token = useCookie('nhostRefreshToken')


</script>
