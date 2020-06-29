<template>
  <div id="under-construction">
    <h1>Sitio bajo construcción</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  layout: 'underConstruction'
})
export default class UnderConstruction extends Vue {}
</script>

<style scoped>
#under-construction {
  margin: auto;
  text-align: center;
  background-image: url('/underconstruction.jpg');
  background-size: contain;
  width: 50%;
  height: 100%;
  position: relative;
}
</style>