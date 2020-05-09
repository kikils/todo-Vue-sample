<template>
  <b-container>
    <b-input-group>
      <b-form-input type="text" v-model="value" />
      <b-input-append>
        <b-button variant="outline-primary" @click="handleAddTodo()">送信</b-button>
      </b-input-append>
    </b-input-group>
  </b-container>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    handleAddTodo() {
      this.$store.commit('handleParentAddTodo', this.value);
      this.value = '';
    },
  },
};
</script>

<style scoped></style>
