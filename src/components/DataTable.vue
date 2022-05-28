<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      class="elevation-1"
    >
      <template v-slot:item="{ item }">
        <tr>
        <td
          v-for="col in columns"
          :class="col.type === 'criteria' && item[col.name] > 0.5 ? 'error lighten-5' : ''"
          :key="`${col.name}`"
        >
          <div v-if="col.type === 'date'" class="text-no-wrap" :key="`${col.name}_date`">
            {{ item[col.name] | toDate }}
          </div>
          <div v-else-if="col.type === 'money'" class="text-no-wrap" :key="`${col.name}_money`">
            {{ item[col.name] | toMoney('rub') }}
          </div>
          <div v-else-if="col.type === 'details'" class="text-no-wrap" :key="`${col.name}_details`">
            <router-link
              title="Открыть детали"
              class="text-decoration-none"
              :to="{ name: 'org', params: { org: item.id }, query }"
            >
              <span class="text-decoration-underline">{{ item[col.name] }}</span>
              <v-icon small class="primary--text pl-1">mdi-link</v-icon>
            </router-link>
          </div>
          <div
            v-else-if="col.type === 'criteria'"
            class="text-no-wrap font-weight-bold"
            :key="`${col.name}_criteria`"
          >
            {{ item[col.name] }}
          </div>
          <div v-else :key="`${col.name}`">{{ item[col.name] }}</div>
        </td>
        </tr>
      </template>
    </v-data-table>
    <v-pagination
      v-if="pages > 1"
      v-model="pageLocal"
      circle
      :length="pages"
      class="mt-5"
    ></v-pagination>
  </div>
</template>

<script>
import $date from '@/utils/date';

export default {
  name: 'DataTable',
  props: {
    page: Number,
    pages: Number,
    list: {
      type: Array,
      default: () => ([]),
    },
    columns: {
      type: Array,
      default: () => ([]),
    },
    query: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      pageLocal: null,
    };
  },
  computed: {
    headers() {
      return this.columns.map(({ text, name, type }) => ({
        text,
        value: name,
        sortable: false,
        align: 'center',
        class: type === 'criteria' ? 'grey lighten-4' : '',
      }));
    },
    items() {
      return this.list;
    },
  },
  watch: {
    page: {
      immediate: true,
      handler(val) {
        this.pageLocal = val;
      },
    },
    pageLocal(val) {
      this.$emit('update:page', val);
    },
  },
  filters: {
    toDate(val) {
      return $date(val).format('DD MMM YYYY');
    },
    toMoney(val, currency) {
      return [val, currency].join(' ');
    },
  },
};
</script>

<style>

</style>
