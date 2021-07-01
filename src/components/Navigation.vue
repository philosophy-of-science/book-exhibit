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
      <a href="https://psa2020.philsci.org/exhibit">Exhibit with Us</a>
    </nav>
  </section>
</template>

<script>
export default {
  props: {
    exhibitors: Array,
  },
};
</script>

<style scoped>
.exhibitor-toc {
  display: grid;
  justify-content: center;
  border-bottom: 1px solid var(--silver-600);
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 768px) {
  .exhibitor-toc {
    grid-template-columns: repeat(2, 1fr);
  }
}

.exhibitor-toc a {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: var(--padding);
  color: inherit;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  color: var(--charcoal-500);
}

.exhibitor-toc a:hover {
  background-color: var(--silver-500);
}
</style>