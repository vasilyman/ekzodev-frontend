<template>
  <div class="pa-5">
  <v-card rounded="lg">
    <v-card-text>
      <v-row justify="center">
        <v-col cols="auto" :class="[$style['card-header'], 'black--text']">
          <h3 class="text-h4">
            {{ getTitle }}
          </h3>
          <p class="">
            {{ getSubtitle }}
          </p>
        </v-col>
      </v-row>
      <h3 class="my-3">Фильтры</h3>
      <v-row>
        <v-col>
          <SelectRegion v-model="region" />
        </v-col>
        <v-col>
          <SelectPeriod v-model="dateRange" />
        </v-col>
        <v-col>
          <v-text-field
            v-model="searchValue"
            label="Поиск"
            append-icon="mdi-magnify"
            outlined
            rounded
            clearable
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h3 class="my-3">Отчет</h3>
        </v-col>
        <v-col cols="auto">
          <a :href="getExportLink" class="text-decoration-none">
            <span class=" primary--text text-decoration-underline">Экспортировать в Excel</span>
            <v-icon small class="primary--text ml-1">
              mdi-content-save-outline
            </v-icon>
          </a>
        </v-col>
      </v-row>
      <v-row>
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

export default {
  name: 'IndexPage',
  components: {
    DataTable: () => import('@/components/DataTable.vue'),
    SelectRegion: () => import('@/components/SelectRegion.vue'),
    SelectPeriod: () => import('@/components/SelectPeriod.vue'),
  },
  data() {
    return {
      page: 1,
      region: null,
      searchValue: null,
      dateRange: ['2022-04-01', '2022-04-30'],
    };
  },
  computed: {
    ...mapGetters(
      'ProfileDataQuality',
      [
        'getList', 'getColumns', 'getExportLink',
        'getSubtitle', 'getTitle', 'getCount', 'getLimit', 'getPages'],
    ),
    query() {
      const query = {
        p: this.page,
        'f.region': this.region,
      };
      if (this.dateRange?.[0] && this.dateRange?.[1]) {
        [query['f.dateFrom'], query['f.dateTo']] = this.dateRange;
      }
      return query;
    },
  },
  watch: {
    query: {
      immediate: true,
      deep: true,
      handler(query) {
        this.fetchData(query);
      },
    },
  },
  methods: {
    ...mapActions('ProfileDataQuality', ['fetchList', 'fetchColumns']),
    async fetchData(query) {
      await this.fetchList(query);
    },
  },
  created() {
    this.fetchColumns();
  },
};
</script>

<style lang="scss" module>
.card-header {
  text-align: center;
  width: 850px;
  max-width: 100%;
}
</style>
