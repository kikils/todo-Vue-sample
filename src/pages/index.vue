<template>
  <div>
    <h1>Todoリスト</h1>
    <todo-form @handleParentAddTodo="handleParentAddTodo" />
    <todo-list
      :todos="todos"
      @handleParentDeleteTodo="handleParentDeleteTodo"
      @handleParentCompleteTodo="handleParentCompleteTodo"
    />
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default {
  name: "TODO",
  components: {
    TodoForm,
    TodoList,
  },
  methods: {
  },
};
</script>

<style scoped></style>
