<template>
  <div class="search__bar">
    <label for="username">Username: </label>
    <input type="text" name="username" v-model="inputText">

    <div class="search__results">
      <ul v-if="results && results.length">
        <li v-for="result of results">
          <p>{{ result.login }}</p>
          <img class="avatar--thumbnail" :src="result.avatar_url">
        </li>
      </ul>
      <div class="results__message">
        {{ resultMsg }}
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';
  import lodash from 'lodash';

  export default {
    name: 'Search',
    data() {
      return {
        inputText: '',
        results: [],
        errors: [],
      }
    },
    created() {
      
    },
    watch: {      
      inputText: {
        handler: function(val, _oldVal) {
          this.getUsers()
        },
        deep: true
      }
    },
    methods: {
      getUsers: _.debounce(
        function () {
          if (this.inputText === '') {
            this.results = []
            return
          }

          console.log("Getting users with param: ", this.inputText);

          axios.get('https://api.github.com/search/users', { 
            params: {
              q: this.inputText
            }
          })
          .then(response => {
            this.results = response.data.items
          })
          .catch(e => {
            // this.errors.push(e)
            console.log(e);
          })
        },
        200
      )
    },
    computed: {
      resultMsg: function () {
        if (this.inputText === '') {
          return 'Enter some text :)';
        }
        else if (this.results && this.results.length) {
          return '';
        }
        else {
          return 'No results found';
        }
      }
    }
  }
</script>

<style scoped>
  .avatar--thumbnail {
    max-width: 100px;
  }

  .results__message {
    margin: 20px;
  }
  
</style>