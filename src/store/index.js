import Vue from 'vue';
import Vuex from 'vuex';

import App from '@/store/modules/app';
import User from '@/store/modules/user';
import ProfileDataQuality from '@/store/modules/ProfileDataQuality';
import ReportDataQuality from '@/store/modules/ReportDataQuality';

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
    ProfileDataQuality,
    ReportDataQuality,
  },
});
