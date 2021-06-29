<template>
  <section>
    <p class="about">Exhibitors</p>
    <nav class="exhibitor-toc">
      <a
        v-for="exhibitor in exhibitors"
        :key="exhibitor.slug"
        :href="'#' + exhibitor.slug"
        >{{ exhibitor.publisher }}</a
      >
    </nav>
  </section>
</template>

<script>
export default {
  props: {
    exhibitors: Object,
  },
};
</script>

<style scoped>
.exhibitor-toc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 1px solid var(--silver-600);
}

.exhibitor-toc a {
  display: flex;
  align-items: center;
  color: inherit;
  padding: var(--padding);
  text-decoration: none;
  transition: background-color 0.2s;
  flex: 1;
  text-align: center;
  justify-content: center;
}

.exhibitor-toc a:hover {
  background-color: var(--silver-500);
}

.exhibitor-toc a + a {
  border-left: none;
}
</style>