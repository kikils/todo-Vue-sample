<template>
  <b-container>
    <b-row class="mt-2">
      <table class="table table-bordered table-striped table-hover">
        <thead class="thead-light">
          <tr>
            <th width="50%">内容</th>
            <th width="30%">作成日時</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(todo, index) in todos">
            <td :class="[{line: todo.complete}, 'text-left']">{{ todo.text }}</td>
            <td>
              <div class="text-center">
                {{ todo.createdAt.getFullYear() }}/{{ todo.createdAt.getMonth() + 1 }}/{{ todo.createdAt.getDate() }} {{ todo.createdAt.getHours() }}:{{ todo.createdAt.getMinutes() }}
              </div>
            </td>
            <td>
              <b-input-group class="ml-4">
                <b-button
                  @click="handleCompleteTodo(index)"
                  :variant="todo.complete ? 'success' : ''">
                  {{ todo.complete ? '完了済み' : '未完了'}}
                </b-button>
                <b-button @click="handleDeleteTodo(index)" variant="danger" class="ml-2">削除</b-button>
              </b-input-group>
            </td>
          </tr>
        </tbody>
      </table>
    </b-row>
    <!-- <b-row :key="index" v-for="(todo, index) in todos" class="mt-2">
      <b-col cols="8" :class="[{line: todo.complete}, 'text-left']">
        <h5>{{ todo.text }}</h5>
      </b-col>
      <b-col cols="4" class="text-right">
        <b-button
          @click="handleCompleteTodo(index)"
          :variant="todo.complete ? 'success' : ''">
          {{ todo.complete ? '完了' : '未完了'}}
        </b-button>
        <b-button @click="handleDeleteTodo(index)" variant="danger">削除</b-button>
      </b-col>
    </b-row> -->
  </b-container>
</template>

<script>
export default {
  name: 'TodoList',
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    handleDeleteTodo(index) {
      this.$store.commit('handleParentDeleteTodo', index);
    },
    handleCompleteTodo(index) {
      this.$store.commit('handleParentCompleteTodo', index);
    },
  },
};
</script>

<style scoped>
  .line {
    text-decoration: line-through;
  }
</style>
