# CubicBezier

创建三次贝塞尔动画。

![cubic-bezier](https://yun.duiba.com.cn/moto/bezier.cubic.gif)

### 用法
---
```js

import {curve} from '@tuia/moto.js'

curve.cubicBezier({
  points: [
    {x: 50, y: 50},
    {x: 100, y: 150},
    {x: 300, y: 50},
    {x: 350, y: 150}
  ]
}).start(v => console.log(v))
```

### 函数参数
---
| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| option | `object` |  | `curve.cubicBezier`函数参数对象，返回一个[Anime](/inner/anime.html) |
| option.points | `Array.<{x, y}>` |  | 包含起始点(p0)，控制点(p1, p2)和结束点(p3)的数组 |
| [option.duration] | `number` | `1` | 动画时长，单位s |
| [option.ease] | `function` | `t => t` | 时间函数 |
| [option.yoyo] | `number` | `0` | 回荡次数 |
| [option.loop] | `number` | `0` | 循环次数 |
