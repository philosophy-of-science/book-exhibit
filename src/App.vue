<template>
  <div id="app">
    <div class="exhibit-cta">
      <a href="#"
        ><unicon
          name="book-alt"
          height="1.25em"
          width="1.25em"
          fill="#fff"
        />Join the exhibit</a
      >
    </div>
    <Heading />
    <exhibitor-data />
  </div>
</template>

<script>
import ExhibitorData from "./components/ExhibitorData.vue";
import Heading from "./components/Heading.vue";

export default {
  name: "App",
  components: {
    ExhibitorData,
    Heading,
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
  --charcoal-400: #646464;
  --charcoal-500: #3a3a3a;
  --red-500: #af1f24;
  --red-600: #780000;
  --teal-300: #9affff;
  --teal-400: #63e1dc;
  --teal-500: #1fafaa;

  --twitter: #55acee;
  --facebook: #3b5998;
  --instagram: #3f729b;
  --linkedin: #0077b5;

  --padding: 1.25rem;

  --bb: 1px solid var(--silver-600);
}

html {
  font-size: 1rem;
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
  line-height: 1.5;
  scroll-behavior: smooth;
}

#app {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1024px;
  margin: 0 auto;
  padding: calc(2 * var(--padding)) var(--padding);
}

.exhibit-title {
  border: 1px solid var(--silver-600);
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.exhibit-title-logo {
  position: relative;
  border-right: 1px solid var(--silver-600);
  display: flex;
  padding: var(--padding);
  align-items: center;
}

.exhibit-title-logo img {
  height: 50px;
  width: 50px;
  margin-right: 10px;
}

.exhibit-title h1 {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
}

.exhibit-title p {
  padding: var(--padding);
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  vertical-align: bottom;
  text-align: center;
  color: #222;
}

.exhibit-cta {
  background-color: #af1f24;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 2em;
  /* overflow: hidden; */
  transition: background-color 0.2s;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.exhibit-cta a {
  display: inline-flex;
  align-items: center;
  font-size: 15px;
  color: #fff;
  text-decoration: none;
  padding: var(--padding);
  text-transform: uppercase;
  letter-spacing: 0.2px;
  font-weight: 700;
}
.exhibit-cta svg {
  margin-right: 2px;
}
.exhibit-cta:hover {
  background-color: #780000;
}

.about {
  padding: var(--padding);
  font-size: 115%;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.2px;
  border-bottom: 1px solid var(--silver-600);
}

.unicon {
  line-height: 1;
  display: inline-flex;
  align-items: center;
}
</style>
