# @nuxtjs/fontawesome
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![License][license-src]][license-href]

> Module to use [Font Awesome](https://fontawesome.com/) icons in your Nuxt.js project. Uses [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) under the hood

[📖 **Release Notes**](./CHANGELOG.md)

## Setup
- Add dependency using npm to your project
```
yarn add @nuxtjs/fontawesome -D
// or to also add the free icon packs
yarn add @nuxtjs/fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons -D
```

- Add `@nuxtjs/fontawesome` to `buildModules` in your `nuxt.config`
- Configure loaded icons/whole sets

- See more details about usage below
```js
{
  buildModules: [
    '@nuxtjs/fontawesome',
    // or like this
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      suffix: true,
      icons: {
        // list the icons you want to add, not listed icons will be tree-shaked
        free: [
          'faHome',
          'faHeart'
        ],
        // include all icons. But dont do this.
        regular: true
      }
    }]
  ],
  // alternative place for config
  fontawesome: {
    icons: [
      ...
    ]
  }
}
````
## Module options

### `component`
- Default: `font-awesome-icon`
Change component name. For example, `fa` to use like
`<fa ... />`

### `useLayers`
- Default: `true`
Whether to add the layers component. Name of the component will be `${options.component}-layers` like
`<fa-layers ... />`

### `useLayersText`
- Default: `true`
Whether to add the layers-text component. Name of the component will be the `${options.component}-layers-text` like
`<fa-layers-text ... />`

### `icons`

Which icons you will use. FontAwesome [currently](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) supports 5 icon styles of which 2 are freely available.

This option is an object with the style names as property and an array with all icon names you wish to use from those styles

```js
  icons: {
    solid: [ 'faHome', ... ],
    regular: [ ... ],
    light: [ ... ],
    duotone: [ ... ],
    brands: [ ...]
  }
```

Although not recommended, you can use `true` to include the full icon set:
```js
  icons: {
    solid: true
  }
```

### `suffix`
- Default: `false`

Boolean whether to append `-icon` to the icon component name. This option exists as the component name option is also used for the layer components and you might not want to add '-icon' to those

```js
  // config
  component: 'fa',
  suffix: true

  // usage
  <fa-icon />
  <fa-layer />

```
```js
  // config
  component: 'fa-icon',
  suffix: false

  // usage
  <fa-icon />
  <fa-icon-layer />
```

### `imports` _deprecated_
Import icons/whole sets from chosen packages. This is the old configuration and will likely be removed in a future version. Use [`icons`](#icons) instead
- Default: `[]`, no icons will be imported here (see below, can be loaded later inside .vue file)
  - `set` - path to node package for import, like `@fortawesome/free-solid-svg-icons`
  - `icons` - array of icons to import `['faAdjust', 'faArchive']`.

```js
  imports: [
    {
      set: '@fortawesome/free-solid-svg-icons',
      icons: ['faHome']
    }
  ]
```

## Usage
You can find more details under `example` folder. Also please see [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) for additional reference

- Ensure you have installed an icon package
`yarn add @fortawesome/free-solid-svg-icons -D`
- and have added the module configuration to your `nuxt.config.js`

Default component names are:
- `<font-awesome-icon>`
- `<font-awesome-layers>`
- `<font-awesome-layers-text>`

With `component` option set, `-layers` and `-layers-text` suffixes will be appended (see example below)
```js
// nuxt.config
  fontawesome: {
    icons: {
      solid: ['faHome'],
      regular: ['faAdjust']
    }
  },
```

- Use global icons:
```vue
<template>
  <div>
    <font-awesome-icon :icon="['fas', 'adjust']"  />
    <font-awesome-icon icon="dollar-sign"  style="font-size: 30px"/>
    <font-awesome-icon icon="cog"/>

    <font-awesome-layers class="fa-4x">
      <font-awesome-icon icon="circle"/>
      <font-awesome-icon icon="check" transform="shrink-6" :style="{ color: 'white' }"/>
    </font-awesome-layers>

    <font-awesome-layers full-width class="fa-4x">
      <font-awesome-icon icon="calendar"/>
      <font-awesome-layers-text transform="shrink-8 down-3" value="27" class="fa-inverse" />
    </font-awesome-layers>
  </div>
</template>

<script></script>
```

- Use locally imported icons
```vue
<template>
    <div>
        <fa-layers full-width class="fa-4x">
          <fa :icon="fas.faCircle"/>
          <fa-layers-text transform="shrink-12" value="GALSD" class="fa-inverse" />
        </fa-layers>

        <fa :icon="fas.faAddressBook"  />
        <fa :icon="faGithub" />
    </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    fas () {
       return fas // NOT RECOMMENDED
    },
    faGithub () {
       return faGithub
    }
  },
}
</script>
```

## License

[MIT License](./LICENSE)

This module was forked from the (font) awesome module created by @vaso2: https://github.com/vaso2/nuxt-fontawesome

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/fontawesome/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/fontawesome

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/fontawesome.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/fontawesome

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/fontawesome.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/fontawesome

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/fontawesome.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/fontawesome

[license-src]: https://img.shields.io/npm/l/@nuxtjs/fontawesome.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/fontawesome
