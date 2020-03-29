<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="6" cols="12">
          <h3>Detalle de sus productos a comprar</h3>
          <v-card 
            v-for="(product, key) in $store.state.cartItems"
            :key="key"
            style="margin-bottom: 1em;"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{ product.city }}</div>
                <v-list-item-title class="headline mb-1">
                  {{ product.product }} 
                  <small>(x {{ product.quantity }})</small>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <b>Precio:</b> {{ $dinero(product.price) }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              >
                <img style="object-fit: cover;" src="https://storage.googleapis.com/clickmedic-ecuador.appspot.com/flamelink/media/Blanqueamiento%20OdontoClick.jpg?GoogleAccessId=firebase-adminsdk-zhioe%40clickmedic-ecuador.iam.gserviceaccount.com&Expires=16725225600&Signature=ELQdNhY4DsBAHkcd1uISWz6dTCnV00IVypvKKI8H0%2FCrwMyEHxwa744yyU0lGZQnzgrC68Iz5czBHBatrnL5EstZ3D8rJQ1Io%2B1VpkUdy1tVPAU%2F7sK7t8F4%2Fw8kBzn053KQGIbQ6RQOfC4mLY6lRK7RpsdpEukN21FebE4lCOiq%2BWvLRtbfolSHnseY7cCFTJcNqAlb2SXfz9MZvUivGk8o8euAuWs19UusnlAL9p1iHNG1Q4%2BZ4Yhv3VHTRQoZxmr1JwOYltfY1Bzxwa02UJx0N7VwIaF8i0OQoKgDUOyDpK%2BXAgH6P9OsAzdp%2B5jlqZZxuzgQbrfrPqOLCbkFtA%3D%3D">
              </v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
              <v-btn color="primary" text>Modificar</v-btn>
              <v-btn color="error" text>Eliminar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="6" cols="12">
          <div style="position: sticky; top: 64px;">
            <h3>Por favor ingrese la información de su tarjeta</h3>
            <form id="kushki-pay-form" action="confirm" method="post">
              <input type="hidden" name="cart_id" value="123">
            </form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import _each from 'lodash/each'
import _reduce from 'lodash/reduce'

declare global {
    interface Window {
        KushkiCheckout:any
    }
}

@Component ({
  async validate ({ app, store, params }) {
    try {
      const items:any = []
      const cart:any = await app.context.$firebaseSer.firestore().collection('cart').where('owner', '==', params.id).get()
      
      _each(cart.docs, (item) => {
        items.push(item.data())
      })

      store.commit('setCartItems', items)

      return cart
    } catch (err) {
      console.log(err)
      
      return false
    }
  }
})
export default class OdontologiaPage extends Vue {
  mounted () {
    const kp:any = window.KushkiCheckout

    let  amount:number = 0

    _each(this['$store'].state.cartItems, (item) => {
      amount = amount + parseFloat(item.price) 
    })

    const kushki = new kp({
      form: 'kushki-pay-form',
      merchant_id: 'd8a98ed9dd1442daa62a2003639b1af6',
      amount: amount,
      currency: 'USD',
      payment_methods:["credit-card"],
      inTestEnvironment: true, 
      regional: false
    })
  }
}
</script>

<style>
h3 {
  margin-bottom: 2em;
}
</style>
