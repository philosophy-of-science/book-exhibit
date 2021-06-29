<template>
  <div>
    <nav>
      <ul class="header-grid">
        <li>
          <a href="https://philsci.org"
            >PSA
            <unicon
              name="external-link-alt"
              height="1em"
              width="1em"
              fill="var(--charcoal-400)"
          /></a>
        </li>
        <li>
          <a href="#"
            >Meeting
            <unicon
              name="meeting-board"
              height="1em"
              width="1em"
              fill="var(--charcoal-400)"
          /></a>
        </li>
        <li>
          <a href="#"
            >Donate<unicon
              name="heart"
              height="1em"
              width="1em"
              fill="var(--charcoal-400)"
          /></a>
        </li>
        <li>
          <a href="#"
            >Journal<unicon
              name="file-alt"
              height="1em"
              width="1em"
              fill="var(--charcoal-400)"
          /></a>
        </li>
        <li>
          <a href="#"
            >Faves<unicon
              name="check-circle"
              height="1em"
              width="1em"
              fill="var(--charcoal-400)"
          /></a>
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  font-size: 20px;
  line-height: 1.2;
  flex: 1;
}
p {
}

p:last-of-type {
  font-size: 30px;
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
nav a {
  padding: 10px;
  color: inherit;
  text-align: center;
  text-decoration: none;
  /* border: 1px solid var(--silver-600); */
  border-left: none;
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--charcoal-400);
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.3px;
  transition: background-color 0.2s;
  /* line-height: 1; */
}

nav a div {
  margin-left: 3px;
  transform: translateY(1px);
  color: var(--charcoal-400);
}

nav a:hover {
  background-color: var(--silver-500);
}
</style>