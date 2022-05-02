<script setup>
const user = useNhostUser()
const {auth} = useNhostClient()

</script>

<template>
  DEMO - {{user}}
  <pre>
  {{auth.getUser()}}
  </pre>
</template>
