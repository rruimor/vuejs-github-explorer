<template>
  <div class="search">
    <SearchInput/>
    <SearchResults
      :results="results"
    />
  </div>

</template>

<script>
  // import githubApi from '../api/github'
  
  import _ from 'lodash'
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

          // let mockedResponse = githubApi.getUsers();
          // this.results = mockedResponse;

          var vm = this

          var githubUsersApiurl = new URL("https://api.github.com/search/users")
          githubUsersApiurl.searchParams.append('q', this.searchQuery)

          fetch(githubUsersApiurl)
            .then((resp) => resp.json())
            .then(function(parsedResponse) {
              vm.results = parsedResponse.items
            })
            .catch(e => { console.log(e) });
        },
        300
      )
    }
  }
</script>

<style lang="scss" scoped>  
</style>