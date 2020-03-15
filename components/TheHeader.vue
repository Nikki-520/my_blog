<template>
  <header>
    <div>
      <span class="blog-title" to="/" @click.prevent="homeScrollTop">
        <h1>飞雪之都</h1>
      </span>
      <el-menu
        :default-active="this.$route.name == 'index'?'/':'/'+this.$route.name"
        class="el-menu-header"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/category">分类</el-menu-item>
        <el-menu-item index="/catalogue">归档</el-menu-item>
        <el-menu-item index="/About">关于我</el-menu-item>
      </el-menu>
      <!-- <TheHeaderSearch /> -->
    </div>
  </header>
</template>

<script>
// import TheHeaderSearch from '~/components/TheHeaderSearch';
export default {
  //   components: {
  //     TheHeaderSearch
  //   },
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    // meta() {
    //   return this.$store.state.meta;
    // }
  },

  mixins: {
    homeScrollTop: Function
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars.scss";

header {
  font-family: "Roboto", sans-serif;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  > div {
    align-items: center;
    border-bottom: 1px solid #d8d8d8;
    background-color: #fff;
    display: flex;
    height: 80px;
    margin: 0 auto;
    max-width: $containerWidth;
    padding: 0 32px;
    transition: padding-top 0.5s, padding-bottom 0.5s;

    @media (max-width: 700px) {
      height: 60px;
      padding: 16px;
    }
  }
  /deep/ .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid #000000;
  }
  /deep/ .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border-bottom: 2px solid #000000;
  }
  li {
    &.nuxt-link-active {
      padding-bottom: 4px;
      border-bottom: 2px solid;
    }
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .blog-title {
    margin-right: 32px;

    @media (max-width: 700px) {
      margin-right: 16px;
    }

    h1 {
      color: #666;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 400;
    }
  }

  .el-menu-header {
    flex-shrink: 0;

    @media (max-width: 500px) {
      display: none;
    }
  }

  li {
    color: #757575;
    font-size: 0.9rem;
    font-weight: 300;
  }
}
</style>
