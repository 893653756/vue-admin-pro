<template>
  <component :is="layout"></component>
</template>

<script>
export default {
  name: "Layouts",
  computed: {
    layout() {
      return "layout-comprehensive";
    },
  },
};
</script>

<style>
</style>