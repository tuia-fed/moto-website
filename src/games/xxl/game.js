import core, {Layout, zoom, devicePixelRatio} from '../core'
import {Cell} from './components'
import {tween} from '@tuia/moto.js'

export default {
  last: null,

  setup() {
    this.container = new PIXI.Container()
    this.layout = PIXI.Sprite.from('grid.png')
    this.mobile = PIXI.Sprite.from('mobile.png')

    this
      .generate(indices => {
        return !indices.length
      })
      .forEach((id, i) => {
        const cell = new Cell({
          id,
          row: ~~(i / 5),
          col: i % 5
        })
        this.layout.addChild(cell)
      })
    this.layout.scale.set(zoom.min)
    this.container.addChild(this.layout, this.mobile)
  },

  generate(cmp) {
    while (1) {
      const grid = Array.from({length: 25}, () => 1 + ~~(Math.random() * 5))
      if (cmp(this.check(grid))) return grid
    }
  },

  check(grid) {
    const indices = []

    /* 行检测 */
    for (let i = 0; i < 5; i++) {
      for (let j = 0, step = 1; j < 5; j += 1) {
        j < 4 && grid[i * 5 + j] === grid[i * 5 + j + 1] ? step++ : step = 1
        if (step > 2) {
          for (let k = 0; k < step; k++) {
            const index = i * 5 + j + 1 - k
            indices.indexOf(index) === -1 && indices.push(index)
          }
        }
      }
    }

    /* 列检测 */
    for (let i = 0; i < 5; i++) {
      for (let j = 0, step = 1; j < 5; j += 1) {
        j < 4 && grid[j * 5 + i] === grid[(j + 1) * 5 + i] ? step++ : step = 1
        if (step > 2) {
          for (let k = 0; k < step; k++) {
            const index = (j + 1 - k) * 5 + i
            indices.indexOf(index) === -1 && indices.push(index)
          }
        }
      }
    }

    return indices
  },

  clean(indices) {
    const children = this.layout.children
    tween({
      from: 1,
      to: 0,
      duration: .3
    }).start({
      update: v => {
        indices.forEach(index => {
          children[index].scale.set(v)
        })
      },
      complete: () => {
        indices.forEach(index => {
          children[index].refresh()
        })
        this.fill(indices).then(() => {
          const indices = this.check(this.layout.children.map(child => child.id))
          indices.length && this.clean(indices)
        })
      }
    })
  },

  // 空位交换填充
  fill(indices) {
    const
      children = this.layout.children,
      cols = Array.from({length: 5}, (_, i) => {
        const col = []
        for (let j = 0; j < 5; j++) {
          const index = j * 5 + i
          indices.indexOf(index) !== -1 && col.push(j)
        }
        return col
      })

    // 列遍历
    for (let i = 0; i < 5; i++) {
      if (!cols[i].length) continue
      const max = Math.max(...cols[i])
      for (let j = 0; j < 5; j++) {
        const
          index = cols[i].indexOf(j),
          child = children[j * 5 + i]

        if (index !== -1) { // 空元素
          child.row.target = index
          child.row.current = index - cols[i].length
        } else if (j < max) { // 非空元素
          child.row.target += cols[i].filter(item => item > j).length
        }
      }
    }

    // 就位
    return Promise.all(children.map(child => child.arrange()))
  },

  listen() {
    this.layout.interactive = true
    this.layout.on('pointerdown', async ev => {
      const target = ev.target
      if (!(target instanceof Cell)) return
      if (!this.last) {
        this.last = target
        target.outline()
        return
      } else if (this.last === target) {
        this.last =
        target.filters = null
        return
      } else {
        target.outline()
        await this.swap(target, this.last)
        const indices = this.check(this.layout.children.map(child => child.id))
        indices.length ? this.clean(indices) : await this.swap(target, this.last)
        this.last =
        target.filters =
        this.last.filters = null
        return
      }
    })

    this.container.on('added', () => {
      core.align(this.layout)
    })
  },

  swap(cellA, cellB) {
    const
      p1 = {x: cellA.x, y: cellA.y},
      p2 = {x: cellB.x, y: cellB.y}

    this.layout.swapChildren(cellA, cellB)

    cellA.calc()
    cellB.calc()

    return Promise.all([
      new Promise(resolve => {
        tween({from: p1, to: p2, duration: .3}).start({
          update: v => cellA.position.copy(v),
          complete: resolve
        })
      }),
      new Promise(resolve => {
        tween({from: p2, to: p1, duration: .3}).start({
          update: v => cellB.position.copy(v),
          complete: resolve
        })
      })
    ])
  },

  show() {
    this.setup()
    this.listen()
    core.stage.addChild(this.container)
  },

  hide() {

  }
}