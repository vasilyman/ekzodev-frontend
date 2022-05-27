<template>
  <v-app-bar app  clipped-left>
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.smAndDown"
      @click="drawerLocal = !drawerLocal"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <slot name="user"></slot>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: String,
    drawer: Boolean,
  },
  data() {
    return {
      drawerLocal: false,
    };
  },
  watch: {
    drawer: {
      immediate: true,
      handler(val) {
        this.drawerLocal = val;
      },
    },
    drawerLocal: {
      handler(val) {
        this.$emit('update:drawer', val);
      },
    },
    '$vuetify.breakpoint.smAndDown': {
      immediate: true,
      handler(val) {
        this.drawerLocal = !val;
      },
    },
  },
};
</script>

<style>

</style>
