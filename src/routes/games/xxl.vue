<template>
  <!-- <section class="page" ref="page"></section> -->
  <canvas></canvas>
</template>

<script>
  export default {
    mounted() {
      import('../../games/xxl/app.js')
    }
  }
</script>

<style lang="less" scoped>
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<style>
  body {
    background-color: transparent;
  }
</style>



