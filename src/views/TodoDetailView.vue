<script setup>
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTodoStore } from '@/stores/todo.js'

const store = useTodoStore()
const route = useRoute()
const router = useRouter()
const goHome = () => router.push({ name: 'home' })
const goPrevious = () => router.go(-1)

onBeforeMount(() => {
  store.todoId = parseInt(route.params.id)
})
</script>

<template>
  <div>
    <h1>Hello Todo Detail</h1>
    <hr />
    <p>Display the todo ID: {{ $route.params.id }}</p>
    <div v-if="store.getTodoById.title" style="margin-bottom: 10px">
      <form @submit.prevent="($event) => store.submitEditTodo">
        <div>
          <input type="text" v-model="store.getTodoById.title" />
        </div>
        <div>
          <input type="text" v-model="store.getTodoById.description" />
        </div>
        <button class="btn-edit">Submit Edit</button>
        <p v-if="store.isActive" class="info">Update Successfully!!</p>
      </form>
    </div>
    <div>
      <button @click="goHome">Go Home</button>
      <button @click="goPrevious">Previous Page</button>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-right: 10px;
}

input {
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  font-size: 20px;
}
.btn-edit {
  width: 100%;
  padding: 5px;
  background-color: green;
  font-weight: bold;
}
.info {
  text-align: center;
  color: greenyellow;
  font-weight: bold;
  margin: 5px;
}
</style>
