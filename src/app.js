import routes from './routes'
import layout from './layout.vue'

Vue.use(Router)

new Vue({
  router: new Router({routes}),
  render: create => create(layout)
}).$mount('.app')