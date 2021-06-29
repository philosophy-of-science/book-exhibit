<template>
  <div>
    <exhibitor
      publisher="Philosophy of Science Association"
      :logo="require('../assets/logo.png')"
      website="https://psa2020.philsci.org/"
      twitter="https://twitter.com/PhilSciAssoc"
      facebook="https://www.facebook.com/philsciassociation"
      slug="philsci"
      description="The virtual book exhibit..."
    />
  </div>
</template>

<script>
import Exhibitor from "./Exhibitor.vue";
export default {
  components: { Exhibitor },
};
</script>

<style lang="scss" scoped>
</style>