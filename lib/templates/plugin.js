import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
fontawesome.config = {
  autoAddCss: false,
}

<% options.imports.forEach(({set, icons}) => { %>
<% name = set.replace(/[^a-zA-z]/g, "") %>
  <% if (icons) { %>
    <% icons.forEach((icon) => { %>
      import  { <%=icon%> as <%=name%>_<%=icon%> } from '<%=set%>'
      fontawesome.library.add(<%=name%>_<%=icon%>)
    <% }) %>
  <% } else { %>
    import <%=name%> from '<%=set%>'
    fontawesome.library.add(<%=name%>)
  <% } %>
<% }) %>

Vue.component('<%=options.component%>', FontAwesomeIcon)