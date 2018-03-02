<template>
  <div id="app">
    <img class="img__logo" src="./assets/GitHub_Logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- Search Bar -->
    <Search val="Enter a Github username"/>
    <!-- List Results -->
    <!-- Selected -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Search from './components/Search.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Search
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

.img__logo {
  width: 33.3%;
}
</style>
