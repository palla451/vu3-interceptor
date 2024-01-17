import { createStore } from 'vuex'

export default createStore({
  state: {
    currentRoute: window.location.pathname,
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
