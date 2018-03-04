<template>
  <div id="app">
    <img class="img__logo" src="./assets/GitHub_Logo.png">
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
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img__logo {
  width: 33.3%;
  margin-bottom: 20px;
}
</style>
