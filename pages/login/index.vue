<template>
  <v-container>
    <v-row>
      <v-col md="6" cols="12">
        <h2>Iniciar Sesión</h2>
        <v-form
          ref="formLogin"
          v-model="valid.formLogin"
          lazy-validation
        >
          <v-text-field
            v-model="formLogin.email"
            label="E-mail"
            required
            outlined
            prepend-inner-icon="mdi-email"
            :rules="rules.email"
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
          v-model="valid.formRegister"
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
          <v-select
            v-model="formRegister.sex"
            :items="sexItems"
            label="Género"
            outlined
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
  $firebase:any = this['$firebase']
  valid:any = {
    formLogin: true,
    formRegister: true
  }
  sexItems:any = [
    'Mujer',
    'Hombre'
  ]
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
  rules:any = {
    email: [
      (v:any) => !!v || 'E-mail is required',
      (v:any) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid'
    ]
  }
  clean (form:any) {
    const _form = this.$refs[form] as any
    
    _form.reset()
  }
  async login () {
    const { code, message } = await this.$firebase.auth().signInWithEmailAndPassword(this.formLogin.email, this.formLogin.password)
    const urlRedirect:string = (this['$route'].query.redirect || '') as string

    if (!code && !message) {
      window.top.location.href = urlRedirect
    } else {
      console.log(code)
      console.log(message)
    } 
  }
  async signup () {
    const { user } = await this.$firebase.auth().createUserWithEmailAndPassword(this.formRegister.email, this.formRegister.password)
    
    if (user) {
      const result = await this.$firebase.firestore().collection('userInfo').add({
        uid: user.uid,
        name: this.formRegister.name,
        surname: this.formRegister.surname,
        phone: this.formRegister.phone,
        sex: this.formRegister.sex
      })
    }
  }
}
</script>

<style>
h2 {
  margin-bottom: 1em;
}
</style>