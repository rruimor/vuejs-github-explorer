<template>
  <div id="app">
    <!-- <img class="img__logo" src="./assets/GitHub_Logo.png"> -->
    <h1 class="logo">GitHub Explorer</h1>
    <!-- Search Bar -->
    <Search
      v-show="!selectedUser"
      :selectedUser.sync="selectedUser"
    />
    <!-- Selected -->

    <Profile
      v-if="selectedUser"
      :selectedUser="selectedUser"
      v-on:clearSelected="clearSelectedUser"
    />

  </div>
</template>

<script>
import Search from './components/Search.vue'
import Profile from './components/Profile.vue'

export default {
  name: 'app',
  data() {
    return {
      selectedUser: '',
    }
  },
  components: {
    Search, Profile
  },
  methods: {
    clearSelectedUser: function() {
      this.selectedUser = '';
    }
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
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin-top: 60px;
  }

}

.logo {
  font-size: 3em;
  /*font-family: 'Roboto', sans-serif;*/
  font-family: 'Open Sans', sans-serif;
}

.img__logo {
  width: 33.3%;
  margin-bottom: 20px;
}
</style>
