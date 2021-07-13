<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <section v-if="!this.$store.state.favesShown">
        <Heading />
        <exhibitor-data />
      </section>
      <fave-bar v-else />
    </transition>
    <fave-button />
  </div>
</template>

<script>
import ExhibitorData from "./components/ExhibitorData.vue";
import Heading from "./components/Heading.vue";
import FaveButton from "./components/FaveButton.vue";
import FaveBar from "./components/FaveBar.vue";

export default {
  name: "App",
  components: {
    ExhibitorData,
    Heading,
    FaveButton,
    FaveBar,
  },
  mounted() {
    const faves = localStorage.getItem("faves");
    if (faves && faves.length) {
      this.$store.commit("setFaves", JSON.parse(faves));
    }
  },
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --silver-500: #e8e8ea;
  --silver-600: #b6b6b8;
  --silver-700: #868688;
  --charcoal-400: #646464;
  --charcoal-500: #3a3a3a;
  --charcoal-600: #141414;
  --red-500: #af1f24;
  --red-600: #780000;
  --teal-300: #9affff;
  --teal-400: #63e1dc;
  --teal-500: #1fafaa;

  --twitter: #55acee;
  --facebook: #3b5998;
  --instagram: #3f729b;
  --linkedin: #0077b5;

  --spacing-half: 0.5rem;
  --spacing: 1rem;
  --spacing-2x: 2rem;
  --spacing-3x: 3rem;

  --bb: 1px solid var(--silver-600);

  --radius: 2em;

  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  --sm: 640px;
  --md: 768px;
  --lg: 1024px;
  --xl: 1280px;
}

html {
  font-size: 1rem;
  font-size: clamp(1rem, 0.875rem + 0.3125vw, 1.25rem);
  line-height: 1.5;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  scroll-behavior: smooth;
  text-rendering: optimizeLegibility;
  background: var(--charcoal-600);
}

#app {
  background: #fff;
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Raleway, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;
  letter-spacing: 0.2px;
}
/*  */

.about {
  padding: var(--spacing) var(--spacing-2x);
  font-size: 115%;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.2px;
  border-bottom: 1px solid var(--silver-600);
}

/* Transition  */
.fade-enter-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-leave-active {
  transition: opacity 0.3s ease-in, transform 0.3s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(var(--spacing));
}
</style>
