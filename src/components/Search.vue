<template>
  <div class="search__bar">
    <!-- <label for="username">Username: </label> -->
    <input 
      type="text"
      name="username" 
      placeholder="Enter some text..."
      class="input"
      v-model="inputText"
    >

    <div class="search__results">
      <div class="results__message">
        {{ resultMsg }}
      </div>

      <ul v-if="results && results.length">
        <div class="users__wrapper">
          <ResultItem 
            v-for="result of results"
            :key="result.id"
            :result="result"
            v-on:selected="setSelectedUser"
          />
        </div>
      </ul>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import _ from 'lodash'
  import ResultItem from './ResultItem.vue'

  export default {
    name: 'Search',
    data() {
      return {
        inputText: '',
        results: [],
        errors: [],
      }
    },
    props: {
      selectedUser: {
        type: String,
        required: true
      }
    },
    components: {
      ResultItem
    },
    watch: {      
      inputText: {
        handler: function() {
          this.getUsers()
        },
        deep: true
      }
    },
    methods: {
      setSelectedUser: function(username) {
        this.$emit('update:selectedUser', username)
      },
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
        300
      )
    },
    computed: {
      resultMsg: function () {
        if (this.inputText === '') {
          return '';
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

<style lang="scss" scoped>
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .input {
    padding: 10px;
    font-size: 1.2em;
    border: 1px solid #CCC;
  }

  .search__results {
    margin-top: 20px;
  }

  .users__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .results__message {
    margin: 20px;
  }
  
</style>