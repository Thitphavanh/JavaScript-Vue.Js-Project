<script setup>
import TodoList from '@/components/TodoList.vue'
import { useTodoStore } from '@/stores/todo.js'

const store = useTodoStore()
</script>

<template>
  <div>
    <h1>My Todo List</h1>
    <form @submit.prevent="store.submitTodo">
      <div>
        <input type="text" name="title" v-model="store.todoData.title" />
      </div>
      <div>
        <textarea class="txt-area" v-model="store.todoData.description"></textarea>
      </div>
      <button type="submit" class="btn-submit">Submit</button>
    </form>
    <hr />
    <TodoList></TodoList>
  </div>
</template>

<style scoped>
ul {
  cursor: pointer;
}

li {
  padding: 5px;
}
.txt-area,
input,
button {
  width: 100%;
}
.btn-submit {
  padding: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  cursor: pointer;
}
</style>
