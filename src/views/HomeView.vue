<script setup>
import { ref, computed, onUpdated } from 'vue'
import { useTodoStore } from '@/stores/todo.js'

const store = useTodoStore()

// Life cycle
onUpdated(() => {
  console.log(count.value)
})

// Data
const count = ref(0)
const title = ref('My Counter App')

// Method
const increment = (amount) => (count.value += amount)
const decrement = (amount) => (count.value -= amount)

// Computed
const oddOrEvent = computed(() => {
  if (count.value % 2 == 0) return 'event'
  return 'odd'
})

const doubleNumber = computed(() => {
  return count.value * 2
})
</script>

<template>
  <div class="counter">
    <h1>{{ title }}</h1>
    <button @click="increment(5)" class="btn-counter">++</button>
    <button @click="increment(1)" class="btn-counter">+</button>
    {{ count }}
    <button @click="decrement(1)" class="btn-counter">-</button>
    <button @click="decrement(5)" class="btn-counter">--</button>
  </div>
  <div>
    <input v-model="title" type="text" name="title-model" />
    <input v-model="count" type="number" name="count-model" />
  </div>
  <hr />
  <h3>This number is: {{ oddOrEvent }}</h3>
  <h3>This number is: {{ doubleNumber }}</h3>

  <pre>
    {{ store.getTodoById }}
  </pre>
  <hr>
  <pre>
    {{ store.todos }}
  </pre>
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
