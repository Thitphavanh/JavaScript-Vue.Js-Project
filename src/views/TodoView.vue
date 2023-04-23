<template>
  <div>
    <h1>My Todo List</h1>
    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="todo.id"
        @click="($event) => handleToggle(index)"
        :class="{ 'task-done': todo.is_complete }"
      >
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const todos = ref([
  { id: 1, title: 'Learn Python', description: 'Python is very good', is_complete: false },
  { id: 2, title: 'Learn JavaScript', description: 'Python is very good', is_complete: false },
  { id: 3, title: 'Learn Flutter', description: 'Python is very good', is_complete: false }
])

const handleToggle = (index) => {
  todos.value[index].is_complete = !todos.value[index].is_complete
}
</script>

<style scoped>
.task-done {
  text-decoration: line-through;
}
ul {
  cursor: pointer;
}

li {
  padding: 5px;
}
</style>
