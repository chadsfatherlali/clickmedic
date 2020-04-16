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
                  Oferta Odonto click {{ $dinero(item.precioOferta) }}
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
                color="primary"
                @click="addProduct(item)"
                rounded
              >
                <v-icon>mdi-plus</v-icon>&nbsp;
                Añadir producto
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="dialog"
      max-width="374"
    >
      <v-card
        v-if="!checkProductIsEmpty(product)"
      >
        <v-img
          height="250"
          :src="product.imagenProducto[0].url"
        />
        <v-card-title
          style="margin-bottom: 1em;"
          class="headline grey lighten-2"
          primary-title
        >
          {{ product.producto }}
        </v-card-title>
        <v-card-text>
          <v-form ref="cartForm">
            <v-select
              v-model="product.city"
              :items="product.ciudades"
              label="Elija la ciudad"
              outlined
            />
            <v-slider
              v-model="product.quantity"
              label="Cantidad"
              max="10"
              min="1"
              step="1"
              ticks="always"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="product.quantity"
                  hide-details
                  single-line
                  type="number"
                  style="width: 40px"
                />
              </template>
            </v-slider>
            <v-btn
              style="margin-top: 2em;"
              block
              color="primary"
              @click="sendToCart({
                owner: $store.state.user.uid,
                id: product.id,
                product: product.producto,
                quantity: product.quantity,
                city: product.city,
                price: product.quantity * product.precioOferta,
                image: product.imagenProducto[0].url
              })"
            >
              Añadir a carrito
              <v-icon>mdi-cart-plus</v-icon>
            </v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <Badge /> 
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Badge from '../../components/Badge.vue'
import _isEmpty from 'lodash/isEmpty'

@Component ({
  async asyncData ({ app, store}) {
    try {
      await store.dispatch('setProducts', {
        db: app.context.$flamelink,
        schemaKey: 'productosOdontoclick'
      })
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
  },
  components: {
    Badge
  }
})

export default class OdontologiaPage extends Vue {
  $firebase:any = this['$firebase']
  $store:any = this['$store']
  dialog:boolean = false
  product:any = {}
  existProduct:any = {}

  async sendToCart (product:any) {
    console.log(product)

    if (!_isEmpty(this.existProduct)) {
      this.$firebase.firestore().collection('cart').doc(this.existProduct.fsId).update({
        price: product.price,
        quantity: product.quantity,
        city: product.city
      })
        .then((res:any) => {
          const _form = this.$refs['cartForm'] as any
      
          _form.reset()
          
          this.dialog = false
        })
        .catch((err:any) => {
          console.log(err)
        })
    } else {
      this.$firebase.firestore().collection('cart').add(product)
        .then((res:any) => {
          const _form = this.$refs['cartForm'] as any
      
          _form.reset()
          
          this.dialog = false
        })
        .catch((err:any) => {
          console.log(err)
        })
    }
  }
  checkProductIsEmpty (product:any) {
    return _isEmpty(product)
  }
  async addProduct (product:any) {
    if (this['$store'].state.user) {
      this.product = product

      const existProductOnCart:any = await this.$firebase.firestore().collection('cart').where('id' , '==', product.id).where('owner', '==', this.$store.state.user.uid).get()

      if (existProductOnCart.size > 0) {
        let _product = existProductOnCart.docs[0].data()

        _product.fsId = existProductOnCart.docs[0].id

        this.existProduct = _product
        this.product.city = _product.city
        this.product.quantity = _product.quantity
      }

      this.dialog = true
    } else {
      this['$router'].push({
        path: '/login',
         query: { redirect: this['$route'].path } 
      })
    }
  }
}
</script>

<style>
.parallax-fix .v-parallax__image {
  top: 0 !important;
  transform: translate(-50%, -13%) !important;
  color: red;
}
</style>