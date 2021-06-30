<template>
  <div :id="slug" class="exhibitor-container">
    <header>
      <div v-if="logo" class="exhibitor-logo">
        <img :src="logo" :alt="publisher" width="100" height="100" />
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
            width="1em"
            height="1em"
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
            width="1em"
            height="1em"
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
            width="1em"
            height="1em"
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
            width="1em"
            height="1em"
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
            width="1em"
            height="1em"
            fill="var(--linkedin)"
        /></a>
        <a v-if="blog" :href="blog" class="blog" aria-label="blog" title="blog"
          ><unicon
            name="document-layout-left"
            width="1em"
            height="1em"
            fill="var(--charcoal)"
        /></a>
      </div>
    </header>
    <p v-if="description" class="exhibitor-about">About</p>
    <div v-if="description" class="exhibitor-description">
      <p>{{ description }}</p>
      <!-- <p>{{ splitDescription.description2 }}</p> -->
    </div>
    <p v-if="books" class="exhibitor-books-title">Books</p>
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
  methods: {
    alertMe(b) {
      console.log(b);
      alert(b);
    },
  },
};
</script>

<style lang="css" scoped>
.exhibitor-logo {
  display: flex;
  align-items: center;
  padding: var(--padding);
}

header {
  display: flex;
  /* align-items: center; */
  border-bottom: var(--bb);
}
img {
  height: 60px;
  width: 60px;
  object-fit: contain;
}

.exhibitor-name {
  padding: var(--padding);
  display: flex;
  align-items: center;
}
.exhibitor-body {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  flex: 1;
  justify-content: end;
  align-items: center;
}

.exhibitor-body a {
  justify-self: center;
  padding: 15px;
  margin: 20px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s;
  border: 1px solid currentColor;
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
.exhibitor-about,
.exhibitor-books-title {
  padding: calc(2 * var(--padding)) var(--padding) var(--padding);
  font-size: 115%;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.2px;
  border-bottom: 1px solid var(--silver-600);
}
.exhibitor-description {
  padding: var(--padding);
  line-height: 1.5;
  font-size: clamp(1rem, 1rem + 0.2vw, 22px);
  columns: 2 auto;
  column-gap: 40px;
}
</style>

<style>
.exhibitor-body a:hover svg {
  fill: #fff;
}
</style>