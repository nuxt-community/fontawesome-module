import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  <%= options.useLayers ? 'FontAwesomeLayers,' : '' %>
  <%= options.useLayersText ? 'FontAwesomeLayersText,' : '' %>
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

<%
const styles = [
  'solid',
  'regular',
  'light',
  'duotone',
  'brands'
]

const freeStyles = ['solid', 'brands']
const imports = []
const iconsToAdd = []

for (const style in options.icons) {
  let icons = options.icons[style]

  if (icons === true) {
    icons = [`fa${style[0]}`]
  }

  if (!icons || !icons.length || !styles.includes(style)) {
    continue
  }

  const styleIcons = icons.map(icon => {
    const alias = `fa${style[0]}_${icon}`
    iconsToAdd.push(alias)
    return `${icon} as ${alias}`
  })

  const pkgName = `${freeStyles.includes(style) ? 'free': 'pro'}-${style}-svg-icons`
  imports.push(`import {\n  ${styleIcons.join(',\n  ')}\n} from '@fortawesome/${pkgName}'`)
}

if (options.imports) {
  options.imports.forEach(({set, icons}) => {
    name = set.replace(/[^a-zA-z]/g, "")

    const iconImports = []
    icons.forEach(icon => {
      const alias = `${name}_${icon}`
      iconsToAdd.push(alias)
      iconImports.push(`${icon} as ${alias}`)
    })

    imports.push(`import {\n  ${iconImports.join(',\n  ')}\n} from '${set}'`)
  })
%>

<%= imports.join('\n\n') %>

library.add(
  <%= iconsToAdd.join(',\n  ') %>
)
<% } %>

config.autoAddCss = false

Vue.component('<%=options.component%><%= options.suffix || ''%>', FontAwesomeIcon)
<%= options.useLayers ? `Vue.component('${options.component}Layers', FontAwesomeLayers)` : '' %>
<%= options.useLayersText ? `Vue.component('${options.component}LayersText', FontAwesomeLayersText)` : '' %>
