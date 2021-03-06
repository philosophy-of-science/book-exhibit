<template>
  <div class="container" id="fave-bar">
    <header>
      <div v-if="!faves">
        <h2 class="about">No favorites yet!</h2>
        <p class="start-saving" v-if="!faves">
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
      <div v-else>
        <h2 class="about">
          Favorites <span>{{ $store.state.faves.length }}</span>
        </h2>
        <p>
          Download a text file of your favorite books for later reference or
          copy them to your clipboard
        </p>
      </div>
      <button class="close" @click="closeFaves">
        <unicon
          name="times-circle"
          height="1.25em"
          width="1.25em"
          fill="var(--red-500)"
        />Close
      </button>
    </header>

    <div class="btn-container" v-if="faves">
      <button class="btn-cta" @click="downloadFaves">
        <unicon
          name="file-download-alt"
          height="1.25em"
          width="1.25em"
          fill="var(--charcoal-500)"
        />Download
      </button>
      <button class="btn-cta" v-if="!copied" @click="copyToClipboard">
        <unicon
          name="clipboard"
          height="1.25em"
          width="1.25em"
          fill="var(--charcoal-500)"
        />Copy
      </button>
      <button class="btn-cta copied" v-if="copied" @click="copyToClipboard">
        <unicon
          name="clipboard-notes"
          height="1.25em"
          width="1.25em"
          fill="#4BB543"
        />Copied!
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
        `\n\n\nSaved from the Philosophy of Science Association 2021 Virtual Book Exhibit on ${new Date().toLocaleDateString()}\nVisit us at https://philsci.org`
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
.btn-cta.copied {
  color: #4bb543;
}

.container {
  max-width: 1024px;
  margin: 1rem auto;
  min-height: 100vh;
}

header {
  margin: var(--spacing) auto;
  padding: var(--spacing) var(--spacing-2x);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: var(--bb);
}

.about {
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
}

.about span {
  display: inline-block;
  width: 2em;
  height: 2em;
  padding: 0.5em 0.25em;
  margin-left: 0.5em;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  font-size: 10px;
  line-height: 1;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  /* vertical-align: super; */
  background: var(--red-500);
}

.start-saving div {
  line-height: 0;
  position: relative;
  top: 0.1em;
  fill: var(--red-500);
}

h2 + p {
  margin-top: 1em;
}

h2 + p > div {
  position: relative;
  top: 0.1em;
}

.btn-container {
  display: flex;
  flex-wrap: wrap;
  margin: var(--spacing-half) 0;
  padding: 0 var(--spacing);
  justify-content: center;
  align-items: center;
}

.btn-cta,
.close {
  padding: var(--spacing-half) var(--spacing);
  margin: var(--spacing);
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

.close {
  color: var(--red-500);
}

.btn-cta:hover,
.close:hover {
  box-shadow: var(--shadow-lg);
}

.btn-cta:active,
.close:active {
  box-shadow: var(--shadow-md);
}

.btn-cta div,
.close div {
  position: relative;
  /* top: 0.22em; */
  margin-right: 0.5em;
}
</style>