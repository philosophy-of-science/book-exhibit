<template>
  <div class="container" v-if="this.$store.state.favesShown">
    <div class="inner-container">
      <button class="close-btn" @click="closeFaves">
        <unicon
          name="times-circle"
          fill="var(--red-500)"
          hover-fill="var(--red-600)"
          height="2rem"
          width="2rem"
        />
      </button>
      <p v-if="!faves">No faves yet! Click the star to start saving.</p>
      <div class="btn-container">
        <button class="btn-cta" v-if="faves" @click="downloadFaves">
          <unicon
            name="file-download-alt"
            height="1.25em"
            width="1.25em"
            fill="var(--charcoal-500)"
          />Download Faves
        </button>
      </div>

      <Books :books="this.$store.state.faves" :areFaves="true" />
    </div>
  </div>
</template>

<script>
import Books from "./Books.vue";

export default {
  components: {
    Books,
  },

  computed: {
    faves() {
      return this.$store.state.faves.length;
    },
  },

  methods: {
    closeFaves() {
      this.$store.commit("toggleFaves");
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(15px);
}

.inner-container {
  background: #fff;
  padding: var(--padding);
  max-width: 1024px;
  margin: 1rem auto;
  min-height: 30vh;
  box-shadow: var(--shadow-sm);
  max-height: calc(100% - 2rem);
  overflow: auto;
}

.close-btn {
  background: none;
  border: none;
  float: right;
  cursor: pointer;
}

.btn-container {
  padding: var(--padding);
}

.btn-cta {
  padding: calc(var(--padding) / 2) var(--padding);
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
  box-shadow: var(--shadow-sm);
  transition: background-color 0.2s;
  border: 1px solid;
}

.btn-cta:hover {
  background-color: #f0f0f0;
  box-shadow: var(--shadow-md);
}

.btn-cta div {
  position: relative;
  top: 3px;
  margin-right: 4px;
}
</style>