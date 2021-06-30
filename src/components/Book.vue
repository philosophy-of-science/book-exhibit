<template>
  <div class="book-item" :id="slug(book.title)">
    <div class="book-cover">
      <img
        :src="require(`../assets/covers/${book.cover}-cover.jpg`)"
        :alt="book.title"
      />
      <button @click="fave" class="fave" :class="{ faved: faved }">
        <unicon
          v-if="faved"
          name="favorite"
          icon-style="monochrome"
          width="1.5rem"
          height="1.5rem"
          fill="var(--teal-500)"
        />
        <unicon v-if="!faved" name="favorite" width="1.5rem" height="1.5rem" />
      </button>
    </div>
    <div class="book-text">
      <h3>
        <a :href="book.link"
          >{{ book.title
          }}<unicon name="external-link-alt" height=".8em" width=".8em"
        /></a>
      </h3>
      <p>{{ book.author }}</p>
      <p>{{ book.publisher }} {{ formatDate(book.date) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: Object,
    areFaves: Boolean,
  },

  computed: {
    faved() {
      console.log(this.$store.getters.isAFave(this.$props.book.title));
      return this.$store.getters.isAFave(this.$props.book.title);
    },
    filled() {
      if (this.faved) {
        return "var(--red-500)";
      }
      return "";
    },
  },
  methods: {
    fave() {
      if (!this.faved) {
        this.$store.commit("addFave", this.book);
      } else {
        this.$store.commit("removeFave", this.book);
      }

      // Vuex
    },
    formatDate(str) {
      const d = new Date(str);
      const year = d.getFullYear(this.book);
      return year;
    },
    slug(str) {
      return str.replace(/\W/g, "-").toLowerCase();
    },
  },
};
</script>

<style scoped>
.book-item {
  display: flex;
  background: hsl(0, 0%, 98%);
}
.book-cover {
  position: relative;
  display: block;
  width: 200px;
  height: 312.5px;
  /* overflow: hidden; */
}

.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  position: relative;
}

.book-text {
  flex-grow: 1;

  width: 200px;
  height: 312.5px;
  display: flex;
  flex-direction: column;
  /* padding: var(--padding); */
}

.book-text h3 {
  font-size: 1rem;
  padding: var(--padding) var(--padding) 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
}

.book-text a {
  text-decoration: none;
  color: inherit;
}

.book-text a {
  text-decoration: none;
  color: #000;
}
.book-text h3 div {
  margin-left: 2px;
}

.book-text p {
  font-size: 0.9rem;
  margin-top: 0.5em;
  padding: 0 var(--padding) var(--padding);
  line-height: 1.3;
}
.book-text p:last-of-type {
  margin-top: auto;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  line-height: 1.4;
}

.fave {
  background: none;
  border: none;
  position: absolute;
  right: 0;
  bottom: 25%;
  transform: translate(50%, 0);
  cursor: pointer;
  line-height: 1;
  padding: calc(var(--padding) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, box-shadow 0.2s;
  /* width: 100%; */
  background: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  color: var(--charcoal);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  /* border-top-left-radius: 5px; */
}

.fave span {
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-right: 0.15rem;
}
.fave:hover {
  background-color: rgba(255, 255, 255, 0.85);
}

.fave:active {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.faved {
  background: rgba(255, 255, 255, 0.75);
}
.fave svg {
}
</style>