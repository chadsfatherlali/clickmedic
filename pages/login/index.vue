<template>
  <v-container>
    <v-row>
      <v-col md="6" cols="12">
        <h2>Iniciar Sesión</h2>
        <v-form
          ref="formLogin"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="formLogin.email"
            label="E-mail"
            required
            outlined
            prepend-inner-icon="mdi-email"
          />
          <v-text-field
            v-model="formLogin.password"
            label="Contraseña"
            type="password"
            required
            outlined
            prepend-inner-icon="mdi-onepassword"
          />
          <v-btn color="primary" rounded @click="login">Acceder</v-btn>
          <v-btn color="warning" rounded @click="clean('formLogin')">Limpiar</v-btn>
        </v-form>
      </v-col>
      <v-col md="6" cols="12">
        <h2>Registrarse</h2>
        <v-form
          ref="formRegister"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="formRegister.email"
            label="E-mail"
            required
            outlined
            prepend-inner-icon="mdi-email"
          />
          <v-text-field
            v-model="formRegister.password"
            label="Contraseña"
            type="password"
            required
            outlined
            prepend-inner-icon="mdi-onepassword"
          />
          <v-text-field
            v-model="formRegister.name"
            label="Nombres"
            required
            outlined
            prepend-inner-icon="mdi-account"
          />
          <v-text-field
            v-model="formRegister.surname"
            label="Apellidos"
            required
            outlined
            prepend-inner-icon="mdi-account"
          />
          <v-text-field
            v-model="formRegister.phone"
            label="Teléfono"
            required
            outlined
            prepend-inner-icon="mdi-phone"
          />
          <v-btn color="primary" rounded @click="signup">Registrarse</v-btn>
          <v-btn color="warning" rounded @click="clean('formRegister')">Limpiar</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import _each from 'lodash/each'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class LoginPage extends Vue {
  valid:boolean = true
  formLogin:any = {
    email: '',
    password: ''
  }
  formRegister:any = {
    email: '',
    password: '',
    name: '',
    surname: '',
    phone: '',
    sex: ''
  }
  clean (form:any) {
    (this.$refs[form] as Vue & { reset: () => {} }).reset()
  }
  login () {
    console.log(this.formLogin)
  }
  signup () {
    console.log(this.formRegister)
  }
}
</script>

<style>
h2 {
  margin-bottom: 1em;
}
</style>