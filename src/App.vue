<template>
  <div id="app">

    <div class="container">
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

    <!-- <img class="img__logo" src="./assets/GitHub_Logo.png"> -->

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

.container {
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/

  width: 100%;

  margin: 0 10px;

  @media only screen and (min-width: 768px) {
    margin: 0 60px;
  }
}

.avatar--thumbnail {
  /*max-width: 120px;*/
  border-radius: 50%;
  width: 120px;
}

.logo {
  /*font-family: 'Roboto', sans-serif;*/
  font-family: 'Open Sans', sans-serif;

  @media only screen and (min-width: 768px) {
    font-size: 3em;
    margin-top: 60px;
  }
}

.img__logo {
  width: 33.3%;
  margin-bottom: 20px;
}
</style>
