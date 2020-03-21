# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.2](https://github.com/nuxt-community/fontawesome-module/compare/v1.1.1...v1.1.2) (2020-03-21)


### Bug Fixes

* set default component according to readme ([19559a5](https://github.com/nuxt-community/fontawesome-module/commit/19559a565cf323cfc77e52c58d959ef4f2e7bd76))

### [1.1.1](https://github.com/nuxt-community/fontawesome-module/compare/v1.1.0...v1.1.1) (2020-02-08)


### Bug Fixes

* use unique imports ([e0a09dd](https://github.com/nuxt-community/fontawesome-module/commit/e0a09dd735d9052b0e5a96b421ac80cad52d6977))

## [1.1.0](https://github.com/nuxt-community/fontawesome-module/compare/v1.0.1...v1.1.0) (2020-02-08)


### Features

* add proIcons config option for pro imports ([ae483be](https://github.com/nuxt-community/fontawesome-module/commit/ae483be1c44dcd9156092b358f286b16a2db4566))


### Bug Fixes

* only log deprecation warning in dev mode ([72c9170](https://github.com/nuxt-community/fontawesome-module/commit/72c9170301c4eea5d8259113227000672807ba07))

### [1.0.1](https://github.com/nuxt-community/fontawesome-module/compare/v1.0.0...v1.0.1) (2020-01-20)


### Bug Fixes

* always print icons ([83b2924](https://github.com/nuxt-community/fontawesome-module/commit/83b29245e40e71975397aa1189318c39c461824a))

<a name="0.4.0"></a>
## 0.4.0 (2018-12-24)
- Added support for <font-awesome-layers> and <font-awesome-layers-text>
- Working example added
- Tests added
<a name="0.3.0"></a>
## 0.3.0 (2018-06-28)
Updated due to fontawesome 5.1, which has some breaking changes.
#### 0.2 to 0.3 upgrade
Please refer to vue-fontawesome [UPGRADING](https://github.com/FortAwesome/vue-fontawesome/blob/master/UPGRADING.md) guide and use current version of README docs

General differences:
- Fontawesome now has no default imports, you have to specify `icons: ['fas']` to import whole set.
- Packages changed. You'll need to update your package.json file with the renamed packages and new versions.
- Improved tree shaking support, no need to setup it with build and `shakable.es.js'`, so remove this block

<a name="0.0.1"></a>
## 0.0.1 (2018-02-10)
Initial commit
