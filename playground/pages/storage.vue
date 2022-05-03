<script setup>
definePageMeta({
  middleware: 'auth'
})
const {storage, auth } = useNhostClient()
const file = ref()
const form = ref()
const newFileData = ref()

// const RESP = await storage.setAccessToken(auth.getAccessToken())

const imagePublicUrl = await storage.getPublicUrl({fileId:"93b5943b-8002-46c9-8780-3a932f422785"})
// const imageSignedUrl = await storage.getPresignedUrl({fileId:"be6c60e4-abb1-4140-8ee9-1045efa22d3d"})

function onFileChanged($event) {
  const target = $event.target;
  if (target && target.files) {
      file.value = target.files[0];
  }
}

async function uploadFile() {
  if (file.value) {
      try {
        const {error, fileMetadata } = await storage.upload({ file: file.value, uploadedByUserId: "uuid" })
        newFileData.value = fileMetadata
      } catch (error) {
          console.error(error);
          form.value?.reset();
          file.value = null;
      } finally {
        
      }
  }
};

</script>

<template>
<div>
  <h1>Storage</h1>
  <label for="avatar">Choose a profile picture:</label>

  <img :src="`${imagePublicUrl}?w=300&q=90`" alt="DS">

    <input
      type="file"
      @change="onFileChanged($event)"
      accept="image/*"
      capture
    />

<button @click="uploadFile">SAVE IT</button>
</div>
</template>
