import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
fontawesome.config = {
  autoAddCss: false,
}

<% options.imports.forEach(({set, icons}) => { %>
  <% if (icons) { %>
    import  { <%=icons.join(',')%> } from '<%=set%>'
    fontawesome.library.add(<%=icons.join(',')%>)
    <% } else { %>
    <% name = set.replace(/[^a-zA-z]/g, "") %>
    import <%=name%> from '<%=set%>'
    fontawesome.library.add(<%=name%>)
    <% } %>
<% }) %>

Vue.component('<%=options.component%>', FontAwesomeIcon)
