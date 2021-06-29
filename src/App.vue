<template>
  <div id="app">
    <div class="exhibit-cta">
      <a href="#"
        ><i class="fa fa-book" aria-hidden="true"></i>Join the exhibit</a
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

#app {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
  scroll-behavior: smooth;
}

.exhibit-title {
  border: 1px solid #ccc;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.exhibit-title-logo {
  position: relative;
  border-right: 1px solid #ccc;
  display: flex;
  padding: 20px;
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
  padding: 20px;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  vertical-align: bottom;
  text-align: center;
  color: #222;
}

.exhibit-cta {
  display: flex;
  align-items: center;
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
  font-size: 15px;
  color: #fff;
  text-decoration: none;
  padding: 20px;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  font-weight: 700;
}
.exhibit-cta i {
  margin-right: 5px;
}
.exhibit-cta:hover {
  background-color: #780000;
}
</style>
