<template>
  <div class="profile__wrapper">
    <a href="#" @click="clearSelectedUser">Back</a>
    <h1>{{ userData.login }}</h1>
    <div class="avatar__wrapper">
      <img class="avatar--thumbnail" :src="userData.avatar_url">
    </div>
    <p>{{ userData.name }}</p>
    <p>Followers: {{ userData.followers }}</p>
    <p>Following: {{ userData.following }}</p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      selectedUser: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        userData: {}
      }
    },
    mounted: function() {
      this.getUser(this.selectedUser);
    },
    methods: {
      clearSelectedUser: function() {
        this.$emit('clearSelected');
      },
      getUser: function(username) {
        axios.get('https://api.github.com/users/' + username)
        .then(response => {
          this.userData = response.data
        })
        .catch(e => {
          // this.errors.push(e)
          console.log(e);
        })
      }
    }
  }
</script>

<style scoped>
  
</style>