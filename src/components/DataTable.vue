<template>
  <div></div>
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
  },
};
</script>

<style>

</style>
