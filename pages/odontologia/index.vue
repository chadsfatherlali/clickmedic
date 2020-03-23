<template>
  <div>
    <v-parallax
      class="parallax-fix"
      src="https://firebasestorage.googleapis.com/v0/b/clickmedic-ecuador.appspot.com/o/flamelink%2Fmedia%2Fdoctor-1149149_1280.jpg?alt=media&token=04228085-34ab-4aeb-b401-9825b832a796" 
    >
      <v-row 
        align="center"
      >
        <v-col md="6" cols="12">
          <h1 style="color: #1976d2; margin-bottom: .5em;">ODONTO CLICK</h1>
          <p style="color: black; text-align: justify;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra, massa id luctus aliquet, eros purus interdum justo, non cursus turpis ipsum non orci. Suspendisse laoreet molestie dolor, volutpat rhoncus ante tincidunt a. Sed imperdiet felis eu metus placerat ullamcorper. Mauris facilisis dui augue, eu congue augue ultricies ut. Donec id pharetra odio. Nullam venenatis dolor eget condimentum accumsan. Nunc faucibus consequat turpis eu convallis.
          </p>
          <v-btn rounded color="primary">
            Lorem Ipsum
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <v-breadcrumbs large :items="items" divider=">"></v-breadcrumbs>
    <v-container>
      <v-row>
        <v-col v-for="(item, itemKey) in $store.state.products" :key="itemKey" md="6" cols="12">
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.imagenProducto[0].url"
            >
              <v-card-title>{{ item.producto }}</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <p>{{ item.detalle }}</p>
              <p>{{ item.restricciones }}</p>
            </v-card-text>
            <v-card-text>
              <p>
                <v-chip outlined>
                  <v-icon left>mdi-clock</v-icon>
                  Horas de duracion {{ item.horasDeDuracion }}
                </v-chip>
              </p>
              <p>
                <v-chip color="red" outlined>
                  <v-icon left>mdi-currency-usd-circle</v-icon>
                  <span style="text-decoration:line-through;">P.v.p.: {{ $dinero(item.pvp) }}</span>
                </v-chip>
              </p>
              <p>
                <v-chip color="green" outlined>
                  <v-icon left>mdi-currency-usd-circle</v-icon>
                  Oferta Odonto click {{ $dinero(item.precioOdontoClick) }}
                </v-chip>
              </p>
              <p>
                <v-chip outlined>
                  <v-icon left>mdi-phone</v-icon>
                  Teléfono {{ item.telefono }}
                </v-chip>
              </p>
            </v-card-text>
            <v-divider class="mx-4" />
            <v-card-title>Ciudades</v-card-title>
             <v-card-text>
              <v-chip-group column>
                <v-chip v-for="(city, cityKey) in item.ciudades" :key="cityKey" outlined>{{ city }}</v-chip>
              </v-chip-group>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="blue"
                text
              >
                Añadir producto
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component ({
  async asyncData ({ app, store }) {
    try {
      await store.dispatch('setProducts', app.context.$flamelink)
    } catch (err) {
      console.log(err)
    }

    return {
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Odontología',
          disabled: true
        },
      ]
    }
  }
})

export default class HomaPage extends Vue {}
</script>

<style>
.parallax-fix .v-parallax__image {
  top: 0 !important;
  transform: translate(-50%, -13%) !important;
  color: red;
}
</style>