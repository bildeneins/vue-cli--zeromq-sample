<template>
  <div id="app">
    <sample></sample>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import sample from './components/sample.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    sample
  }
}
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
