<template>
  <!-- Extract to its own component ;) -->
  <div class="search__results">
    <div v-if="resultMsg" class="results__message">
      {{ resultMsg }}
    </div>

    <ul v-if="results && results.length">
      <div class="users__wrapper">
        <ResultItem 
          v-for="result of results"
          :key="result.id"
          :result="result"
        />
      </div>
    </ul>
  </div>

</template>

<script>
  import ResultItem from './ResultItem.vue'

  export default {
    name: 'SearchResults',
    props: {
      results: {
        type: Array,
        required: true
      }
    },
    components: {
      ResultItem
    },
    computed: {
      resultMsg: function () {
        if (this.$store.state.searchQuery === '') {
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

  .search__results {
    margin-top: 40px;
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