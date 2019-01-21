<template>
  <div id="lottie">
    <div class="logo-content" v-show="logoShow">
      <div class="logo">
        <img src="../static/logo.png" alt="">
      </div>
      <div class="buttons">
        <a href="">实例</a>
        <a href="https://tuia-fed.github.io/moto.js">文档</a>
      </div>
    </div>
    <transition name="fade">
      <div class="content" v-show="contentShow">
        <a href="">Download</a>
        <a href="https://github.com/tuia-fed/moto.js">GitHub</a>
      </div>
    </transition>

  </div>
</template>

<script>
  let lottie = require('lottie-web');
  export default {
    data:() => {
      return {
        logoShow: true,
        contentShow: false
      }
    },
    mounted() {
      let el = document.getElementById('lottie');
      lottie.loadAnimation({
        container: el, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/src/static/moto.json' // the path to the animation json
      });
      setTimeout(()=>{
        this.contentShow = true;
      }, 1500)
    }
  }
</script>
<style lang="less" scoped>
  #lottie {
    height: 100%;
    width: 100%;
    text-align: center;
    background: #1e1f34;
    .logo-content {
      width: 100%;
      position: absolute;
      z-index: 2;
      .logo {
        height: 100px;
        width: 100px;
        float: left;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .buttons {
        float: right;
        a {
          display: inline-block;
          height: 80px;
          line-height: 80px;
          margin-right: 10px;
          font-weight: bold;
        }
      }
    }
    .content {
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      a {
        border: 1px solid #fff;
        padding: 6px;
        border-radius: 10px;
      }
      a:nth-child(1) {
        font-size: 30px;
        color:aqua;
        margin-right: 100px;
      }
      a:nth-child(2) {
        font-size: 30px;
        color:mediumorchid;
        margin-right: 100px;
      }
    }

  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 4s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

