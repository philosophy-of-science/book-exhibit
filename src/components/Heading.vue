<template>
  <div class="container">
    <nav>
      <ul class="header-grid">
        <li>
          <a href="https://philsci.org">
            <unicon
              name="home"
              height="1em"
              width="1em"
              fill="var(--charcoal-400)"
            />PSA</a
          >
        </li>
        <li>
          <a href="#">
            <unicon
              name="meeting-board"
              height="1em"
              width="1em"
              fill="var(--charcoal-400)"
            />Meeting</a
          >
        </li>
        <li>
          <a href="#"
            ><unicon
              name="heart"
              height="1em"
              width="1em"
              fill="var(--charcoal-400)"
            />Donate</a
          >
        </li>
        <li>
          <a href="#"
            ><unicon
              name="file-alt"
              height="1em"
              width="1em"
              fill="var(--charcoal-400)"
            />Journal</a
          >
        </li>
        <li>
          <button @click="showFaves">
            <unicon
              v-if="!faves"
              name="favorite"
              height="1em"
              width="1em"
              fill="var(--charcoal-400)"
            />
            <unicon
              v-if="faves"
              name="favorite"
              icon-style="monochrome"
              width="1em"
              height="1em"
              fill="var(--teal-500)"
            />Faves
          </button>
        </li>
      </ul>
    </nav>
    <header class="header-grid">
      <h1>Philosophy of Science Association</h1>
      <div class="header-virtual-book-exhibit">
        <p>Virtual<br />Book<br />Exhibit</p>
        <p>20<br />21</p>
      </div>
    </header>
    <div v-if="favesShown" class="faves">
      <p v-if="!faves">No faves yet!</p>
      <Books :books="this.$store.state.faves" :areFaves="true" />
      <button class="btn-cta" v-if="faves" @click="downloadFaves">
        <unicon
          name="file-download-alt"
          height="1.25em"
          width="1.25em"
          fill="#fff"
        />Download Faves
      </button>
    </div>
  </div>
</template>

<script>
import Books from "./Books.vue";
export default {
  components: {
    Books,
  },
  data() {
    return {
      favesShown: false,
    };
  },
  computed: {
    faves() {
      return this.$store.state.faves.length;
    },
  },
  methods: {
    showFaves() {
      this.favesShown = !this.favesShown;
    },
    downloadFaves() {
      const filename = "PSA Book Exhibit Faves";

      const textArr = this.$store.state.faves.map((book, i) => {
        return `${i + 1}. ${book.author}, ${book.title} (${book.publisher}, ${
          book.date
        }). ${book.link}\n`;
      });
      textArr.push(
        `\n\n\nSaved from the PSA 2021 Virtual Book Exhibit on ${new Date().toLocaleDateString()}`
      );
      const text = textArr.join("\n");
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
  },
};
</script>

<style scoped>
.container {
  background: #fff;
  /* position: sticky; */
  /* top: 0; */
  z-index: 1000;
}
.header-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
}

h1 {
  padding: var(--padding);
  grid-column: 1 / 5;
  font-family: Raleway;
}

.header-virtual-book-exhibit {
  display: flex;
  grid-column: 5/-1;
}

.header-virtual-book-exhibit p {
  padding: var(--padding);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2;
  flex: 1;
}

.header-virtual-book-exhibit p:last-of-type {
  font-size: 1.5rem;
  padding-left: 0;
  color: var(--red-500);
}
nav,
header {
  border-bottom: 1px solid var(--silver-600);
}
nav ul {
  list-style-type: none;
}

nav li {
  text-align: center;
  display: inline-flex;
}

nav a,
nav button {
  padding: calc(var(--padding) / 2);
  color: inherit;
  text-align: center;
  text-decoration: none;
  color: var(--charcoal-400);
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.3px;
  transition: background-color 0.2s;
  line-height: 1;
  background: none;
  border: none;
  font-family: inherit;
  cursor: pointer;
  width: 100%;
}

nav a div,
nav button div {
  margin-right: 4px;
  /*  transform: translateY(1px); */
  color: var(--charcoal-400);
  position: relative;
  top: 1px;
}

nav a:hover,
nav button:hover {
  background-color: var(--silver-500);
}

.btn-cta {
  font-size: 0.8rem;
  font-family: inherit;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  padding: calc(var(--padding) / 2) var(--padding);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  background-color: var(--red-500);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-cta:hover {
  background-color: var(--red-600);
  box-shadow: var(--shadow-md);
}

.btn-cta div {
  position: relative;
  top: 3px;
  margin-right: 4px;
}
</style>