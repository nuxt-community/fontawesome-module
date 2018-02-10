# Nuxt Font Awesome 5
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-vue-material/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-fontawesome)
[![npm](https://img.shields.io/npm/dt/nuxt-vue-material.svg?style=flat-square)](https://npmjs.com/package/nuxt-fontawesome)

> Plugin to join nuxt and Font Awesome 5 icons using official [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) plugin. 
Supports ES6 imports with tree shaking and fix of initial load flickering

## Setup
- Add dependencies using npm to your project <br/>
`npm i nuxt-fontawesome` <br/>
Also it may be needed to explicitly install fontawesome, if your webpack build fails<br/>
`npm i @fortawesome/fontawesome @fortawesome/vue-fontawesome`
- Configure `nuxt.config.js`:
  - Add `nuxt-fontawesome` to `modules` section
  - Configure loaded icons/whole sets
  - Setup tree shaking 
  
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
          set: '@fortawesome/fontawesome-free-solid'
        },
        //import 2 icons from set 
        // please note this is PRO set in this example, 
        // you must have it in your node_modules to actually import
        {
          set: '@fortawesome/fontawesome-pro-regular',
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
  //Tree shaking, you can omit this, but then webpack will include whole package  
  build: {
    extend (config) {
      config.resolve.alias['@fortawesome/fontawesome-pro-regular$'] = '@fortawesome/fontawesome-pro-regular/shakable.es.js'
      config.resolve.alias['@fortawesome/fontawesome-free-solid'] = '@fortawesome/fontawesome-free-solid/shakable.es.js'
    }
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
  - `set` - path to node package for import, like `@fortawesome/fontawesome-free-solid`
  - `icons` - array of icons to import `['faAdjust', 'faArchive']`. If empty, whole set will be loaded


## Usage
Please see [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) for additional reference

- Add needed dependency, like <br/>
`npm i @fortawesome/fontawesome-free-solid`
- Add configuration like this in `nuxt.config.js`
```js
{
  fontAwesome: {
    packs: [
        {
          set: '@fortawesome/fontawesome-pro-regular',
          icons: ['faAdjust']
        },
        {
          package: '@fortawesome/fontawesome-free-solid'
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
        <fa :icon="solid.faAddressBook"  />
        <fa :icon="icon" />
    </div>
</template>
<script>
  import solid from '@fortawesome/fontawesome-free-solid'
  import {faGithub} from '@fortawesome/fontawesome-free-brands'
  export default {
    computed: {
      solid () {
        return solid
      },
      icon () {
        return faGithub
      }
    },
  }
  </script>
```
## License
MIT, made by [**Galley Web Development**](https://galley.online/)
