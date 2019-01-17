# bezier
创建二次贝塞尔动画。

![bezier](https://yun.duiba.com.cn/moto/bezier.1.gif)

### 用法
---
```js
import {curve} from '@tuia/moto.js'

curve.bezier({
  points: [
    {x: 50, y: 50},
    {x: 150, y: 150},
    {x: 250, y: 50}
  ]
}).start(v => console.log(v))
```

### 函数参数
---
| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| option | `object` |  | `curve.bezier`函数参数对象，返回一个[Anime](/inner/anime.html)实例 |
| option.points | `Array<{x, y}>` |  | 包含起始点(p0)，控制点(p1)和结束点(p2)的数组 |
| [option.duration] | `number` | `1` | 动画时长，单位s |
| [option.ease] | `function` | `t => t` | 时间函数 |
| [option.yoyo] | `number` | `0` | 回荡次数 |
| [option.loop] | `number` | `0` | 循环次数 |
