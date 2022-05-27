import Vue from 'vue';
import Vuex from 'vuex';

import App from './modules/app';
import User from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    App,
    User,
  },
});
