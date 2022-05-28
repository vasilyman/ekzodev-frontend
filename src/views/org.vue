<template>
  <div class="pa-5">
    <v-card rounded="lg" class="mb-5">
      <v-toolbar
        flat
      >
        <v-btn
          icon
          class="hidden-xs-only"
          title="Назад"
          :to="{ name: 'index' }"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>{{ getItemName }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <span>Период: {{ dateRange | rangeToText }}</span>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <v-row justify="center" class="my-5">
          <v-col cols="auto">
            <div class="text-h6 font-weight-light">Объем скрытой добычи</div>
            <div class="text-subtitle-2">предположительно</div>
            <div class="d-flex">
              <div class="text-h1 font-weight-bold">5890</div>
              <div class="text-h4">тонн</div>
            </div>
          </v-col>
          <v-col cols="auto">
            <div class="text-h6 font-weight-light">Вероятность правонарушений</div>
            <div class="text-subtitle-2">наибольшая</div>
            <div class="d-flex error--text">
              <div class="text-h1 font-weight-bold">90</div>
              <div class="text-h4">%</div>
            </div>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card rounded="lg">
      <v-toolbar
        flat
      >
        <v-toolbar-title>Данные выгрузки</v-toolbar-title>
        <v-spacer></v-spacer>
        <a href="#" class="text-decoration-none">
          <span class="text-decoration-none text-decoration-underline">Экспортировать в Excel</span>
          <v-icon small class="primary--text ml-1">mdi-arrow-right</v-icon>
        </a>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <v-row justify="center">
          <v-col>
            <DataTable
              :page.sync="page"
              :limit="getLimit"
              :pages="getPages"
              :list="getList"
              :columns="getColumns"
              :query="query"
            ></DataTable>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import rangeToTextMixin from '@/mixins/filters/rangeToText';

export default {
  name: 'OrgPage',
  mixins: [rangeToTextMixin],
  data() {
    return {
      dateRange: null,
      page: 1,
    };
  },
  components: {
    DataTable: () => import('@/components/DataTable.vue'),
  },
  computed: {
    ...mapGetters(
      'ReportDataQuality',
      [
        'getList', 'getColumns', 'getExportLink',
        'getCount', 'getLimit', 'getPages'],
    ),
    ...mapGetters('ProfileDataQuality', ['getItemName']),
    query() {
      return {
        p: this.page,
        'f.orgId': this.$route.params.org,
        'f.dateFrom': this.$route.query['f.dateFrom'],
        'f.dateTo': this.$route.query['f.dateTo'],
      };
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler({ query }) {
        const dateRange = [];
        dateRange[0] = query['f.dateFrom'];
        dateRange[1] = query['f.dateTo'];
        this.dateRange = dateRange;
      },
    },
    query: {
      immediate: true,
      deep: true,
      handler(query) {
        this.fetchData(query);
      },
    },
  },
  methods: {
    ...mapActions('ProfileDataQuality', ['fetchItem']),
    ...mapActions('ReportDataQuality', ['fetchList', 'fetchColumns']),
    async fetchData(query) {
      await this.fetchList(query);
    },
    async fetchOrg(id) {
      await this.fetchItem(id);
    },
  },
  created() {
    this.fetchItem(this.$route.params.org);
    this.fetchColumns();
  },
};
</script>

<style>

</style>
