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
  components: {
    Exhibitor,
    Navigation,
  },
  data() {
    return {
      exhibitorRawData: [],
    };
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

      return exhibitDataFormatted;
    },
  },
};
</script>

<style scoped>
div {
  max-width: 1024px;
  margin: calc(6 * var(--padding)) auto;
}
</style>