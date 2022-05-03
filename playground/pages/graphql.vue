<script setup>
definePageMeta({
  middleware: 'auth'
})
const {graphql} = useNhostClient()

const {data:frameworks } = await useAsyncData('frameworks', async () => {
  const { data: {frameworks} } = await graphql.request(`
    query {
      frameworks{
        id
        name
      }
    }
  `)
  return frameworks
})

</script>

<template>
<ul>
  <li v-for="{id , name} in frameworks" :key="id">{{name}}</li>
</ul>
</template>
