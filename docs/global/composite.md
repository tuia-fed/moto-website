# composite

创建一个复合动画。

![composite](https://yun.duiba.com.cn/moto/composite.gif)

### 用法
---
```js
import {composite, tween} from '@tuia/moto.js'

composite({
  position: tween({from: 0, to: 100}),
  scale: tween({from: 1, to: 2})
}).start(v => console.log(v))
```

### 函数参数
---

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| option | `object<string, Anime>` |  | 包含一个或多个值为[Anime](/inner/anime.html)的对象 |