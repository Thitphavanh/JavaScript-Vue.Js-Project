import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  // State
  const todos = ref([
    { id: 1, title: 'Learn Python', description: 'Python is very good', is_complete: false },
    { id: 2, title: 'Learn JavaScript', description: 'JavaScript is very good', is_complete: false },
    { id: 3, title: 'Learn Flutter', description: 'Flutter is very good', is_complete: false }
  ])

  const todoId = ref(0)
  const isActive = ref(false)
  const todoData = reactive({
    title: '',
    description: ''
  })

  // Action
  const handleToggle = (id) => {
    todos.value.map((todo) => {
      if (todo.id == id) {
        todo.is_complete = !todo.is_complete
      }
    })
  }

  const submitTodo = () => {
    let id = todos.value.length + 1
    todos.value.push({
      id: id,
      title: todoData.title,
      description: todoData.description
    })
    todoData.title = ''
    todoData.description = ''
  }

  const deletedTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  const submitEditTodo = () => {
    todos.value.map((todo) => {
      if (todo.id === todoId.value) {
        todo.title = getTodoById.value.title
        todo.description = getTodoById.value.description
      }
    })
    isActive.value = true
    setInterval(() => {
      isActive.value = false
    }, 3000)
  }
  // Getter
  const sortTodos = computed(() => {
    return todos.value.slice().reverse()
  })

  const getTodoById = computed(() => {
    return todos.value.find((todo) => todo.id === todoId.value)
  })

  return {
    todos,
    todoData,
    sortTodos,
    todoId,
    getTodoById,
    isActive,
    handleToggle,
    submitTodo,
    deletedTodo,
    submitEditTodo
  }
})
