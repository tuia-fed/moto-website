import core from './core'

const
  design = {width: 784, height: 1596},
  monitor = new PIXI.utils.EventEmitter(),
  zoom = {
    mix: [],
    get max() {return Math.max(...this.mix)},
    get min() {return Math.min(...this.mix)}
  }

zoom.mix = [
  core.screen.width / design.width,
  core.screen.height / design.height
]

export default core
export Camera from './camera'
export Layout from './layout'
export {
  zoom,
  design,
  monitor,
  devicePixelRatio
}