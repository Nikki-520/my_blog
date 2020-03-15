<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>归档:</span>
          </div>
          <el-collapse
            class="panel1 title-year"
            v-for="(item, index) in years"
            :key="index"
            v-model="activeNames"
            @change="handleChange"
          >
            <el-collapse-item :title="item.name" :name="item.name">
              <nuxt-link :to="`/${item2.id}`" class="title" v-for="item2 in item.blogList" :key="item2.id">
               <span style="margin-right:10px;font-size:12px;">{{ dateFormat(item2.updateTime) }}</span>
                <span>{{ item2.title }}</span>
               
                <el-divider></el-divider>
              </nuxt-link>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: [],
      activeNames2: []
    };
  },
  async asyncData({ app }) {
    const { data } = await app.$axios.get("/blogNames");
    let years = [
      {
        name: "2020",
        blogList: []
      },
      {
        name: "2021",
        blogList: []
      },
      {
        name: "2022",
        blogList: []
      },
      {
        name: "2023",
        blogList: []
      }
    ];
    for (let i = 0; i < data.data.pageInfo.total; i++) {
      for (let j = 0; j < years.length; j++) {
        var date = new Date(data.data.pageInfo.list[i].updateTime);
        var newYear = date.getFullYear();
        if (newYear == years[j].name) {
          years[j].blogList.push(data.data.pageInfo.list[i]);
        }
      }
    }
    return { years: years };
  },
  mixins: {
    homeScrollTop: Function,
    dateFormat: Function
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    initBlog() {
      var _this = this;
      for (let i = 0; i < _this.blogs.total; i++) {
        for (let j = 0; j < _this.years.length; j++) {
          if (
            _this.blogs.list[i].updateTime.getFullYear() == _this.years[j].name
          ) {
            _this.years[j].blogList.push(this.blogs.list[i]);
          }
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.text {
  font-size: 14px;
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
.panel1 {
  margin-left: 2px;
}
.panel2 {
  margin-left: 15px;
}
/deep/ .el-collapse-item__header {
  color: rgb(255, 0, 0);
  font-size: 18px;
  font-weight: bold;
}
.title {
  margin-left: 15px;
  font-size: 18px;
  font-weight: bold;
}
</style>