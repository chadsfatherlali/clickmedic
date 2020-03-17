<template>
  <v-row 
    align="center"
    justify="center"
  >
     <v-col
      cols=12
      md="4"
    >
      <section>
        <img 
          src="/clickmedic.png"
          style="width: 90%; height: auto;"
        >
        <h3 style="text-align: center;">Sitio bajo construcción</h3>
       </section>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component

export default class HomaPage extends Vue {}
</script>
