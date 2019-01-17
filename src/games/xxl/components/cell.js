import {devicePixelRatio} from '../../core'
import {OutlineFilter} from 'pixi-filters'
import {tween, composite} from '@tuia/moto.js'

export default class extends PIXI.Sprite {
  col = {target: null, current: null}
  row = {target: null, current: null}

  constructor({id, row, col}) {
    super(PIXI.Texture.from(`animal.${id}.png`))
    this.row.target =
    this.row.current = row
    this.col.target =
    this.col.current = col

    this.id = id
    this.interactive = true
    this.anchor.set(.5)
    this.position.set(col * 119 + 68, row * 118 + 70)
  }

  refresh() {
    this.id = 1 + ~~(Math.random() * 5)
    this.texture = PIXI.Texture.from(`animal.${this.id}.png`)
  }

  // 计算行列
  calc() {
    const index = this.parent.getChildIndex(this)
    this.row.target =
    this.row.current = ~~(index / 5)
    this.col.target =
    this.col.current = index % 5
  }

  outline() {
    if (this.filters) return
    const outline = new OutlineFilter(2 * devicePixelRatio, 0xffcc33)
    this.filters = [outline]
  }

  arrange() {
    return new Promise(resolve => {
      if (this.row.target === this.row.current) return resolve()

      const
        y1 = this.row.current * 119 + 68,
        y2 = this.row.target * 119 + 68

      this.scale.set(1)
      tween({
        from: y1,
        to: y2,
        duration: .5
      }).start({
        update: v => this.y = v,
        complete: () => {
          const
            index = this.row.target * 5 + this.col.target,
            children = this.parent.children

          this.row.current = this.row.target
          this.parent.getChildIndex(this) !== index &&
          this.parent.swapChildren(this, children[index])
          resolve()
        }
      })
    })
  }

  destroy() {

  }
}