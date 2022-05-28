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
          <a :href="getExportLink">
            <span class=" primary--text">Экспортировать в Excel</span>
            <v-icon x-small class="primary--text">mdi-arrow-right</v-icon>
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
          ></DataTable>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProfileDataQualityModule from '@/store/modules/ProfileDataQuality';

export default {
  name: 'IndexPage',
  components: {
    DataTable: () => import('@/components/DataTable.vue'),
    SelectRegion: () => import('@/components/SelectRegion.vue'),
    SelectPeriod: () => import('@/components/SelectPeriod.vue'),
  },
  data() {
    return {
      page: 0,
      region: null,
      searchValue: null,
      dateRange: null,
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
  beforeCreate() {
    if (!this.$store.hasModule('ProfileDataQuality')) this.$store.registerModule('ProfileDataQuality', ProfileDataQualityModule);
  },
  destroyed() {
    if (this.$store.hasModule('ProfileDataQuality')) this.$store.unregisterModule('ProfileDataQuality');
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
