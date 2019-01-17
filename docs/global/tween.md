# tween
创建一个补间动画。

![tween](https://yun.duiba.com.cn/moto/tween.gif)

### 用法
---
```js
import {tween} from '@tuia/moto.js'

tween({
  from: 0,
  to: 100,
  duration: 3
}).start(v => console.log(v))
```

### 函数参数
---

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| option | `object` |  | `tween`函数参数对象，返回一个[Anime](/inner/anime.html)实例 |
| option.from | `object` \| `number` |  | 初始状态 |
| option.to | `object` \| `number` |  | 结束状态 |
| [option.duration] | `number` | `1` | 动画时长，单位s |
| [option.ease] | `function` | `t => t` | 时间函数 |
| [option.yoyo] | `number` | `0` | 回荡次数 |
| [option.loop] | `number` | `0` | 循环次数 |
