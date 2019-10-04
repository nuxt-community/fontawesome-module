<template>
  <div>
    <fa icon="cog"/>
    <fa-layers class="fa-4x">
      <fa icon="circle"/>
      <fa icon="check" transform="shrink-6" :style="{ color: 'white' }"/>
    </fa-layers>
    <fa-layers full-width class="fa-4x">
      <fa icon="calendar"/>
      <fa-layers-text transform="shrink-8 down-3" value="27" class="fa-inverse" />
    </fa-layers>
    <fa :icon="fab.faGithub" />
  </div>
</template>

<script>
  import { fab } from '@fortawesome/free-brands-svg-icons'

  export default {
    computed: {
      fab () {
        return fab
      }
    }
  }
</script>
