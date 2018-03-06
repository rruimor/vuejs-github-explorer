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
      getUser: function(username) {
        console.log("selected user: ", username);

        // let mockedResponse = {"login":"mojombo","id":1,"avatar_url":"https://avatars0.githubusercontent.com/u/1?v=4","gravatar_id":"","url":"https://api.github.com/users/mojombo","html_url":"https://github.com/mojombo","followers_url":"https://api.github.com/users/mojombo/followers","following_url":"https://api.github.com/users/mojombo/following{/other_user}","gists_url":"https://api.github.com/users/mojombo/gists{/gist_id}","starred_url":"https://api.github.com/users/mojombo/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/mojombo/subscriptions","organizations_url":"https://api.github.com/users/mojombo/orgs","repos_url":"https://api.github.com/users/mojombo/repos","events_url":"https://api.github.com/users/mojombo/events{/privacy}","received_events_url":"https://api.github.com/users/mojombo/received_events","type":"User","site_admin":false,"name":"Tom Preston-Werner","company":null,"blog":"http://tom.preston-werner.com","location":"San Francisco","email":null,"hireable":null,"bio":null,"public_repos":59,"public_gists":62,"followers":20828,"following":11,"created_at":"2007-10-20T05:24:19Z","updated_at":"2018-02-26T20:05:14Z"}

        // this.userData = mockedResponse;
        
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