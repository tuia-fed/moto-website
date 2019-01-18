<template>
  <div id="lottie" ref="content">
    <div class="content"></div>
  </div>
</template>

<script>
  import lottie from 'lottie-web';
  export default {
    mounted() {
      let el = this.$refs.content;
      lottie.loadAnimation({
        wrapper: el, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/src/static/moto/data.json' // the path to the animation json
      });
    }
  }
</script>
<style lang="less" scoped>
  #lottie {
    height: 1206px;
    width: 100%;
    .content {
      height: 100%;
      width: 100%;
    }
  }
</style>

