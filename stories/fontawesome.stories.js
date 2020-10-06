import { library } from '@fortawesome/fontawesome-svg-core'
import IconsList from './Iconslist.vue'
/**
 * Gets icons from library with ["fas", "edit", "fasEdit"] shape
 *
 * @return array
 */
const getLibIcons = (library) => {
  const data = library.definitions

  const toPascalCase = (str) => {
    const camelCase = str.replace(/-([a-z])/g, val => val[1].toUpperCase())
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
  }

  return (Object.keys(data).map(key =>
    Object.keys(data[key]).map(value => [key, value, key + toPascalCase(value)])
  )).reduce((current, next) => current.concat(next), [])
}

export default {
  title: 'Module/Font Awesome'
}

export const Icons = () => ({
  components: { IconsList },
  data () {
    return {
      icons: getLibIcons(library)
    }
  },
  template: '<IconsList :icons="icons" />'
})
