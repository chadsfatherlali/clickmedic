<template>
  <v-list-item-title v-if="mobile && $store.state.user" @click="logout" style="color: #ff5252;">
    <v-icon>mdi-logout</v-icon>&nbsp;
    {{ $store.state.user.email }}
  </v-list-item-title>
  <v-list-item-title v-else-if="mobile && !$store.state.user">
    <v-icon>mdi-login</v-icon>&nbsp;
    Login
  </v-list-item-title>
  <v-btn color="error" v-else-if="$store.state.user" @click="logout">
    <v-icon>mdi-logout</v-icon>&nbsp;
    Logout {{ $store.state.user.email }}
  </v-btn>
  <v-btn color="primary" v-else href="/login">
    <v-icon>mdi-login</v-icon>&nbsp;
    Login
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UserStatus extends Vue {
  @Prop({ type: Boolean }) readonly mobile!:boolean

  $firebase:any = this['$firebase']
  user:any = null
  
  logout () {
    this.$firebase.auth().signOut()
  }
  mounted () {    
    this.$firebase.auth().onAuthStateChanged((user:any) => {
      if (user) {
        this.$store.commit('setUser', user)
      } else [
        this.$store.commit('setUser', null)
      ]
    })
  }
}
</script>
