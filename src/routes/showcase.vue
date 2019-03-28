<template>
  <section class="h-100">
    <section class="shadow" v-show="showed" @click="showed = false">
      <iframe frameborder="0" ref="iframe"
        :style="{width: `${ratio * 784}px`, height: `${ratio * 1596}px`}"
      ></iframe>
    </section>
    <ul>
      <li v-for="(item, i) in list" @click="handle('item:click', i)">
        <i class="thumbnail" :style="{backgroundImage: `url(${item.thumbnail})`}"></i>
        <i class="name" v-text="item.name"></i>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        showed: false,
        list: [
          {name: '消消乐', thumbnail: '/static/images/xxl.jpg', url: '/index.html#/games/xxl'},
          {name: '弹珠机', thumbnail: '/static/images/dzj.jpg', url: 'https://activity.tuia.cn/activity/index?id=9360&login=preview&appKey=jlg88lyxz7siqtmr'}
        ]
      }
    },

    computed: {
      ratio: function() {
        const {innerWidth, innerHeight} = window
        return Math.min(innerWidth / 784, innerHeight / 1596)
      }
    },

    methods: {
      handle(...args) {
        switch (args[0]) {
          case 'item:click': {
            this.showed = true
            console.log(this.$refs.iframe)
            this.$refs.iframe.src = this.list[args[1]].url
            break
          }
        }
      }
    },

    mounted() {

    }
  }
</script>


<style lang="less" scoped>
  section {
    background-color: #3c3c3c;
    position: relative;
    overflow: auto;

    ul {
      list-style: none;
      padding: 3rem 1rem;
      margin: 0;
      list-style-position: inside;
      text-align: center;
      display: grid;
      grid-template-columns: repeat(auto-fit, 16rem);
      grid-gap: 2rem;
      justify-content: center;

      li {
        cursor: pointer;
      }

      .thumbnail {
        @size: 8rem;
        display: block;
        margin: auto;
        width: @size;
        height: @size;
        border-radius: @size / 2;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border: 3px solid #fff;
      }

      .name {
        display: block;
        color: #fff;
        margin-top: .5rem;
      }
    }
  }

  .shadow {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.555);
    position: absolute;
    top: 0;
    left: 0;
  }

  iframe {
    position: absolute;
    width: 784 / 2.5px;
    height: 1596 / 2.5px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: transparent;
  }
</style>

