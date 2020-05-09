import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// storeをエクスポート
export default new Vuex.Store({
  state: {
    todos: [],
    uid: 0,
  },
  mutations: {
    handleParentAddTodo(state, value) {
      const date = new Date();
      state.todos.unshift({
        text: value,
        createdAt: date,
        complete: false,
      });
    },
    handleParentDeleteTodo(state, index) {
      state.todos.splice(index, 1);
    },
    handleParentCompleteTodo(state, index) {
      state.todos[index].complete = !state.todos[index].complete;
    },
  },
});
