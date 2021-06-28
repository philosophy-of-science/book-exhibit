<template>
  <div>
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
import Exhibitor from "./Exhibitor.vue";

export default {
  components: {
    Exhibitor,
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

    const temp = [
      {
        title: "Smellosophy",
        author: "A. S. Barwich",
        date: "7/14/2020",
        description:
          "A pioneering exploration of olfaction that upsets settled notions of how the brain translates sensory information.\n\nDecades of cognition research have shown that external stimuli “spark” neural patterns in particular regions of the brain. This has fostered a view of the brain as a space that we can map: here the brain responds to faces, there it perceives a sensation in your left hand. But it turns out that the sense of smell—only recently attracting broader attention in neuroscience—doesn’t work this way. A. S. Barwich asks a deceptively simple question: What does the nose tell the brain, and how does the brain understand it?\n\nBarwich interviews experts in neuroscience, psychology, chemistry, and perfumery in an effort to understand the biological mechanics and myriad meanings of odors. She argues that it is time to stop recycling ideas based on the paradigm of vision for the olfactory system. Scents are often fickle and boundless in comparison with visual images, and they do not line up with well-defined neural regions. Although olfaction remains a puzzle, Barwich proposes that what we know suggests the brain acts not only like a map but also as a measuring device, one that senses and processes simple and complex odors.\n\nAccounting for the sense of smell upsets theories of perception philosophers have developed. In their place, Smellosophy articulates a new model for understanding how the brain represents sensory information.",
        link: "https://www.hup.harvard.edu/catalog.php?isbn=9780674983694",
        cover:
          "https://res.cloudinary.com/philosophy-of-science-association/image/upload/v1624912969/9780674983694-lg_jrvujz.jpg",
        slug: "harvard-university-press",
        publisher: "Harvard University Press",
        logo: "https://res.cloudinary.com/philosophy-of-science-association/image/upload/v1624891900/harvard-university-press.jpg",
        website: "http://www.smellosophy.com/",
        twitter:
          "https://twitter.com/Harvard_Press?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        facebook: "https://www.facebook.com/HarvardPress/",
        instragram: "https://www.instagram.com/harvardpress/?hl=en",
        linkedin:
          "https://www.linkedin.com/company/harvard-university-press-hup",
        blog: "https://harvardpress.typepad.com/",
      },
    ];
    // this.exhibitorRawData = data;
    this.exhibitorRawData = temp;

    // } catch (err) {
    //   console.log(err);
    // }
  },
  computed: {
    exhibitors() {
      const exhibitDataFormatted = this.exhibitorRawData.reduce(
        (acc, current) => {
          if (acc[current.slug]) {
            console.log("already exists");
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
  margin: 40px auto;
}
</style>