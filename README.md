# Nuxt Font Awesome 5
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-fontawesome/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-fontawesome)
[![npm](https://img.shields.io/npm/dt/nuxt-fontawesome.svg?style=flat-square)](https://npmjs.com/package/nuxt-fontawesome)

> Plugin to join nuxt and Font Awesome 5 icons using official [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) plugin. 
Supports ES6 imports with tree shaking and fix of initial load flickering

## 0.2 to 0.3 upgrade
Updated due to release of fontawesome 5.1 with some breaking changes. Please refer to vue-fontawesome [UPGRADING](https://github.com/FortAwesome/vue-fontawesome/blob/master/UPGRADING.md) guide and use current version of README docs

General differences:
- Fontawesome now has no default imports, you have to specify `icons: ['fas']` to import whole set.
- Packages changed. You'll need to update your package.json file with the renamed packages and new versions.
- Improved tree shaking support, no need to setup it with build and `shakable.es.js'`, so remove this block

## Setup
- Add dependencies using npm to your project <br/>
`npm i nuxt-fontawesome` <br/>
Also it may be needed to explicitly install fontawesome, if your webpack build fails<br/>
`npm i @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome`
- Configure `nuxt.config.js`:
  - Add `nuxt-fontawesome` to `modules` section
  - Configure loaded icons/whole sets
  
- See more details about usage below
```js
{
  modules: [
    'nuxt-fontawesome',
    //OR like this
    ['nuxt-fontawesome', {
      component: 'fa', 
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        //import 2 icons from set 
        // please note this is PRO set in this example, 
        // you must have it in your node_modules to actually import
        {
          set: '@fortawesome/pro-regular-svg-icons',
          icons: ['faAdjust', 'faArchive']
        }
      ]
    }]
  ],
  //alternative place for config
  fontawesome: {
    imports: [
      ...
    ]
  }
}
````
## Module options

### `component`
Change component name. For example, `fa` to use like
`<fa ... />`
- Default: `font-awesome-icon`

### `imports`
Import icons/whole sets from chosen packages
- Default: `[]`, no icons will be imported here (see below, can be loaded later inside .vue file)
  - `set` - path to node package for import, like `@fortawesome/free-solid-svg-icons`
  - `icons` - array of icons to import `['faAdjust', 'faArchive']`.


## Usage
Please see [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) for additional reference

- Add needed dependency, like <br/>
`npm i @fortawesome/free-solid-svg-icons`
- Add configuration like this in `nuxt.config.js`
```js
{
  fontawesome: {
    imports: [
        {
          set: '@fortawesome/pro-regular-svg-icons',
          icons: ['faAdjust']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
    ],
  },
}
```
Then use
```vue
<template>
    <div>
        <font-awesome-icon :icon="['fas', 'adjust']"  />
        <font-awesome-icon icon="dollar-sign"  style="font-size: 30px"/>
    </div>
</template>
```

- Load and use directly in template. Component name changed in `nuxt.config.js` to `fa`
```js
fontawesome: {
  component: 'fa'
},
```

```vue
<template>
    <div>
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
         return fas
      },
      faGithub () {
         return faGithub
      }
    },
  }
  </script>
```
## License
MIT, made by [Galley Web Development](https://galley.online/)
