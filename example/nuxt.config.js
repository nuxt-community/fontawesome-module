const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    ['@@', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faCog', 'faCalendar', 'faHome', 'faCircle', 'faCheck']
        }
      ],
      icons: {
        solid: true,
        brands: [
          'faNode',
          'faVuejs'
        ]
      }
    }]
  ]
}
