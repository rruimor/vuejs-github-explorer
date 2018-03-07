<template>
  <div class="profile">

    <template v-if="hasUserData">
      <transition name="fade" appear>
        <div class="profle__wrapper">
          <h1>{{ userData.login }}</h1>

          <section class="avatar__wrapper">
            <img class="avatar--thumbnail" :src="userData.avatar_url">
          </section>
          
          <section class="profile__name">
            <h2 class="user__name">{{ userData.name }}</h2>
            <span class="user__location">{{ userData.location }}</span>
          </section>

          <section class="profile__figures">
            <Figure
              :figureNumber="userData.followers"
              figureText="Followers"
            />

            <Figure
              :figureNumber="userData.following"
              figureText="Following"
            />

            <Figure
              :figureNumber="userData.public_repos"
              figureText="Public Repos"
            />
          </section>

          <section>
            <p v-if=" userData.blog"><a :href="userData.blog" target="_blank">{{ userData.blog }}</a></p>
          </section>
        </div>
      </transition>
    </template>

    <Spinner v-else/>
  </div>
</template>

<script>
  import githubApi from '../api/github'
  import _ from 'lodash'
  import fetch from 'node-fetch'
  import Spinner from 'vue-simple-spinner'
  import Figure from '@/components/Figure'

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
    created: function() {
      this.getUser(this.selectedUser);
    },
    components: {
      Spinner, Figure
    },
    computed: {
      hasUserData: function() {
        return !_.isEmpty(this.userData)
      }
    },
    methods: {
      getUser: function(username) {
        console.log("selected user: ", username);

        let mockedResponse = githubApi.getUser();
        this.userData = mockedResponse;

        // var vm = this

        // fetch("https://api.github.com/users/" + username)
        //   .then((resp) => resp.json())
        //   .then(function(parsedResponse) {
        //     vm.userData = parsedResponse
        //   })
        //   .catch(e => { console.log(e) });
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
  }
</style>