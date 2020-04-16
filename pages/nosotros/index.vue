<template>
  <div>
    <v-parallax
      src="https://firebasestorage.googleapis.com/v0/b/clickmedic-ecuador.appspot.com/o/flamelink%2Fmedia%2Fstethoscope-2617701_1280.jpg?alt=media&token=2b541eb3-e2d5-418f-9c9b-e4a25ac7d317"
    />
    <v-breadcrumbs large :items="items" divider=">"></v-breadcrumbs>
    <v-container>
      <v-row>
        <v-col cols="12">
          <section>
            <h1>GRUPOCLICK CIA. LTDA.</h1>
            <p>
              Es una empresa debidamente constituida bajo las leyes y normas Ecuatorianas, cuyo objeto es prestar servicios <strong>médicos</strong> u <strong>odontológicos</strong>  en consultorios privados, en consultorios colectivos, en clínicas ambulatorias, en clínicas anexas a empresas o en los propios domicilios de los pacientes, así como también puede prestar servicios de laboratorio y actividades radiología entre otros. 
            </p>
            <p>
              Además puede gestionar la administración de convenios comerciales con diferentes instituciones.
            </p>
          </section>
          <section>
            <h2>MISION</h2>
            <p>
              GRUPOCLICK CIA.LTDA. Es una empresa que se orienta a brindar servicios y productos Médicos,  Odontológicos basados en los requerimientos del sector empresarial a través de su red de clínicas  afiliadas. 
            </p>
            <p>
              Cuyo objeto principal es poner a disposición de las empresas y pacientes, <strong>servicios y productos especializados y garantizados a precios competitivos</strong>, de forma amigable y rápida.
            </p>
          </section>
          <section>
            <h2>VISION</h2>
            <p>
              Ser los lideres en el segmento de empresas de administración de convenios y productos de <strong>Salud y Odontología</strong> online con beneficios diferenciadores para sus pacientes. Reconocidos por la ética profesional, y el posicionamiento de una marca innovadora que transmite confianza, seguridad y facilidad a sus pacientes.
            </p>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  async asyncData() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: "Nosotros",
          disabled: true
        }
      ]
    };
  }
})
export default class HomePage extends Vue {}
</script>

<style>
section {
  margin-bottom: 4em;
}
h2 {
  margin-bottom: 1.2em;
}
h1 {
  margin-bottom: 1.2em;
}
h1, h2, h3 {
  color: #1976d2;
}
p {
  text-align: justify;
  font-size: 1.2em;
}
</style>
