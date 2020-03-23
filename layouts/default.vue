<template>
  <v-app>
    <v-app-bar app fixed style="background-color: white;">
      <v-toolbar-title>
        <a href="/" class="name">
          <img src="/clickmedic.png" style="height: 60px; width: auto;">
        </a>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, key) in $store.state.menu" :key="key" text>
          {{ item.text }}
        </v-btn>
      </v-toolbar-items>
      <v-menu offset-y>
        <template  v-slot:activator="{on}">
          <v-app-bar-nav-icon v-on="on" class="hidden-md-and-up" />
        </template>
        <v-list>
          <v-list-item v-for="(item, key) in $store.state.menu" :key="key">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>
