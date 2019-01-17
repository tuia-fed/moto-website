# CatmullRom

创建`Catmull Rom`曲线动画。

![catmull rom](https://yun.duiba.com.cn/moto/catmull-rom.gif)

### 用法
---
```js
import {curve} from '@tuia/moto.js'

curve.catmullRom({
  points: [
    {x: 50, y: 50},
    {x: 100, y: 150},
    {x: 200, y: 100},
    {x: 300, y: 50},
    {x: 350, y: 150}
  ]
}).start(v => console.log(v))
```

### 函数参数
---
| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| option | `object` | | `curve.catmullRom`函数参数对象 |
| option.points | `Array<{x, y}>` | | 路径点数组 |
| [option.speed] | `number` | `10` | 移动速度 |
| [option.loop] | `boolean` | `false` | 自动闭合路径 |

