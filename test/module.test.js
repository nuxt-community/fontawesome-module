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

  test('render', async () => {
    let html = await get('/')
    expect(html).toContain('data-prefix="fas" data-icon="cog"')
    expect(html).toContain('data-prefix="fas" data-icon="check"')
    expect(html).toContain('data-prefix="fas" data-icon="circle"')
    expect(html).toContain('data-prefix="fas" data-icon="calendar"')
    expect(html).toContain('fa-inverse fa-layers-text')
    expect(html).toContain('data-prefix="fab" data-icon="github"')
  })
})
