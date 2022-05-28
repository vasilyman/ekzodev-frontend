<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      class="elevation-1"
    >
      <template v-for="col in columns" v-slot:[`item.${col.name}`]="{ value }">
        <div v-if="col.type === 'date'" class="text-no-wrap" :key="`${col.name}_date`">
          {{ value | toDate }}
        </div>
        <div v-else-if="col.type === 'money'" class="text-no-wrap" :key="`${col.name}_money`">
          {{ value | toMoney('rub') }}
        </div>
        <div v-else :key="`${col.name}`">{{ value }}</div>
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
  },
  data() {
    return {
      pageLocal: null,
    };
  },
  computed: {
    headers() {
      return this.columns.map(({ text, name }) => ({
        text,
        value: name,
        sortable: false,
        align: 'center',
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
