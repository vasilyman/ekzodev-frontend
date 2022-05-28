<template>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-default-footer
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    page: Number,
    list: {
      type: Array,
      default: () => ([]),
    },
    columns: {
      type: Array,
      default: () => ([]),
    },
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
};
</script>

<style>

</style>
