<template>
  <div id="app" :class="{ center: !inputQuery }">
    <div class="container">
      <!-- Logo -->
      <div class="logo__wrapper">
        <a 
          href="#"
          @click="clearSelectedUser"
          v-show="selectedUser"
          class="nav__back"
        >&larr;</a>

        <h1 
          class="logo"
          v-show="!selectedUser"
        >GitHub Explorer</h1>
      </div>

      <!-- Search Bar -->
      <Search
        v-show="!selectedUser"
        :selectedUser.sync="selectedUser"
        :inputQuery.sync="inputQuery"
      />

      <!-- Profile on selected User -->
      <Profile
        v-if="selectedUser"
        :selectedUser="selectedUser"
      />
    </div>
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
      inputQuery: ''
    }
  },
  components: {
    Search, Profile
  },
  methods: {
    clearSelectedUser: function() {
      this.selectedUser = '';
      return null;
    }
  }
}
</script>



<style lang="scss">
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translateY(0px);
  transition: all .4s ease;

  &.center {
    transform: translateY(100px);
  }

  height: 100%;
}

input[type=text] {
  box-sizing: border-box;
}

.container {
  width: 100%;
  margin: 0 10px;

  @media only screen and (min-width: 768px) {
    margin: 0 60px;
  }
}

.avatar--thumbnail {
  border-radius: 50%;
  width: 120px;
}

.logo__wrapper {
  // display: inline-flex;
  width: 100%;
  display: inline-block;

  .nav__back {
    font-size: 2em;
    font-weight: bold;
    // align-self: center;
    text-decoration: none;
    padding: 0 5px;
    border-right: 1px solid rgba(2, 2, 2, 0.2);
    float: left;
    margin-top: 0.67em;
    opacity: 0.5;

    &:visited {
      color: black;
    }

    &:hover {
      opacity: 1;
    }
  }

  .logo {
    font-family: 'Open Sans', sans-serif;
  }
}

</style>
