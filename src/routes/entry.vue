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
      <div class="describe" v-show="describe">
        Moto.js是一款开源的动画库，助力开发者快速实现各种动画效果而无需了解背后的复杂运算。javaScript核心运算库可以与各种场景无缝结合。同时，专为web开发者准备了基于Less的常用动画合集。一进引入，轻松开发。
      </div>
    </transition>
    
    <transition name="fade">
      <div class="content" v-show="contentShow">
        <a href="">Download</a>
        <a href="https://github.com/tuia-fed/moto.js">GitHub</a>
      </div>
    </transition>

    <transition name="fade">
      <div class='img-bottom'>
        <img src="../static/fluid.png" alt="">
      </div>
    </transition>
  </div>
</template>

<script>
  let lottie = require('lottie-web');
  import {tween} from '@tuia/moto.js';
  export default {
    data:() => {
      return {
        logoShow: false,
        contentShow: false,
        describe: false
      }
    },
    methods: {
      move(el) {
        tween({
          from: {x: 0, y: 0, width: 100, height: 100},
          to: {x: -280, y: 0, width: 60, height: 70},
          duration: 1.5
        }).start(v => {
          el.style.width = `${v.width}%`;
          el.style.height = `${v.height}%`;
          el.style.transform = `translate(${v.x}px, ${v.y}px)`;
          if (v.width === 60) {
            this.describe = true;
            setTimeout(()=>{
              this.contentShow = true;
            }, 1000)
          }
        })
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
      }).addEventListener('complete', v => {
        this.logoShow = true;
        let svg = document.querySelector('#lottie svg');
        this.move(svg);
      });
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
        height: 42px;
        width: 144px;
        float: left;
        margin-top: 20px;
        margin-left: 20px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .buttons {
        float: right;
        margin-right: 20px;
        a {
          display: inline-block;
          height: 80px;
          line-height: 80px;
          margin-right: 10px;
          font-weight: bold;
          font-size: 24px;
        }
      }
    }
    .content {
      position: absolute;
      top: 75%;
      left: 30%;
      transform: translateX(-50%);
      z-index: 2;
      a {
        display: inline-block;
        width:169px;
        height:52px;
        border-radius:10px;
        font-size:24px;
        font-weight:900;
        line-height:35px;
        padding: 10px;
      }
      a:nth-child(1) {
        background:rgba(255,255,255,1);
        color:rgba(1,1,1,1);
      }
      a:nth-child(2) {
        background:rgba(88,235,216,1);
        color:#017A68;
        margin-left: 100px;
      }
    }
    .describe {
      width: 710px;
      border-left: 4px solid #14DEFE;
      font-size:24px;
      color:rgba(255,255,255,1);
      line-height:35px;
      text-align: left;
      padding-left: 20px;
      position: absolute;
      top: 50%;
      left: 15%;
    }
    .img-bottom {
      position: absolute;
      height: 100%;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

