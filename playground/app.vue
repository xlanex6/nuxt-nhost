<template>
<pre>{{client}}</pre>
</template>

<script setup lang="ts">

const client = useNhostClient()
const user = client.auth.getUser()

</script>
