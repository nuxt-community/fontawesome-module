import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  <%= options.useLayers ? 'FontAwesomeLayers,' : '' %>
  <%= options.useLayersText ? 'FontAwesomeLayersText,' : '' %>
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

<%
const freeStyles = ['solid', 'regular', 'brands']
const imports = []
const iconsToAdd = []

function addIcons(iconStyles, pro) {
  if (!iconStyles) {
    return
  }

  for (const style in iconStyles) {
    let icons = iconStyles[style]

    if (icons === true) {
      icons = [`fa${style[0]}`]
    }

    if (!icons || !icons.length) {
      continue
    }

    const styleIcons = icons.map(icon => {
      const alias = `fa${style[0]}_${icon}`
      iconsToAdd.push(alias)
      return `${icon} as ${alias}`
    })

    const pkgName = `${!pro || freeStyles.includes(style) ? 'free': 'pro'}-${style}-svg-icons`
    imports.push(`import {\n  ${styleIcons.join(',\n  ')}\n} from '@fortawesome/${pkgName}'`)
  }
}

addIcons(options.icons)
addIcons(options.proIcons, true)

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
}
%>

<% if (iconsToAdd.length) { %>
<%= imports.join('\n\n') %>

library.add(
  <%= iconsToAdd.join(',\n  ') %>
)
<% } %>

config.autoAddCss = false

Vue.component('<%=options.component%><%= options.suffix || ''%>', FontAwesomeIcon)
<%= options.useLayers ? `Vue.component('${options.component}Layers', FontAwesomeLayers)` : '' %>
<%= options.useLayersText ? `Vue.component('${options.component}LayersText', FontAwesomeLayersText)` : '' %>
