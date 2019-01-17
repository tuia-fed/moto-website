
export default class Layout extends PIXI.Container {
  static GRID = 2
  static VERTICAL = 1
  static HORIZONTAL = 0

  #added = false

  constructor(option = {}) {
    const {
      gap,
      cell,
      type,
      column
    } = option

    super()

    this.type = getValue(type, Layout.HORIZONTAL)
    this.gap = getValue(gap, 0)
    this.column = getValue(column, 3)
    this.cell = getValue(cell, {})

    this.#listen()
  }

  addChild(...args) {
    super.addChild(...args)
    this.#added && this.#setup()
  }

  #setup() {
    const
      rect = new PIXI.Rectangle(),
      column = this.column,
      cell = this.cell,
      gap = this.gap

    let ox, oy, ix, iy, w, h,
      tx = 0,
      ty = 0,
      max = 0,
      index = 0

    /* GRID */
    this.type === Layout.GRID && this.children.forEach((child, i) => {
      child.getLocalBounds(rect)
      ox = getValue(child.ox, cell.width ? .5 : -rect.x / rect.width)
      oy = getValue(child.oy, cell.height ? .5 : -rect.y / rect.height)
      ix = index % column
      iy = ~~(index / column)
      w = (cell && cell.width) || child.width
      h = (cell && cell.height) || child.height

      ix ? child.x = gap + tx + ox * w : child.x = ox * w
      tx = child.x + (1 - ox) * w

      iy ? child.y = gap + ty + oy * h : child.y = oy * h
      max = Math.max(max, child.y + (1 - oy) * h)
      ix === column - 1 ? ty = max : null
      index++
    })

    /* HORIZONTAL */

    /* VERTICAL */
  }

  #listen() {
    this
      .on('added', () => {
        this.#added = true
        this.#setup()
      })
      .on('removed', () => {
        this.#added = false
      })
  }
}

function getValue(v, e) {
  return v === undefined || v === null ? e : v
}