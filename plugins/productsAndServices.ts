import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $productsAndServices: any
  }
}

Vue.prototype.$productsAndServices = {
  services: [
    {
      title: 'Promociones Médicas',
      link: '/promociones-medicas',
      image: 'https://firebasestorage.googleapis.com/v0/b/clickmedic-ecuador.appspot.com/o/flamelink%2Fmedia%2Fmedical-equipment-4099430_1280.jpg?alt=media&token=2e0bbea7-adc6-4673-8d9d-08d764561983'
    }
  ],
  products: [
    {
      title: 'Prueba COVID-19',
      link: '/prueba-covid-19',
      image: 'https://firebasestorage.googleapis.com/v0/b/clickmedic-ecuador.appspot.com/o/flamelink%2Fmedia%2Fvirus-4931041_1280.jpg?alt=media&token=aa145a24-53e6-4005-9083-d560e9836415'
    },
    {
      title: 'Productos Médicos',
      link: '/productos-médicos',
      image: 'https://firebasestorage.googleapis.com/v0/b/clickmedic-ecuador.appspot.com/o/flamelink%2Fmedia%2Ftablet-4842049_1280.jpg?alt=media&token=0096907d-2804-4b1a-b551-885b44b5f083'
    }
  ]
}