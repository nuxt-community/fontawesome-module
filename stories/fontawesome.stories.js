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
  title: 'Modules/Font Awesome',
  argTypes: {
    size: {
      name: 'Icons Size',
      control: { type: 'select', options: ['fa-1x', 'fa-2x', 'fa-3x', 'fa-4x', 'fa-5x'] }
    },
    onClick: { action: 'clicked' }
  }
}

export const Icons = () => ({
  props: {
    size: {
      type: String,
      default: 'fa-2x'
    },
    onClick: {
      type: Function,
      default: () => () => {}
    }
  },
  components: { IconsList },
  data () {
    return {
      icons: getLibIcons(library)
    }
  },
  template: '<IconsList :icons="icons" :size="size" :onClick="onClick" />'
})

Icons.args = {
  size: 'fa-2x'
}
