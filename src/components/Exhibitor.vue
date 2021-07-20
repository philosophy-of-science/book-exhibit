<template>
  <div :id="slug" class="exhibitor-container">
    <header>
      <div v-if="logo" class="exhibitor-logo">
        <img
          :src="require(`../assets/logos/${slug}-logo.png`)"
          :alt="publisher"
          width="100"
          height="100"
        />
      </div>
      <div class="exhibitor-name">
        <h2>{{ publisher }}</h2>
      </div>
      <div v-if="discount" class="exhibitor-discount">
        <p></p>
      </div>
      <div class="exhibitor-body">
        <a
          v-if="website"
          :href="website"
          class="website"
          aria-label="website"
          title="website"
          ><unicon
            name="external-link-alt"
            width="1.25em"
            height="1.25em"
            fill="var(--charcoal)"
        /></a>
        <a
          v-if="twitter"
          :href="twitter"
          class="twitter"
          aria-label="twitter"
          title="twitter"
          ><unicon
            name="twitter"
            width="1.25em"
            height="1.25em"
            fill="var(--twitter)"
        /></a>
        <a
          v-if="facebook"
          :href="facebook"
          class="facebook"
          aria-label="facebook"
          title="facebook"
          ><unicon
            name="facebook"
            width="1.25em"
            height="1.25em"
            fill="var(--facebook)"
        /></a>
        <a
          v-if="instagram"
          :href="instagram"
          class="instagram"
          aria-label="instagram"
          title="instagram"
          ><unicon
            name="instagram"
            width="1.25em"
            height="1.25em"
            fill="var(--instagram)"
        /></a>
        <a
          v-if="linkedin"
          :href="linkedin"
          class="linkedin"
          aria-label="linkedin"
          title="linkedin"
          ><unicon
            name="linkedin"
            width="1.25em"
            height="1.25em"
            fill="var(--linkedin)"
        /></a>
        <a v-if="blog" :href="blog" class="blog" aria-label="blog" title="blog"
          ><unicon
            name="document-layout-left"
            width="1.25em"
            height="1.25em"
            fill="var(--charcoal)"
        /></a>
      </div>
    </header>
    <p v-if="description" class="exhibitor-about">About</p>
    <div v-if="description" class="exhibitor-description">
      <p>{{ description }}</p>
      <!-- <p>{{ splitDescription.description2 }}</p> -->
    </div>
    <p v-if="books" class="exhibitor-about">Titles</p>
    <Books :books="books" :areFaves="false" />
  </div>
</template>

<script>
import Books from "./Books.vue";
export default {
  components: {
    Books,
  },
  props: {
    publisher: String,
    logo: String,
    website: String,
    twitter: String,
    facebook: String,
    instagram: String,
    linkedin: String,
    blog: String,
    slug: String,
    description: String,
    discount: String,
    discountDescription: String,
    books: Array,
  },
  computed: {
    splitDescription() {
      const description = this.description;

      if (description.length > 500) {
        const splitPoint = description.indexOf(" ", description.length / 2);
        return {
          description1: description.substring(0, splitPoint),
          description2: description.substring(splitPoint),
        };
      }
      return { description1: description, description2: null };
    },
  },
};
</script>

<style scoped>
.exhibitor-container {
  margin: 6rem 0;
}

header {
  display: grid;
  grid-template-columns: min-content auto;
  flex-wrap: wrap;
  border-bottom: var(--bb);
  border-top: var(--bb);
}

@media (min-width: 768px) {
  header {
    grid-template-columns: min-content auto auto;
  }
}

@media (min-width: 1024px) {
  header {
    grid-template-columns: min-content max-content auto;
  }
}

.exhibitor-logo {
  display: flex;
  align-items: center;
  padding: var(--spacing) var(--spacing) var(--spacing) var(--spacing-2x);
}

img {
  height: 3.5rem;
  width: 3.5rem;
  object-fit: contain;
}

.exhibitor-name {
  display: flex;
  align-items: center;
  padding: var(--spacing) var(--spacing-2x) var(--spacing) 0;
  line-height: 1.3;
}

/* Social Media Icons  */
.exhibitor-body {
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
  padding: var(--spacing) var(--spacing-2x) var(--spacing);
  grid-column: 1 / -1;
}

@media (min-width: 768px) {
  .exhibitor-body {
    grid-column: initial;
    justify-content: flex-end;
  }
}

.exhibitor-body a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  margin: var(--spacing-half);
  padding: calc(var(--spacing) / 3);
  border: 1px solid currentColor;
  border-radius: 50%;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  justify-self: center;
}

.exhibitor-body a:first-of-type {
  margin-left: 0;
}

.exhibitor-body a div {
  position: relative;
  top: 3px;
}

.twitter {
  color: #55acee;
}

.facebook {
  color: #3b5998;
}

.instagram {
  color: #3f729b;
}

.linkedin {
  color: #0077b5;
}

.website,
.blog {
  color: #3a3a3a;
}

.twitter:hover {
  background-color: #55acee;
  color: #fff;
}

.facebook:hover {
  background-color: #3b5998;
  color: #fff;
}

.instagram:hover {
  background-color: #3f729b;
  color: #fff;
}

.linkedin:hover {
  background-color: #0077b5;
  color: #fff;
}

.website:hover,
.blog:hover {
  background-color: #3a3a3a;
  color: #fff;
}

.exhibitor-about {
  padding: var(--spacing-3x) var(--spacing-2x) var(--spacing);
  border-bottom: 1px solid var(--silver-600);
  font-weight: 700;
  font-size: 115%;
  text-transform: uppercase;
  letter-spacing: 0.2px;
}

.exhibitor-description {
  max-width: 66ch;
  padding: var(--spacing-2x);
}

@media (min-width: 768px) {
  .exhibitor-description {
    max-width: initial;
    columns: 2 auto;
    column-gap: var(--spacing-2x);
  }
}

.exhibitor-description p {
  hyphens: auto;
}
</style>

<style>
.exhibitor-body a:hover svg {
  fill: #fff;
}
</style>