# chain
串联多个补间动画。

![chain](https://yun.duiba.com.cn/moto/chain.gif)

### 用法
---
```js
import {chain, tween} from '@tuia/moto.js'

chain(
  tween({from: 0, to: 100, duration: 3}),
  tween({from: 100, to: 0, duration: 3})
).start(v => console.log(v))
```

### 函数参数
---

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| animes | `...Anime` |  | 一个或多个[Anime](/inner/anime.html)实例 |
