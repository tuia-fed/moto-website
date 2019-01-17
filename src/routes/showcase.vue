<template>
  <section class="d-flex align-items-center justify-content-center h-100">
    <iframe :src="`${PREFIX}/#/games/xxl`" frameborder="0"
      :style="{width: `${ratio * 784}px`, height: `${ratio * 1596}px`}"
    ></iframe>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        PREFIX
      }
    },

    computed: {
      ratio: function() {
        const {innerWidth, innerHeight} = window
        return Math.min(innerWidth / 784, innerHeight / 1596)
      }
    },

    mounted() {

    }

  }
</script>


<style lang="less" scoped>
  iframe {
    width: 784 / 2.5px;
    height: 1596 / 2.5px;
  }
</style>

