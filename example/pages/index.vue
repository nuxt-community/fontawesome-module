<template>
  <div>
    <fa icon="cog" />
    <fa-layers class="fa-4x">
      <fa icon="circle" />
      <fa icon="check" transform="shrink-6" :style="{ color: 'white' }" />
    </fa-layers>
    <fa-layers full-width class="fa-4x">
      <fa icon="calendar" />
      <fa-layers-text transform="shrink-8 down-3" value="27" class="fa-inverse" />
    </fa-layers>

    <p style="font-size: 3rem">
      We <fa icon="heart" />
      <fa :icon="fab.faJs" />, <fa :icon="['fab', 'node']" /> & <fa :icon="['fab', 'vuejs']" />
    </p>
  </div>
</template>

<script>
import { faJs } from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    fab () {
      return {
        faJs
      }
    }
  }
}
</script>
