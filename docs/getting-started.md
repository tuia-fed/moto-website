# 开始
> moto.js 只提供基础运算，可以轻松与现有项目集成。


## 安装

### NPM
推荐使用`npm`方式安装，更好的与打包工具结合，方便开发。

```sh
npm i -D @tuia/moto.js
```

然后，在项目中使用：
```js
import {tween, curve} from '@tuia/moto.js'

tween({
  from: 0,
  to: 100
}).start(v => console.log(v))

curve.bezier({
  points: [
    {x: 50, y: 50},
    {x: 150, y: 150},
    {x: 250, y: 50}
  ]
}).start(v => console.log(v))
```

### CDN

当然通过`CDN`引入`moto.js`，也是一个不错的选择。

```html
<script src="https://unpkg.com/@tuia/moto.js"></script>
<script>
  const {tween, curve} = moto
  tween({
    from: 0,
    to: 100
  }).start(v => console.log(v))

  curve.bezier({
    points: [
      {x: 50, y: 50},
      {x: 150, y: 150},
      {x: 250, y: 50}
    ]
  }).start(v => console.log(v))
</script>
```

## 示例
<iframe width="100%" height="500" src="//jsfiddle.net/JetLu/c67zqh28/26/embedded/result,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
