<template>
  <div class="search">
    <SearchInput/>
    <SearchResults
      :results="results"
    />
  </div>

</template>

<script>
  import axios from 'axios'
  import _ from 'lodash'
  import githubApi from '../api/github'
  import SearchInput from './SearchInput.vue'
  import SearchResults from './SearchResults.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'Search',
    data() {
      return {
        results: [],
        errors: [],
      }
    },
    components: {
      SearchInput,
      SearchResults
    },
    watch: {      
      searchQuery() {
        this.getUsers();
      }
    },
    computed: {
      resultMsg: function () {
        if (this.searchQuery === '') {
          return '';
        }
        else if (this.results && this.results.length) {
          return '';
        }
        else {
          return 'No results found';
        }
      },
      ...mapState([
        'searchQuery'
      ])
    },
    methods: {
      updateInputQuery: function(query) {
        this.$emit('update:inputQuery', query)
      },
      getUsers: _.debounce(
        function () {
          if (this.searchQuery === '') {
            this.results = []
            return
          }

          console.log("Getting users with param: ", this.searchQuery);

          let mockedResponse = githubApi.getUsers();
          this.results = mockedResponse;


          // TODO use browser fetch API instead of Axios lib
          // axios.get('https://api.github.com/search/users', { 
          //   params: {
          //     q: this.searchQuery
          //   }
          // })
          // .then(response => {
          //   this.results = response.data.items
          // })
          // .catch(e => {
          //   // this.errors.push(e)
          //   console.log(e);
          // })
        },
        300
      )
    }
  }
</script>

<style lang="scss" scoped>  
</style>