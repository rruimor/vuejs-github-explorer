<template>
  <li 
    class="result__item"
    @click="setSelected"
  >
    <div class="avatar__wrapper">
      <img class="avatar--thumbnail" :src="result.avatar_url">
    </div>
    <div class="name__wrapper">
      <span class="result__name">{{ result.login }}</span>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      result: {
        type: Object,
        required: true
      }
    },
    methods: {
      setSelected: function() {
        this.$emit('selected', this.result.login)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .avatar--thumbnail {
    max-width: 100px;
  }

  .result__name {
    font-weight: bold;
  }

  .name__wrapper {
    margin-top: 20px;
  }

  .result__item {
    height: auto;
    border: 2px solid #BBB;
    padding: 20px;
    margin: 10px;
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0.7;

    &:hover {
      border-color: #777;
      opacity: 1;
    }
  }
</style>