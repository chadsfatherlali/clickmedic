<template>
  <div>
    <h3>Información de contacto</h3>
    <v-list dark>
      <v-list-item>
        <v-icon>mdi-map-marker</v-icon>&nbsp;&nbsp;
        Av. de los Estadios S/N
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-icon>mdi-cellphone</v-icon>&nbsp;&nbsp;
        0961522800
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-icon>mdi-email</v-icon>&nbsp;&nbsp;
        gerenciacomercial@clickmedic.ec 
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component
export default class CompanyInfo extends Vue {}
</script>

<style scoped>
h3 {
  color: #fff;
  margin-bottom: 2em;
}
</style>