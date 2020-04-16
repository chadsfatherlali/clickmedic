<template>
  <v-app>
    <v-app-bar
      app
      fixed
      height="100"
      style="background-color: white;"
    >
      <v-toolbar-title>
        <a href="/" class="name">
          <img src="/clickmedic.png">
        </a>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(item, key) in $store.state.menu"
          :key="key"
          :href="item.link"
          text
        >
          {{ item.text }}
        </v-btn>
        <UserStatus />
      </v-toolbar-items>
      <v-menu offset-y>
        <template  v-slot:activator="{on}">
          <v-app-bar-nav-icon v-on="on" class="hidden-md-and-up" />
        </template>
        <v-list>
          <v-list-item v-for="(item, key) in $store.state.menu" :key="key">
            <v-list-item-title @click="goTo(item.link)">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <UserStatus :mobile="true" />
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer class="theme--dark">
      <v-container>
        <v-row>
          <v-col md="4" cols="12">
            <ProductsAndServicesFooter />
          </v-col>
          <v-col md="4" cols="12">
            <CompanyInfo />
          </v-col>
          <v-col md="4" cols="12">
            <ContactForm />
          </v-col> 
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserStatus from '../components/UserStatus.vue'
import ContactForm from '../components/ContactForm.vue'
import CompanyInfo from '../components/CompanyInfo.vue'
import ProductsAndServicesFooter from '../components/ProductsAndServicesFooter.vue'

@Component ({
  components: {
    UserStatus,
    ContactForm,
    CompanyInfo,
    ProductsAndServicesFooter
  }
})
export default class LoginPage extends Vue {
  goTo (link:any) {
    window.top.location = link
  }
}
</script>

<style>
@media (min-width: 1904px) {
  .container {
    max-width: 1185px;
  }
}
@media (min-width: 340px) {
  .v-toolbar__title a img {
    height: 80px !important;
  }
}
.v-toolbar__title a img {
  height: 100px;
}
.v-footer {
  min-height: 500px;
}
</style>