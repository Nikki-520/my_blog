<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{ blog.title }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="text-body item">
            <div class="title">{{ blog.title }}</div>
            <div class="list-icon">
              <span class="el-icon-date">&nbsp;{{ dateFormat(blog.updateTime) }}</span>
              <span
                v-for="tag in blog.tags"
                :key="tag.id"
                class="el-icon-price-tag"
              >&nbsp;{{ tag.name }}</span>
              <span class="el-icon-view">&nbsp;{{ blog.views }}</span>
            </div>
            <div class="image_type">
              <img :src="blog.firstPicture" alt />
            </div>
            <article v-html="blog.content" ></article>
          </div>
          <div>
            <comment :comments="comments" :blogId="blog.id"></comment>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import comment from "~/components/Comment.vue";
export default {
  components: {
    comment
  },
  data() {
    return {};
  },
  props: {
    blog: {
      type: Object,
      default: {}
    },
    comments: {
      type: Array
    },
    require: true
  },
  mixins: {
    dateFormat: Function
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.text-body {
  font-size: 14px;
  border-bottom: 1px solid #ebeef5;
  .title {
    font-size: 1.9rem;
    text-align: center;
  }
  div {
    margin: 5px 0;
  }
}
.item {
  padding: 10px 0;
}
.box-card {
  margin: 0 5px 10px 5px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.list-icon {
  text-align: center;
  span {
    margin: 0 8px;
    color: rgb(158, 158, 158);
  }
}
.tag-kind {
  margin: 2px;
}
.image_type {
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  width: 100%;
  height: 170px;
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
.text-hot {
  border-bottom: 1px solid #ebeef5;
}
</style>>
