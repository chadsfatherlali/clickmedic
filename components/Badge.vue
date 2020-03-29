<template>
  <v-fab-transition v-if="$store.state.user">
    <v-btn
      :href="`/cart/${$store.state.user.uid}`"
      rel="nofollow"
      color="primary"
      dark
      large
      fixed
      bottom
      right
      fab
    >
      <template v-if="!showBadge">
        <v-progress-circular
          indeterminate
          color="red"
        />
      </template>
      <template v-else>
        <v-badge
          :content="size"
          color="red"
        >
          <v-icon>
            mdi-basket-fill
          </v-icon>
        </v-badge>
      </template>
    </v-btn>
  </v-fab-transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Badge extends Vue {
  showBadge = false
  $firebase:any = this['$firebase']
  $store:any = this['$store']
  size:number = 0

  mounted () {
    const intervalId:any = setInterval(() => {
      if (this.$store.state.user) {
        this.$firebase.firestore().collection('cart').where('owner', '==', this.$store.state.user.uid).onSnapshot((docs:any) => {
          this.showBadge = true
          this.size = docs.size
        })

        clearInterval(intervalId)
      }
    }, 1000)
  }
}
</script>