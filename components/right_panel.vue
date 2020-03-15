<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>分类</span>
        <nuxt-link to="category">
          <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
        </nuxt-link>
      </div>
      <div>
        <el-tag v-for="item in allTypes" :key="item.id" class="tag-kind">{{ item.name }}</el-tag>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>标签</span>
        <nuxt-link to="category">
          <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
        </nuxt-link>
      </div>
      <div>
        <el-tag v-for="item in allTags" :key="item.id" class="tag-kind" type="warning">{{ item.name }}</el-tag>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>热门博文</span>
        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </div>
      <div>
        <nuxt-link v-for="item in recommendedBlogs" :key="item.id" tag="a"  :to="`/${item.id}`">
          <div class="text-hot item">{{ item.title }}</div>
        </nuxt-link>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allTypes:{},
      allTags:{},
      recommendedBlogs:{}
    };
  },
  created: function() {
    var _this = this;
    _this.getAllTypes();
    _this.getAllTag();
    _this.getRecommendedBlog();
  },
  methods: {
    getAllTypes: function() {
      var _this = this;
      this.$axios
        .get("/allTypes")
        .then(function(res) {
          _this.allTypes = res.data.data.types;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getAllTag: function() {
      var _this = this;
      this.$axios
        .get("/allTag")
        .then(function(res) {
          _this.allTags = res.data.data.tags;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getRecommendedBlog: function() {
      var _this = this;
      this.$axios
        .get("/recommendedBlog")
        .then(function(res) {
          _this.recommendedBlogs = res.data.data.recommendedBlogs;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
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
  margin: 0 5px 10px 5px;
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
</style>>

