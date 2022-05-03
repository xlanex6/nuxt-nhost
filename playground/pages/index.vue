<script setup lang="ts">
// import { useCookie } from '#app'
const { auth } = useNhostClient()
const user = useNhostUser()
const refreshToken = useRefreshToken()
const accessToken = useAccessToken()
// const token = useCookie('nhostRefreshToken')


</script>

<template>
<div>

  Auth
<p>USER</p>
<pre>{{user}}</pre>
<hr>
<p>Access Token</p>
<pre>{{accessToken}}</pre>
<p>Session</p>
<pre>{{auth.getSession()}}</pre>
<button @click="auth.signIn({provider: 'github'})">LOGIN with Github</button>
<button @click="auth.signOut()">LOGout</button>
<hr>
</div>
</template>

