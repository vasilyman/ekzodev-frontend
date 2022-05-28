<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col>
        <DataTable></DataTable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    DataTable: () => import('@/components/DataTable.vue'),
  },
};
</script>

<style>

</style>
