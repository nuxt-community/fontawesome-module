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
    <fa-layers full-width class="fa-4x">
      <fa :icon="fas.faCircle"/>
      <fa-layers-text transform="shrink-12" value="GALSD" class="fa-inverse" />
    </fa-layers>
    <fa :icon="fas.faAddressBook"  />
    <fa :icon="faGithub" />
  </div>
</template>

<script>
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'

  export default {
    computed: {
      fas () {
        return fas
      },
      faGithub () {
        return faGithub
      }
    }
  }
</script>

<style>
</style>
