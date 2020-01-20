# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
