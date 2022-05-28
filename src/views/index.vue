<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col>
        <h3 class="my-3">Фильтры</h3>
      </v-col>
      <v-col cols="auto">
        <p class="my-3">Экспорт в excel</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <SelectRegion v-model="region" />
      </v-col>
      <v-col>
        <SelectRegion v-model="region" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3 class="my-3">Отчет</h3>
        <DataTable
          :page.sync="page"
          :list="getList"
          :columns="getColumns"
        ></DataTable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProfileDataQualityModule from '@/store/modules/ProfileDataQuality';

export default {
  name: 'IndexPage',
  components: {
    DataTable: () => import('@/components/DataTable.vue'),
    SelectRegion: () => import('@/components/SelectRegion.vue'),
  },
  data() {
    return {
      page: 0,
      region: null,
    };
  },
  computed: {
    ...mapGetters('ProfileDataQuality', ['getList', 'getColumns']),
  },
  watch: {
    page: {
      immediate: true,
      handler(p) {
        this.fetchData(p);
      },
    },
  },
  methods: {
    ...mapActions('ProfileDataQuality', ['fetchList', 'fetchColumns']),
    async fetchData(p) {
      await this.fetchList({ p });
    },
  },
  created() {
    this.fetchColumns();
  },
  beforeCreate() {
    if (!this.$store.hasModule('ProfileDataQuality')) this.$store.registerModule('ProfileDataQuality', ProfileDataQualityModule);
  },
  destroyed() {
    if (this.$store.hasModule('ProfileDataQuality')) this.$store.unregisterModule('ProfileDataQuality');
  },
};
</script>

<style>

</style>
