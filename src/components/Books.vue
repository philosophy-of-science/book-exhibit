<template>
  <div v-if="books" class="books-container">
    <article v-for="(book, idx) in books" :key="idx">
      <Book :book="book" :areFaves="areFaves" />
    </article>
  </div>
</template>

<script>
import Book from "./Book.vue";
export default {
  components: {
    Book,
  },

  props: {
    books: Array,
    areFaves: Boolean,
  },
};
</script>

<style scoped>
.books-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 450px));
  /* justify-content: center; */
  padding: var(--spacing-2x);
  gap: var(--spacing-2x);
  overflow: hidden;
}

@media (min-width: 1024px) {
  .books-container {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
