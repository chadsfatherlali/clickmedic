<template>
  <div>
    <v-parallax
      src="https://firebasestorage.googleapis.com/v0/b/clickmedic-ecuador.appspot.com/o/flamelink%2Fmedia%2Fmedical-equipment-4099430_1280.jpg?alt=media&token=2e0bbea7-adc6-4673-8d9d-08d764561983" 
    />
    <v-container>
      <h2>PRODUCTOS</h2>
      <v-row>
        <v-col v-for="(product, key) in $productsAndServices.products" :key="key" md="4" cols="12">
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="product.image"
            />
            <v-card-text class="text--primary">
              <h3>{{ product.title }}</h3>
              <p>
                Una pequeña descripción
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                rounded
                :href="product.link"
              >
                <v-icon>mdi-eye</v-icon>&nbsp;
                Ver
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h2>SERVICIOS</h2>
      <v-row>
        <v-col v-for="(service, key) in $productsAndServices.services" :key="key" md="4" cols="12">
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="service.image"
            />
            <v-card-text class="text--primary">
              <h3>{{ service.title }}</h3>
              <p>
                Una pequeña descripción
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                rounded
                :href="service.link"
              >
                <v-icon>mdi-eye</v-icon>&nbsp;
                Ver
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  async asyncData ({ redirect }) {
    redirect(302, '/sitio-bajo-construccion')

    return {
      items: [
        {
          text: 'Home',
          disabled: true
        }
      ]
    }
  }
})

export default class HomePage extends Vue {}
</script>

<style>
h2 {
  margin-top: 2em;
}
h2, h3 {
  color: #1976d2
}
</style>
