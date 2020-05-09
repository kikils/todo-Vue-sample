<template>
  <div id="app" class="my-0">
    <header-item></header-item>
    <router-view class="my-5"/>
  </div>
</template>

<script>
import HeaderItem from '@/components/Header';
import store from './store';

export default {
  name: 'App',
  components: {
    HeaderItem,
    store,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
