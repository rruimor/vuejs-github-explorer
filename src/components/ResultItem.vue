<template>
  <transition name="fade" appear>
    <li 
      class="result"
      @click="setSelected"
    >
      <clazy-load 
        :src="result.avatar_url"
        class="avatar__wrapper"
        v-if="result.avatar_url"
      >
        <img
          class="avatar--thumbnail"
          :src="result.avatar_url"
          slot="image"
        >
        <Spinner
          class="preloader"
          slot="placeholder"
        />
      </clazy-load>

      <div class="name__wrapper">
        <span class="result__name">{{ result.login }}</span>
      </div>
      
    </li>
  </transition>
</template>

<script>
  import Spinner from 'vue-simple-spinner'

  export default {
    props: {
      result: {
        type: Object,
        required: true
      }
    },
    components: {
      Spinner
    },
    methods: {
      setSelected: function() {
        this.$store.commit('setSelectedUser', this.result.login)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .result {
    height: auto;
    border: 2px solid #BBB;
    padding: 20px;
    margin: 10px;
    flex: 1 0 120px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0.7;

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      opacity: 1;
    }

    &__name {
      font-weight: bold;
    }
  }


  .name__wrapper {
    margin-top: 20px;
  }
</style>