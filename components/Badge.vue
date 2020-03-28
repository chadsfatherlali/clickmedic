<template>
  <v-badge
    color="red"
    :content="size"
  >
    <v-icon>
      mdi-basket-fill
    </v-icon>
  </v-badge>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Badge extends Vue {
  $firebase:any = this['$firebase']
  $store:any = this['$store']
  size:number = 0

  mounted () {
    this.$firebase.firestore().collection('cart').where('owner', '==', this.$store.state.user.uid).onSnapshot((docs:any) => {
      this.size = docs.size
    })
  }
}
</script>