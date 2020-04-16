<template>
  <div>
    <h3>Productos</h3>
    <v-list dark>
      <template v-for="(item, key) in $productsAndServices.products">
        <v-list-item :key="key">
          <v-list-item-avatar>
            <v-img :src="item.image"></v-img>
          </v-list-item-avatar>
          <a :href="item.link">{{ item.title }}</a>
        </v-list-item>
        <v-divider v-if="key < ($productsAndServices.products.length - 1)" :key="key" />
      </template>
    </v-list>
    <h3 style="margin-top: 2em;">Servicios</h3>
    <v-list dark>
      <template v-for="(item, key) in $productsAndServices.services">
        <v-list-item :key="key">
          <v-list-item-avatar>
            <v-img :src="item.image"></v-img>
          </v-list-item-avatar>
          <a :href="item.link">{{ item.title }}</a>
        </v-list-item>
        <v-divider v-if="key < ($productsAndServices.services.length - 1)" :key="key" />
      </template>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class CompanyInfo extends Vue {}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
h3 {
  color: #fff;
  margin-bottom: 2em;
}
</style>