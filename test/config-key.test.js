const { resolve } = require('path')
const fs = require('fs-extra')
const { Nuxt, Builder } = require('nuxt-edge')

describe('basic', () => {
  let nuxt
  const buildDir = resolve(__dirname, '.nuxt-pro')

  beforeAll(async () => {
    const config = {
      rootDir: resolve(__dirname, '..'),
      buildDir,
      srcDir: resolve(__dirname, '../example'),
      modules: [
        ['@@']
      ],
      fontawesome: {
        useLayers: false,
        useLayersText: false,
        proIcons: {
          solid: true,
          duotone: ['faCamera']
        }
      }
    }
    config.dev = false

    nuxt = new Nuxt(config)
    const BundleBuilder = { build: _ => _ }
    const builder = new Builder(nuxt, BundleBuilder)
    await builder.build()
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('plugin', async () => {
    const content = await fs.readFile(resolve(buildDir, 'fontawesome.js'), { encoding: 'utf8' })

    expect(content).toContain('proFasFas')
    expect(content).toContain('proFadFaCamera')
    expect(content).toContain('pro-solid-svg-icons')
    expect(content).toContain('pro-duotone-svg-icons')
    expect(content).toContain("'FontAwesomeIcon'")

    expect(content).not.toContain('free-solid-svg-icons')
    expect(content).not.toContain('FontAwesomeLayers')
    expect(content).not.toContain('FontAwesomeLayersText')
  })
})
