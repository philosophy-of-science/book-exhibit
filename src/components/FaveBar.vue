<template>
  <div class="container" id="fave-bar">
    <header>
      <div v-if="!faves">
        <h2 class="about">No favorites yet!</h2>
        <p>
          Click the bookmark
          <unicon
            name="bookmark"
            height="1em"
            width="1em"
            color="currentColor"
          />
          to start saving.
        </p>
      </div>
      <h2 class="about" v-else>Favorites</h2>
    </header>

    <div class="btn-container" v-if="faves">
      <button class="btn-cta" @click="downloadFaves">
        <unicon
          name="file-download-alt"
          height="1.25em"
          width="1.25em"
          fill="var(--charcoal-500)"
        />Download Faves
      </button>
      <button class="btn-cta" v-if="!copied" @click="copyToClipboard">
        <unicon
          name="clipboard"
          height="1.25em"
          width="1.25em"
          fill="var(--charcoal-500)"
        />Copy to Clipboard
      </button>
      <button class="btn-cta" v-if="copied" @click="copyToClipboard">
        <unicon
          name="clipboard-notes"
          height="1.25em"
          width="1.25em"
          fill="var(--charcoal-500)"
        />Copied to Clipboard!
      </button>
      <button class="btn-cta" @click="closeFaves">
        <unicon
          name="times-circle"
          height="1.25em"
          width="1.25em"
          fill="var(--red-500)"
        />Close
      </button>
    </div>

    <Books :books="this.$store.state.faves" :areFaves="true" />
  </div>
</template>

<script>
import Books from "./Books.vue";

export default {
  name: "fave-bar",

  components: {
    Books,
  },

  data() {
    return {
      copied: false,
    };
  },

  computed: {
    faves() {
      return this.$store.state.faves.length;
    },
    list() {
      const textArr = this.$store.state.faves.map((book, i) => {
        return `${i + 1}. ${book.author}, ${book.title} (${book.publisher}, ${
          book.date
        }). ${book.link}\n`;
      });
      textArr.push(
        `\n\n\nSaved from the PSA 2021 Virtual Book Exhibit on ${new Date().toLocaleDateString()}`
      );
      const text = textArr.join("\n");
      return text;
    },
  },

  methods: {
    closeFaves() {
      this.$store.commit("toggleFaves");
    },
    copyToClipboard() {
      const el = document.createElement("textarea");
      el.value = this.list;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    },
    downloadFaves() {
      const filename = "PSA Book Exhibit Faves";

      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(this.list)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
  },

  mounted() {
    document.documentElement.scrollTop = 0;
  },
};
</script>

<style scoped>
.container {
  max-width: 1024px;
  margin: 1rem auto;
  min-height: 100vh;
}

header {
  margin: 3rem auto var(--spacing);
}

h2 + p {
  padding: var(--spacing) var(--spacing-2x);
}

h2 + p > div {
  position: relative;
  top: 0.1em;
}
/* header h2 {
  border-bottom: var(--bb);
  padding-bottom: var(--spacing);
} */
.close-btn {
  background: none;
  border: none;
  float: right;
  cursor: pointer;
}

.btn-container {
  display: flex;
  flex-wrap: wrap;
  margin: var(--spacing) 0;
  padding: var(--spacing);
  justify-content: center;
  align-items: center;
}

.btn-cta {
  padding: var(--spacing-half) var(--spacing);
  border: none;
  border-radius: var(--radius);
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #fff;
  color: var(--charcoal-500);
  box-shadow: var(--shadow);
  transition: box-shadow 0.2s;
  border: 1px solid;
  line-height: 1;
  display: inline-flex;
  align-items: center;
}

.btn-cta:not(last-child) {
  margin: 0 var(--spacing) var(--spacing) 0;
}

.btn-cta:last-child {
  color: var(--red-500);
}

.btn-cta:hover {
  /* background-color: #f0f0f0; */
  box-shadow: var(--shadow-lg);
}

.btn-cta:active {
  box-shadow: var(--shadow-md);
}

.btn-cta div {
  position: relative;
  /* top: 0.22em; */
  margin-right: 0.5em;
}
</style>