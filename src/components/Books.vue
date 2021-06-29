<template>
  <div v-if="books" class="books-container">
    <article v-for="(book, idx) in books" :key="idx">
      <Book :book="book" />
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
  },
};
</script>

<style scoped>
.books-container {
  display: grid;
  gap: calc(var(--padding) * 2);
  grid-template-columns: repeat(auto-fill, minmax(400px, 2fr));
  padding: var(--padding);
}
</style>