<template>
  <div id="app">
    <MangerHome/>
    <router-view/>
  </div>
</template>

<script>
import MangerHome from './components/MangerHome.vue'

export default {
  name: 'App',
  components: {
    MangerHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
