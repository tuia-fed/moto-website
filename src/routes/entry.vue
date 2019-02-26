<template>
  <section class="page h-100 d-flex align-items-center">
    <!-- <i v-for="p in points"
      class="point"
      :style="{left: `${p.x}px`, top: `${p.y}px`}"
    ></i> -->
    <i v-for="s in segments"
      class="segment"
      v-show="completed"
      :style="{left: `${s.x}px`, top: `${s.y}px`, width: `${s.w}px`, transform: `rotate(${s.r}deg)`, background: `${s.bkg}`}"
    ></i>
    <section class="container d-flex align-items-center flex-column">
      <section class="anime" ref="anime"></section>
      <transition name="slide"><div class="btn-group" v-show="completed">
        <button class="btn"><a href="https://tuia-fed.github.io/moto-website/docs/" target="_blank">Documents</a></router-link></button>
        <button class="btn"><a href="https://github.com/tuia-fed/moto.js" target="_blank">Github</a></button>
        <button class="btn"><a href="https://unpkg.com/@tuia/moto.js/" target="_blank">Download</a></button>
        <button class="btn"><a href="#/showcase">Showcase</a></button>
      </div></transition>
    </section>
  </section>
</template>

<script>
  import lottie from 'lottie-web'
  export default {
    data() {
      return {
        completed: false,
        points: [],
        segments: []
      }
    },

    methods: {
      loop() {
        this.segments = []

        this.points.forEach(point => {
          point.r += point.omega * .01
          point.x += Math.sin(point.r) * point.speed
          point.y += Math.cos(point.r) * point.speed

          /* 边界限定 */
          point.x < 0 ? point.x = innerWidth :
            point.x > innerWidth ? point.x = 0 : 0
          point.y < 0 ? point.y = innerHeight :
            point.y > innerHeight ? point.y = 0 : 0

          !point.x || !point.y || point.x === innerWidth || point.y === innerHeight ? point.c = this.randomColor() : 0
        })

        for (let i = this.points.length - 1; i > 0; i -= 1) {
          this.connect(this.points[i], this.points[i - 1])
        }

        requestAnimationFrame(this.loop)
      },

      connect(a, b) {
        this.segments.push({
          x: a.x,
          y: a.y,
          w: this.distance(a, b),
          r: Math.atan2(b.y - a.y, b.x - a.x) / Math.PI * 180,
          bkg: `linear-gradient(${a.c}, ${b.c})`
        })
      },

      distance(a, b) {
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
      },

      randomColor() {
        const alphabet = '0123456789abcdef'
        let hex = '#'
        for (let i = 0; i < 6; i++) {
          hex += alphabet[~~(Math.random() * 16)]
        }
        return hex
      },

      handle(type, ...args) {
        switch (type) {
          case 'page:click': {
            const {pageX: x, pageY: y} = args[0]
            this.points.push({
              x, y,
              omega: Math.random() - .8,
              speed: .2 + Math.random(),
              r: Math.random() * Math.PI * 2
            })
            break
          }
        }
      }
    },

    mounted() {
      /* 添加随机点 */
      for (let i = 0; i < 20; i++) {
        this.points.push({
          x: innerWidth * Math.random(),
          y: innerHeight * Math.random(),
          r: Math.random() * Math.PI * 2,
          c: this.randomColor(),
          omega: Math.random() - .8,
          speed: .5 + Math.random()
        })
      }
      lottie.loadAnimation({
        container: this.$refs.anime,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/static/animes/moto.json'
      }).addEventListener('complete', ev => {
        this.completed = true
      })
      this.loop()
    }
  }
</script>


<style lang="less" scoped>
  .page {
    background-color: #222;
    overflow: hidden;
    position: relative;
    .point {
      @size: 8px;
      position: absolute;
      width: @size;
      height: @size;
      border-radius: @size / 2;
      background-color: #fc3;
      transform: translate(-50%, -50%);
    }

    .segment {
      height: 1px;
      background-color: #ffcc336e;
      position: absolute;
      transform-origin: left center;
      transform: translate(0, -50%);
      opacity: .68;
    }
  }

  .container {
    .btn-group {
      .btn {
        color: #fff;
        background-color: #00bcd4;

        a {
          color: #fff;
        }
      }
    }
  }

  .anime {
    margin: -30% auto -12%;
    width: 80%;
    max-width: 60rem;
    max-height: 100%;
    transform: translateX(2%);
  }

  .slide-enter-active {
    transition: transform .5s;
  }

  .slide-enter {
    transform: translateY(100%);
  }

  @media (max-width: 375px) {
    .btn {
      font-size: 12px;
    }
  }
</style>

