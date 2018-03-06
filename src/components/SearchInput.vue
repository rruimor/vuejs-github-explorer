<template>
  <div class="input">
    <input 
      type="text"
      name="github__search"
      placeholder="Enter some text..."
      v-model="inputValue"
    >
  </div>
</template>

<script>
  export default {
    name: 'SearchInput',
    data() {
      return {
        inputValue: ''
      }
    },
    watch: {
      inputValue(newValue) {
        this.$store.commit('setSearchQuery', newValue)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input {
    width: 100%;

    > input {
      padding: 10px;
      font-size: 1.2em;
      border: 1px solid #CCC;

      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);

      &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        opacity: 1;
      }
    }
  }  
</style>