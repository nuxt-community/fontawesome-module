import path from 'path'
import consola from 'consola'

const logger = consola.withScope('fontawesome')

const defaults = {
  component: '',
  suffix: false,
  addCss: true,
  useLayers: true,
  useLayersText: true,
  icons: {},
  proIcons: {}
}

const faStyles = [
  'solid',
  'regular',
  'light',
  'duotone',
  'brands'
]

function validateIcons (icons) {
  for (const key in icons) {
    if (!faStyles.includes(key)) {
      logger.error(`Unsupported icons style '${key}', it will be removed`)
      delete icons[key]
    }
  }
}

export default function fontawesomeModule (moduleOptions) {
  const options = Object.assign(
    defaults,
    this.options.fontawesome,
    moduleOptions
  )

  if (options.imports && this.options.dev) {
    logger.warn('The \'imports\' option is deprecated and will be removed in a future version. Use \'icons\' instead')
  }

  validateIcons(options.icons)
  validateIcons(options.proIcons)

  // 'component' is also used to name the layer components
  if (!options.component || options.suffix) {
    options.suffix = 'Icon'
  }

  // set default component name after determining suffix
  if (!options.component) {
    options.component = 'FontAwesome'
  }

  if (options.addCss) {
    this.options.css.unshift('@fortawesome/fontawesome-svg-core/styles.css')
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'fontawesome.js',
    options
  })
}
