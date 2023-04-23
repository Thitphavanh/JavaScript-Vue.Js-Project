<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
import { onBeforeMount, onMounted } from 'vue'

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
})
</script>

<style></style>
