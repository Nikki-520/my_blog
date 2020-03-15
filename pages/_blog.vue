<template>
  <div>
    <BlogDetail :blog="blog" :comments="comments" />
    <div class="backToTop">
      <img
        src="~/assets/img/backToTop.png"
        alt="backToTop"
        style="width:50px;height:50px"
        @click.prevent="homeScrollTop"
      />
    </div>
  </div>
</template>

<script>
import BlogDetail from "~/components/BlogDetail.vue";

export default {
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get("/blog/" + params.blog, {});
    return { blog: data.data.blog,
    comments: data.data.comments };
  },
  components: {
    BlogDetail
  },
  mixins: {
    homeScrollTop: Function
  }
};
</script>
<style lang="scss" scoped>
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
