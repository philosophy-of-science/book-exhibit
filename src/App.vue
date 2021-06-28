<template>
  <div id="app">
    <exhibitor-data />
  </div>
</template>

<script>
import ExhibitorData from "./components/ExhibitorData.vue";
export default {
  name: "App",
  components: {
    ExhibitorData,
  },
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
