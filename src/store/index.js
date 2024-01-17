import { createStore } from 'vuex'

export default createStore({
  state: {
    currentRoute: '/',
  },
  getters: {
  },
  mutations: {
    setCurrentRoute(state, route) {
      state.currentRoute = route;
    }
  },
  actions: {
  },
  modules: {
  }
})
