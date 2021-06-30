<template>
  <div class="container" v-if="this.$store.state.favesShown">
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
</template>

<script>
import Books from "./Books.vue";

export default {
  components: {
    Books,
  },

  methods: {
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
  max-width: 1024px;
  margin: 0 auto;
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
  background-color: var(--red-500);
  box-shadow: var(--shadow-sm);
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