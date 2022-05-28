import ProfileDataQualityApi from '@/api/ProfileDataQualityApi';

export default {
  namespaced: true,

  state: {
    list: [],
    columns: [],
  },

  mutations: {
    setList(state, data) {
      state.list = data;
    },
    setColumns(state, data) {
      state.columns = data;
    },
  },

  actions: {
    async fetchList({ commit }, { p }) {
      // eslint-disable-next-line new-cap
      const { data } = await Promise.resolve({ data: ['bla', p] });
      commit('setList', data);
    },
    async fetchColumns({ commit }) {
      try {
        const { data } = await ProfileDataQualityApi.getColumns();
        commit('setColumns', data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getList(state) {
      return state.list;
    },
    getColumns(state) {
      return state.columns;
    },
  },
};
