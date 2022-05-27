export default {
  namespaced: true,

  state: {
    title: 'Модуль поиска аномалий в данных о рыболовстве',
    drawer: true,
  },

  mutations: {
    setTitle(state, data) {
      state.title = data;
    },
    setDrawer(state, data) {
      state.drawer = data;
    },
  },

  actions: {},

  getters: {
    getTitle(state) {
      return state.title;
    },
    getDrawer(state) {
      return state.drawer;
    },
  },
};
