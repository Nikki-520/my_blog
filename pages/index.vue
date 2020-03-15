<template>
  <div class="home">
    <div class="articles">
      <!-- <TheHero :hero-article="articlesList[0]" /> -->
      <BlogList :blogs="blogs" />
      <!-- <client-only>
        <InfiniteLoading ref="infiniteLoading" @infinite="moreArticles">
          <span slot="spinner">
            <Spinner1 />
          </span>
          <span slot="no-results">
            <Smile />
            <div>No more articles!</div>
          </span>
          <span slot="no-more">
            <Smile />
            <div>No more articles!</div>
          </span>
        </InfiniteLoading>
      </client-only>-->
    </div>
    <!-- <TheSidebar /> -->
    <div class="backToTop">
      <img
        src="~/static/images/backToTop.png"
        alt="backToTop"
        style="width:50px;height:50px"
        @click.prevent="homeScrollTop"
      />
    </div>
  </div>
</template>
<script>
import BlogList from "~/components/BlogList";
export default {
  async asyncData({ app }) {
    const { data } = await app.$axios.get("/?pageNum=1");
    return { blogs: data.data.pageInfo };
  },

  components: {
    BlogList
  },

  computed: {
    blogsList() {
      return [...this.blogs].filter(
        blog =>
          !blog.categories.includes(parseInt(process.env.FEATURED_CATEGORY_ID))
      );
    }
  },
  mixins: {
    homeScrollTop: Function
  },
  data() {
    return {
      infiniteLoadingPage: 1
    };
  },

  // head() {
  //   return {
  //     title: `Home | ${this.$store.state.meta.name}`,
  //     meta: [{ description: this.$store.state.meta.description }]
  //   };
  // },

  methods: {}
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
}
.backToTop {
  font-family: "Roboto", sans-serif;
  right: 60px;
  position: fixed;
  bottom: 20px;
  width: 100%;
  z-index: 10;
  text-align: right;
}
</style>
