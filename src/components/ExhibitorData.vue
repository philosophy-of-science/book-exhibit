<template>
  <div>
    <Navigation :exhibitors="exhibitors" />
    <section v-for="exhibitor in exhibitors" :key="exhibitor.slug">
      <exhibitor
        :publisher="exhibitor.publisher"
        :logo="exhibitor.logo"
        :website="exhibitor.website"
        :twitter="exhibitor.twitter"
        :facebook="exhibitor.facebook"
        :instagram="exhibitor.instagram"
        :linkedin="exhibitor.linkedin"
        :blog="exhibitor.blog"
        :slug="exhibitor.slug"
        :description="exhibitor.description"
        :books="exhibitor.books"
      />
    </section>
  </div>
</template>

<script>
import exhibitData from "./exhibitData.json";
import Exhibitor from "./Exhibitor.vue";
import Navigation from "./Navigation.vue";

export default {
  name: "exhibitor-data",

  components: {
    Exhibitor,
    Navigation,
  },

  data() {
    return {
      exhibitorRawData: [],
      scrollPos: null,
    };
  },

  beforeDestroy() {
    console.log("destory");
    this.$store.commit("setScrollPos", window.scrollY);
    document.documentElement.style.scrollBehavior = "auto";
  },

  mounted() {
    if (this.$store.state.scrollPos) {
      document.documentElement.scrollTop = this.$store.state.scrollPos;
      document.documentElement.style.scrollBehavior = "smooth";
    }
  },

  async created() {
    // const URL =
    //   "https://sheet2api.com/v1/KTEHbpbTB6Kc/virtual-book-exhibit-psa-2021-2021-06/books";
    // try {
    //   const response = await fetch(URL);
    //   if (!response.ok) {
    //     throw Error(response.statusText);
    //   }
    //   const data = await response.json();

    // this.exhibitorRawData = data;
    this.exhibitorRawData = exhibitData;

    // } catch (err) {
    //   console.log(err);
    // }
  },
  computed: {
    exhibitors() {
      const exhibitDataFormatted = this.exhibitorRawData.reduce(
        (acc, current) => {
          if (acc[current.slug]) {
            acc[current.slug].books.push(current);
            return acc;
          }

          acc[current.slug] = {
            slug: current.slug,
            publisher: current.publisher,
            logo: current.logo,
            website: current.website,
            twitter: current.twitter,
            facebook: current.facebook,
            instagram: current.instagram,
            linkedin: current.linkedin,
            blog: current.blog,
            discount: current.discount,
            discountDescription: current.discountDescription,
            description: current.description,
          };
          acc[current.slug].books = [current];
          return acc;
        },
        {}
      );

      return Object.values(exhibitDataFormatted).sort((a, b) => {
        if (a.slug > b.slug) {
          return 1;
        }

        if (a.slug < b.slug) {
          return -1;
        }
      });
    },
  },
};
</script>

<style scoped>
div {
  margin: 3rem 0;
}
</style>