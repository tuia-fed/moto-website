module.exports = {
  title: 'moto.js',
  description: 'A light motion library with curvilinear support.',
  themeConfig: {
    sidebar: [
      ['/getting-started', 'Getting Started'],

      {
        title: 'Global',
        children: [
          ['/global/tween', 'tween'],
          ['/global/chain', 'chain'],
          ['/global/composite', 'composite']
        ]
      },

      {
        title: 'Curve',
        children: [
          ['/curve/bezier', 'bezier'],
          ['/curve/cubic-bezier', 'cubic bezier'],
          ['/curve/catmull-rom', 'catmull rom']
        ]
      }
    ]
  }
}