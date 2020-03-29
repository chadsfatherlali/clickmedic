import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const strict = false
export const state = () => ({
  menu: [],
  products: [],
  cartItems: [],
  user: null
})

export type RootState = ReturnType<typeof state>
export const getters: GetterTree<RootState, RootState> = {}
export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit ({ commit }) {
    commit('setMenu')
  },
  async setProducts ({ commit }, object) {
    const data = await object.db.content.get({
      schemaKey: object.schemaKey,
      populate: true
    })

    commit('setProducts', Object.values(data))
  }
}
export const mutations: MutationTree<RootState> = {
  setUser: (state, user) => {
    state.user = user
  },
  setCartItems: (state, items) => {
    state.cartItems = items
  },
  setMenu: (state) => {
    const menu:any = [
      {
        text: 'Sobre Nosotros',
        link: '/sobre-nosotros',
      },
      {
        text: 'Contacto',
        link: '/contacto',
      }
    ]

    state.menu = menu
  },
  setProducts: (state, data:any) => {
    state.products = data
  }    
}