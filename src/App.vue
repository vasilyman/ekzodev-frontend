<template>
  <v-app>
    <AppSidebar v-model="drawer" />
    <AppHeader
      :title="getTitle"
      :drawer.sync="drawer"
    >
      <template #user>
        <AppUser />
      </template>
    </AppHeader>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    AppHeader: () => import('@/components/appHeader.vue'),
    AppSidebar: () => import('@/components/appSidebar.vue'),
    AppUser: () => import('@/components/appUser.vue'),
  },
  computed: {
    ...mapGetters('App', ['getTitle']),
    ...mapGetters('User', ['getIsAuthenticated']),
    drawer: {
      get() {
        return this.$store.getters['App/getDrawer'];
      },
      set(val) {
        this.$store.commit('App/setDrawer', val);
      },
    },
  },
  created() {
    this.checkAuth();
  },
  methods: {
    ...mapActions('User', ['fetchUser']),
    checkAuth() {
      if (!this.getIsAuthenticated) {
        this.setUser(1);
      }
    },
  },
};
</script>

<style lang="scss">
</style>
