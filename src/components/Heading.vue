<template>
  <div class="container">
    <nav>
      <div class="mobile">
        <a href="https://philsci.org">
          <img :src="require('../assets/logo.png')" alt="PSA homepage" />
        </a>
        <button @click="showMenu = !showMenu" :class="{ close: showMenu }">
          <span></span>
        </button>
      </div>
      <ul class="header-grid" v-if="showMenu">
        <li>
          <a href="https://philsci.org">
            <unicon
              name="home"
              height="1.25em"
              width="1.25em"
              fill="var(--charcoal-400)"
            />&nbsp;PSA</a
          >
        </li>
        <li>
          <a href="https://psa2020.philsci.org">
            <unicon
              name="meeting-board"
              height="1.25em"
              width="1.25em"
              fill="var(--charcoal-400)"
            />&nbsp;Meeting</a
          >
        </li>
        <li>
          <a href="https://mms.philsci.org/members/wish/donate.php?org_id=PSA"
            ><unicon
              name="heart"
              height="1.25em"
              width="1.25em"
              fill="var(--charcoal-400)"
            />&nbsp;Donate</a
          >
        </li>
        <li>
          <a href="https://philsci.org/membership.php"
            ><unicon
              name="circle-layer"
              icon-style="monochrome"
              height="1.25em"
              width="1.25em"
              fill="var(--red-500)"
            />&nbsp;Join</a
          >
        </li>
      </ul>
    </nav>
    <header class="header">
      <div class="header-img-block">
        <img :src="require('../assets/logo-2.png')" alt="PSA Logo" />
        <h1>Philosophy of Science<br />Association</h1>
      </div>
      <p class="subheader">Virtual Book Exhibit <span>2021</span></p>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {
    const showMenuBasedOnWidth = () => {
      const clientWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      if (clientWidth < 768) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    };
    showMenuBasedOnWidth();
    window.onresize = showMenuBasedOnWidth;
  },
};
</script>

<style scoped>
.container {
  z-index: 1000;
  background: #fff;
  overflow: hidden;
}

.header-grid {
  display: grid;
  position: absolute;
  top: calc(32px + var(--spacing-2x));
  right: 0;
  align-items: center;
  width: 100%;
  background-color: #fff;
  grid-template-columns: repeat(4, 1fr);
}

@media (min-width: 768px) {
  .header-grid {
    position: relative;
    top: initial;
    right: initial;
  }
}

.mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing) var(--spacing-2x);
}

.mobile a,
.mobile img {
  width: 32px;
  height: 32px;
  padding: 0;
}

.mobile button {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
}

.mobile button.close span {
  height: 0;
}

.mobile button.close span::before {
  transform: translateY(8px) rotate(45deg);
}

.mobile button.close span::after {
  transform: translateY(-8px) rotate(-45deg);
}

.mobile button:hover span::before {
  transform: translateY(2px);
}

.mobile button:hover span::after {
  transform: translateY(-2px);
}

.mobile button.close:hover span::before {
  transform: translateY(8px) rotate(45deg);
  background-color: var(--red-500);
}

.mobile button.close:hover span::after {
  transform: translateY(-8px) rotate(-45deg);
  background-color: var(--red-500);
}

.mobile span {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 16px;
  height: 3px;
  width: 32px;
  border-radius: var(--radius);
  background-color: var(--charcoal-400);
  transition: transform 0.2s, background-color 0.2s;
}

.mobile span::before {
  content: "";
  position: absolute;
  top: -8px;
  left: 0;
  height: 3px;
  width: 32px;
  border-radius: var(--radius);
  background-color: var(--charcoal-400);
  transition: transform 0.2s, background-color 0.2s;
}

.mobile span::after {
  content: "";
  position: absolute;
  top: 8px;
  left: 0;
  height: 3px;
  width: 32px;
  border-radius: var(--radius);
  background-color: var(--charcoal-400);
  transition: transform 0.3s;
}

@media (min-width: 768px) {
  .mobile {
    display: none;
  }
}

nav ul {
  list-style-type: none;
}

nav li {
  display: inline-flex;
  text-align: center;
}

.header-grid a,
.header-grid button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--spacing-half);
  border: none;
  color: var(--charcoal-400);
  font-weight: 700;
  font-size: 0.8rem;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  cursor: pointer;
  background: none;
  transition: background-color 0.2s;
}

.header-grid a div,
.header-grid button div {
  position: relative;
  top: 0.15em;
  margin-right: 0.15em;
  color: var(--charcoal-400);
}

.header-grid a:hover,
.header-grid button:hover {
  background-color: var(--silver-500);
}

.header-grid {
  border-top: var(--bb);
}

@media (min-width: 768px) {
  .header-grid {
    border: none;
  }
}

/* Bottom bar  */
.header {
  background-image: radial-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.35)),
    url("../assets/bg.jpg");
  background-size: cover;
  padding: var(--spacing-2x);
  min-height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
}

.header img {
  width: 6.25rem;
  height: 6.25rem;
  object-fit: contain;
}

h1 {
  display: inline-block;
  font-weight: 900;
  font-size: 3.25rem;
  line-height: 1.2;
  font-family: Raleway;
  letter-spacing: -0.2px;
}

.subheader {
  display: inline-block;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: -0.2px;
}

.subheader span {
  color: var(--red-500);
  font-weight: 700;
}

.header-img-block {
  display: flex;
  align-items: center;
}

.header-img-block img {
  display: none;
}

@media (min-width: 768px) {
  h1 {
    margin-left: var(--spacing);
  }
  .subheader {
    margin: 0.5em 0 0 calc(6.25rem + var(--spacing));
  }
  .header-img-block img {
    display: block;
  }
}
</style>