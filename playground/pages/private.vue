<script setup>
definePageMeta({
  middleware: 'auth'
})

const user = useNhostUser()

</script>

<template>
<div>
  <h3>This page is private</h3>
<h4>User:</h4>
   <pre> {{user}} </pre>
</div>
</template>
