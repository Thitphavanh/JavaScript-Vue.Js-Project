<script setup>
import { ref } from 'vue'

const count = ref(0)
const title = ref('My Counter App')
const increment = () => count.value++
const decrement = () => count.value--
</script>

<template>
  <div class="counter">
    <h1>{{ title }}</h1>
    <button class="btn-counter">++</button>
    <button @click="increment" class="btn-counter">+</button>
    {{ count }}
    <button @click="decrement" class="btn-counter">-</button>
    <button class="btn-counter">--</button>
  </div>
  <div>
    <input type="text" name="title-model" value="" />
    <input type="number" name="count-model" value="" />
  </div>
</template>

<style scoped>
.counter,
.counter button {
  font-size: 2rem;
}
.counter {
  text-align: center;
}
.btn-counter {
  margin: 3px;
}

input {
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
}
</style>
