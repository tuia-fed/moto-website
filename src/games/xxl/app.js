import core from '../core'
import prepare from './prepare'
import game from './game'

prepare().then(() => {
  game.show()
})

