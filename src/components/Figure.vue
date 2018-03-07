<template>
  <div class="figure">
    <p class="figure__number">{{ figureNumber }}</p>
    <span class="figure__text">{{ figureText }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      figureNumber: {
        type: Number,
        required: true
      },
      figureText: {
        type: String,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>
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