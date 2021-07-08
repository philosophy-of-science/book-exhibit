<template>
  <section>
    <p class="about">Exhibitors</p>
    <nav class="exhibitor-toc">
      <a
        v-for="exhibitor in exhibitors"
        :key="exhibitor.slug"
        :href="'#' + exhibitor.slug"
        ><img
          :src="require(`../assets/logos/${exhibitor.slug}-logo.png`)"
          :alt="exhibitor.publisher"
          height="40px"
        />{{ exhibitor.publisher }}</a
      >
      <a href="https://psa2020.philsci.org/exhibit">
        <unicon name="books" height="20px" width="20px" fill="var(--red-500)" />
        Exhibit with Us</a
      >
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
  gap: var(--spacing);
  padding: var(--spacing) var(--spacing-2x);
}

@media (min-width: 768px) {
  .exhibitor-toc {
    grid-template-columns: repeat(2, 1fr);
  }
}

.exhibitor-toc a {
  display: flex;
  border: 1px solid var(--silver-600);
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: var(--spacing);
  color: inherit;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s, box-shadow 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  color: var(--charcoal-500);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.exhibitor-toc img {
  margin-right: 0.5rem;
}

.exhibitor-toc a:hover {
  background-color: var(--silver-500);
  box-shadow: var(--shadow-md);
}

.exhibitor-toc a:active {
  box-shadow: var(--shadow);
}

.exhibitor-toc a div {
  margin-right: 0.25rem;
  position: relative;
  top: 3px;
}
</style>