<template>
  <div>
    <h3 id="contactanos">Formulario de contacto</h3>
    <v-form
      ref="form"
      v-model="valid"
      dark
    >
      <v-text-field
        v-model="contactForm.name"
        label="Nombre"
        required
        outlined
        dark
      />
      <v-text-field
        v-model="contactForm.email"
        label="E-mail"
        required
        outlined
        dark
      />
      <v-text-field
        v-model="contactForm.phone"
        label="Teléfono"
        required
        outlined
        dark
      />
      <v-textarea
        v-model="contactForm.message"
        label="Mensaje"
        required
        outlined
        dark
      />
       <v-btn
        :disabled="!valid"
        color="primary"
        rounded
      >
        Enviar
      </v-btn>
      <v-btn
        :disabled="!valid"
        color="warning"
        rounded
      >
        Limpiar
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ContacForm extends Vue {
  valid:boolean = true
  contactForm:any = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
}
</script>

<style scoped>
h3 {
  color: #fff;
  margin-bottom: 2em;
}
</style>