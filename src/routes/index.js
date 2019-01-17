export default [
  {path: '/', component: () => import('./entry.vue')},
  {path: '/showcase', component: () => import('./showcase.vue')},
  {
    path: '/games',
    component: () => import('./games/entry.vue'),
    children: [
      {path: 'xxl', component: () => import('./games/xxl.vue')}
    ]
  }
]