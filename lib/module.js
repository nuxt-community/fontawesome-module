const {resolve} = require('path')

module.exports = async function module (moduleOptions) {
  const defaults = {
    component: 'font-awesome-icon',
    imports: []
  }
  const options = Object.assign(defaults, this.options.fontawesome, moduleOptions)

  this.options.css.unshift('@fortawesome/fontawesome-svg-core/styles.css')
  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    options
  })
}
