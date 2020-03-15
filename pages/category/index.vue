<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-col :span="2">标签:</el-col>
            <el-col :span="22">
              <el-radio-group v-model="ctag" @change="tagBlog" size="medium" class="text item">
                <el-radio-button
                  v-for="item in allTags"
                  :key="item.id"
                  :label="item.id"
                >{{ item.name }}</el-radio-button>
              </el-radio-group>
            </el-col>
          </div>
          <div slot="header" class="clearfix">
            <el-col :span="2">分类:</el-col>
            <el-col :span="22">
              <el-radio-group v-model="ctype" @change="typeBlog" size="medium" class="text item">
                <el-radio-button
                  v-for="item in allTypes"
                  :key="item.id"
                  :label="item.id"
                >{{ item.name }}</el-radio-button>
              </el-radio-group>
            </el-col>
          </div>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="18">
              <div class="box-card">
                <div v-for="blog in blogs.list" :key="blog.id" class="text-body item">
                  <div class="title-1">
                    <nuxt-link tag="a" :to="`/${blog.id}`">{{ blog.title }}</nuxt-link>
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
                    <span v-if="ctype !=0" class="el-icon-price-tag">&nbsp;{{ blog.typeName }}</span>
                    <span class="el-icon-view">&nbsp;{{ blog.views }}</span>
                  </div>
                  <div class="image_type">
                    <img src="~static/images/blog_example.jpg" alt />
                  </div>
                  <div>{{ blog.description }}</div>
                </div>
              </div>
              <div class="box-card" style="margin-bottom:10px">
                <el-pagination
                  :hide-on-single-page="true"
                  :page-size="6"
                  background
                  layout="prev, pager, next"
                  :total="blogs.total"
                  @current-change="currentChange($event)"
                ></el-pagination>
              </div>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import { formatDate } from '~/utils/date'
export default {
  data() {
    return {
      ctag: 0,
      ctype: 0
    };
  },
  async asyncData({ app }) {
    const [listA, listB, listC] = await Promise.all([
      app.$axios.$get("/?pageNum=1"),
      app.$axios.$get("/allTypes"),
      app.$axios.$get("/allTag")
    ]);
    return {
      blogs: listA.data.pageInfo,
      allTypes: listB.data.types,
      allTags: listC.data.tags
    };
  },
  methods: {
    typeBlog: function(val) {
      var _this = this;
      _this.ctag = 0;
      _this.$axios
        .get("/types/" + _this.ctype, {
          params: {
            pageNum: 1
          }
        })
        .then(function(res) {
          _this.blogs = res.data.data.pageInfo;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    tagBlog: function(val) {
      var _this = this;
      _this.ctype = 0;
      _this.$axios
        .get("/tags/" + _this.ctag, {
          params: {
            pageNum: 1
          }
        })
        .then(function(res) {
          _this.blogs = res.data.data.pageInfo;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async currentChange(val) {
      var _this = this;
      var wflag = "/";
      if (_this.ctype == 0 && _this.ctag == 0) {
        wflag = "/";
      } else if (_this.ctype == 0 && _this.ctag != 0) {
        wflag = "/tags/" + _this.ctags;
      } else if (_this.ctype != 0 && _this.ctag == 0) {
        wflag = "/types/" + _this.ctypes;
      }
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
  margin-bottom: 18px;
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
  width: 100%;
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
.text {
  font-size: 14px;
}
/deep/ .el-radio-button__inner {
  margin-right: 10px;
  border-left: 1px solid #dcdfe6;
  border-radius: 4px !important;
}
</style>>

