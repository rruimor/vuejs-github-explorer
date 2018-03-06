<template>
  <div class="profile__wrapper">
    <h1>{{ userData.login }}</h1>
    
    <section class="avatar__wrapper">
      <img class="avatar--thumbnail" :src="userData.avatar_url">
    </section>
    
    <section class="profile__name">
      <h2 class="user__name">{{ userData.name }}</h2>
      <span class="user__location">{{ userData.location }}</span>
    </section>

    <section class="profile__figures">
      <div class="figure">
        <p class="figure__number">{{ userData.followers }}</p>
        <span class="figure__text">Followers</span>
      </div>

      <div class="figure">
        <p class="figure__number">{{ userData.following }}</p>
        <span class="figure__text">Following</span>
      </div>

      <div class="figure">
        <p class="figure__number">{{ userData.public_repos }}</p>
        <span class="figure__text">Public Repos</span>
      </div>
    </section>

    <section>
      <p v-if=" userData.blog"><a :href="userData.blog" target="_blank">{{ userData.blog }}</a></p>
    </section>
  </div>
</template>

<script>
  // import githubApi from '../api/github'

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
      getUser: function(username) {
        console.log("selected user: ", username);

        // let mockedResponse = githubApi.getUser();
        // this.userData = mockedResponse;

        var vm = this

        fetch("https://api.github.com/users/" + username)
          .then((resp) => resp.json())
          .then(function(parsedResponse) {
            vm.userData = parsedResponse
          })
          .catch(e => { console.log(e) });
      }
    }
  }
</script>

<style lang="scss" scoped>

  section {
    margin: 2em 0;
    width: 100%;
  }
  
  .profile__name {
    margin-bottom: 20px;

    .user__name {
      margin-bottom: 5px;
    }
  }

  .profile__figures {
    display: inline-flex;
    // justify-content: space-evenly;
  }

  .figure {
    flex: 1;

    &__number {
      margin: 0px;
      font-size: 1.6em;
    }

    &__text {
      font-size: 0.85em;
    }
  }

</style>