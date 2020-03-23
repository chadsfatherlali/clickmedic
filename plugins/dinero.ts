import Vue from 'vue'
import dinero from 'dinero.js'

declare module 'vue/types/vue' {
  interface Vue {
    $dinero(amount:any): any
  }
}

Vue.prototype.$dinero = (amount:any) => {
  const _amount:number = parseFloat(amount) * 100

  return dinero({
    amount: _amount,
    currency: 'USD',
    precision: 2
  })
    .toFormat()
}