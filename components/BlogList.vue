<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="15">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="float:left">最新博客</span>
          <el-button style="float: right; padding: 3px 0" type="text">最近更新日期：{{ dateFormat(blogs.list[0].updateTime) }}</el-button>
        </div>
        <div v-for="blog in blogs.list" :key="blog.id" class="text-body item">
          <div class="title-1">
            <nuxt-link
              tag="a"
              :to="`/${blog.id}`"
            >{{ blog.title }}博文标题</nuxt-link>
            <nuxt-link :to="`/${blog.id}`">
              <el-button
                class="el-icon-reading"
                style="float: right; line-height: 5px"
                type="text"
              >&nbsp;查看全文</el-button>
            </nuxt-link>
          </div>
          <div class="list-icon">
            <span class="el-icon-date">&nbsp;{{ dateFormat(blog.updateTime) }}</span>
            <span class="el-icon-price-tag">&nbsp;{{ blog.typeName }}</span>
            <span class="el-icon-view">&nbsp;{{ blog.views }}</span>
          </div>
          <div class="image_type">
            <img src="~assets/img/blog_example.jpg" alt />
          </div>
          <div>{{ blog.description }}</div>
        </div>
      </el-card>
      <el-card class="box-card" style="margin-bottom:10px">
        <el-pagination
          :hide-on-single-page="true"
          :page-size="6"
          background
          layout="prev, pager, next"
          :total="blogs.total"
          @current-change="currentChange($event)"
        ></el-pagination>
      </el-card>
    </el-col>
    <el-col :span="6">
      <rightPanel></rightPanel>
    </el-col>
  </el-row>
</template>
<script>
import rightPanel from "~/components/right_panel";
// import { formatDate } from '~/utils/date'
export default {
  components: {
    rightPanel: rightPanel
  },
  data() {
    return {};
  },
  props: {
    blogs: Object
  },
  methods: {
    async currentChange(val) {
      var _this = this;
      this.homeScrollTop();
      _this.$axios
        .get("/", {
          params: {
            pageNum: val
          }
        })
        .then(function(res) {
          _this.blogs = res.data.data.pageInfo;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
    mixins: {
    homeScrollTop: Function,
    dateFormat: Function
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.text-body {
  font-size: 14px;
  border-bottom: 1px solid #ebeef5;
  .title-1 {
    font-size: 1.4rem;
  }
  div {
    margin: 5px 0;
  }
}
.text-hot {
  border-bottom: 1px solid #ebeef5;
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
.list-icon {
  span {
    margin: 0 3px;
    color: rgb(158, 158, 158);
  }
}
.item {
  padding: 10px 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  margin: 0 5px;
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
</style>>

