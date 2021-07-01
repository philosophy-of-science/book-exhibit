<template>
  <div class="book-item" :id="slug(book.title)">
    <div class="book-cover">
      <img
        :src="require(`../assets/covers/${book.cover}-cover.jpg`)"
        :alt="book.title"
      />
      <button @click="fave" class="fave" :class="{ faved: faved }">
        <transition name="fade" mode="out-in">
          <unicon
            key="faved"
            v-if="faved"
            name="bookmark"
            icon-style="monochrome"
            width="1.5rem"
            height="1.5rem"
            fill="var(--charcoal-500)"
          />
          <unicon
            key="unfaved"
            v-else
            name="bookmark"
            width="1.5rem"
            height="1.5rem"
            fill="var(--charcoal-500)"
          />
        </transition>
      </button>
    </div>
    <div class="book-text">
      <h3>
        <a :href="book.link"
          >{{ book.title
          }}<unicon
            name="external-link-alt"
            height=".8em"
            width=".8em"
            fill="var(--charcoal-500)"
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
.book-cover,
.book-text {
  display: block;
  position: relative;
  width: 150px;
  height: 234px;
}
@media (min-width: 768px) {
  .book-cover,
  .book-text {
    width: 175px;
    height: 273px;
  }
}

@media (min-width: 1024px) {
  .book-cover,
  .book-text {
    width: 200px;
    height: 312px;
  }
}
.book-cover img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.book-text {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.book-text h3 {
  display: -webkit-box;
  padding: var(--padding) var(--padding) 0;
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
  margin-top: 0.5em;
  padding: 0 var(--padding) var(--padding);
  font-size: 0.9rem;
  line-height: 1.3;
}
.book-text p:last-of-type {
  margin-top: auto;
  font-size: 12px;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.2px;
}

.fave {
  display: flex;
  z-index: 500;
  position: absolute;
  right: 0;
  bottom: 25%;
  justify-content: center;
  align-items: center;
  padding: calc(var(--padding) / 2);
  border: none;
  border-radius: 50%;
  color: var(--charcoal-500);
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  background: none;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: var(--shadow-md);
  transition: background-color 0.2s, box-shadow 0.2s;
  transform: translate(50%, 0);
  backdrop-filter: blur(10px);
}

.fave span {
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-right: 0.15rem;
}
.fave:hover {
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: var(--shadow-lg);
}

.fave:active {
  box-shadow: var(--shadow);
}

.faved {
  background: rgba(255, 255, 255, 0.75);
}

/* Transition  */
.fade-enter-active {
  transition: opacity 0.2s, transform 0.2s;
}

.fade-leave-active {
  transition: opacity 0.2s ease-in, transform 0.2s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(0.5em);
}
</style>