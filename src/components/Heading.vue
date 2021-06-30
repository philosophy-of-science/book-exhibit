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
      </ul>
    </nav>
    <header class="header-grid">
      <h1>Philosophy of Science Association</h1>
      <div class="header-stacked-text">
        <p>Virtual<br />Book<br />Exhibit</p>
        <p>20<br />21</p>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  z-index: 1000;
  background: #fff;
  /* position: sticky; */
  /* top: 0; */
}

.header-grid {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
  .header-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Top bar  */

nav,
header {
  border-bottom: 1px solid var(--silver-600);
}
nav ul {
  list-style-type: none;
}

nav li {
  display: inline-flex;
  text-align: center;
}

nav a,
nav button {
  width: 100%;
  padding: calc(var(--padding) / 2);
  border: none;
  color: inherit;
  color: var(--charcoal-400);
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  cursor: pointer;
  background: none;
  transition: background-color 0.2s;
}

nav a div,
nav button div {
  position: relative;
  top: 1px;
  margin-right: 4px;
  color: var(--charcoal-400);
  /*  transform: translateY(1px); */
}

nav a:hover,
nav button:hover {
  background-color: var(--silver-500);
}

/* Bottom bar  */

h1 {
  padding: var(--padding);
  grid-column: 1 / 4;
  font-family: Raleway;
  line-height: 1.3;
}

.header-stacked-text {
  display: flex;
  grid-column: 4/-1;
}

.header-stacked-text p {
  flex: 1;
  padding: var(--padding);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2;
  text-transform: uppercase;
}

.header-stacked-text p:last-of-type {
  padding-left: 0;
  font-size: 1.5rem;
  color: var(--red-500);
}
</style>