<script setup>
import { useTodoStore } from '@/stores/todo.js'

const store = useTodoStore()
</script>

<template>
  <ul>
    <li v-for="todo in store.sortTodos" :key="todo.id" :class="{ 'task-done': todo.is_complete }">
      {{ todo.title }}
      <span>
        <a @click="($event) => store.handleToggle(todo.id)"> &check; </a>
        &#124;
        <RouterLink :to="{ name: 'todo-detail', params: { id: todo.id } }" class="text-edit"
          >Edit</RouterLink
        >
        &#124;
        <a class="del-todo" @click="($event) => store.deletedTodo(todo.id)"> &cross; </a>
      </span>
    </li>
  </ul>
</template>

<style scoped>
ul {
  font-size: 20px;
}
span {
  padding: 5px;
}
.task-done {
  text-decoration: line-through;
}
.del-todo {
  color: tomato;
}
.text-edit {
  color: whitesmoke;
}
</style>
