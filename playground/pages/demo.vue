<script setup>
const user = useNhostUser()
const {auth} = useNhostClient()

</script>

<template>
  DEMO PAGE - USER 
   <pre>
  {{user}}
  </pre>
</template>
