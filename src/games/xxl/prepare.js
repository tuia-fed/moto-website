import core from '../core'

export default function() {
  PIXI.Texture.addToCache(PIXI.Texture.from(require('../static/textures/mobile.png')), 'mobile.png')
  return new Promise(resolve => {
    new PIXI.Spritesheet(
      PIXI.BaseTexture.from(require('./static/textures/misc.png')),
      require('./static/textures/misc.json')
    ).parse(resolve)
  })
}