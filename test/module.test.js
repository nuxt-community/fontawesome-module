const fs = require('fs')
const path = require('path')
const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')

const config = require('../example/nuxt.config')

const url = path => `http://localhost:3000${path}`
const get = path => request(url(path))

describe('basic', () => {
  let nuxt

  beforeAll(async () => {
    config.dev = false
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(3000)
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('bundle size (tree shaking)', () => {
    // fab ~460KB
    // fas ~660KB
    // make sure that fas is tree-shaked and not included completely
    let maxSize = 0
    const dirname = path.resolve(nuxt.options.buildDir, 'dist', 'client')
    const files = fs.readdirSync(dirname)
    for (const file of files) {
      const stat = fs.statSync(path.resolve(dirname, file))
      if (stat.size > maxSize) {
        maxSize = stat.size
      }
    }

    expect(maxSize).toBeGreaterThan(100000)
    expect(maxSize).toBeLessThan(700000)
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('data-prefix="fas" data-icon="cog"')
    expect(html).toContain('data-prefix="fas" data-icon="check"')
    expect(html).toContain('data-prefix="fas" data-icon="circle"')
    expect(html).toContain('data-prefix="fas" data-icon="calendar"')
    expect(html).toContain('>27<')
    expect(html).toContain('fa-inverse fa-layers-text')
    expect(html).toContain('data-prefix="fab" data-icon="js"')
    expect(html).toContain('data-prefix="fab" data-icon="node"')
    expect(html).toContain('data-prefix="fab" data-icon="vuejs"')
  })
})
