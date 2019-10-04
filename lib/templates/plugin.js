import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  <%= options.addLayers ? 'FontAwesomeLayers,' : '' %>
  <%= options.addLayersText ? 'FontAwesomeLayersText,' : '' %>
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

<%
const imports = []
const iconsToAdd = []
options.imports.forEach(({set, icons}) => {
  name = set.replace(/[^a-zA-z]/g, "")

  const iconImports = []
  icons.forEach((icon) => {
    iconImports.push(`${icon} as ${name}_${icon}`)
    //imports.push(`import { ${icon} as ${name}_${icon} } from '${set}/${icon}'`)
    iconsToAdd.push(`library.add(${name}_${icon})`)
  })

  imports.push(`import {\n  ${iconImports.join(',\n  ')}\n} from '${set}'`)
})
%>

<%= imports.join('\n\n') %>

<%= iconsToAdd.join('\n') %>

config.autoAddCss = false

Vue.component('<%=options.component%><%=options.suffix%>', FontAwesomeIcon)
<%= options.addLayers ? `Vue.component('${options.component}-layers', FontAwesomeLayers)` : '' %>
<%= options.addLayersText ? `Vue.component('${options.component}-layers-text', FontAwesomeLayersText)` : '' %>
