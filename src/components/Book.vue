<template>
  <div class="books-container">
    <article class="book-item" v-for="(book, idx) in books" :key="idx">
      <a :href="book.link" class="book-cover">
        <img :src="book.cover" :alt="book.title" />
      </a>
      <div class="book-text">
        <h3>
          <a :href="book.link"
            >{{ book.title
            }}<i class="fa fa-external-link" aria-hidden="true"></i
          ></a>
        </h3>
        <p>{{ book.author }}</p>
        <p>{{ book.publisher }} {{ book.date }}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    books: Array,
  },
};
</script>

<style scoped>
.books-container {
  display: flex;
  flex-wrap: wrap;
}
.book-item {
  display: flex;
}
.book-cover {
  display: block;
  width: 200px;
  height: 312.5px;
  overflow: hidden;
}

.book-cover:hover img {
  filter: saturate(105%) contrast(105%);
}

.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.2s;
  filter: saturate(95%) contrast(95%);

  position: relative;
}

.book-text {
  width: 200px;
  height: 312.5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-right: 1px solid #ccc;
}

.book-text h3 {
  font-size: 16px;
}

.book-text i {
  margin-left: 3px;
  font-size: 12px;
}

.book-text a {
  text-decoration: none;
  color: #000;
}
.book-text p {
  font-size: 15px;
  margin-top: 0.5em;
}
.book-text p:last-child {
  margin-top: auto;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2px;
}
</style>