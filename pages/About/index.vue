<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="margin-left:30px;">
            <el-col :span="12">
              <div style="padding-bottom:10px;">
                <span style="font-size:25px;font-weight:bold;">飞雪无痕</span>
              </div>
              <div>
                <a href="https://github.com/2264169230" target="_blank">
                  <el-button circle icon="icon-github"></el-button>
                </a>
                <el-popover placement="top-start" trigger="hover">
                  <div>
                    <img src="~assets/img/qq_code.jpg" style="height:200px;weight:210px;" alt />
                  </div>
                  <el-button circle icon="icon-sign_qq" slot="reference"></el-button>
                </el-popover>
                <el-popover
                  placement="top-start"
                  trigger="hover"
                >
                  <div>
                    <img src="~assets/img/wechat_code.png" style="height:200px;weight:250px;" alt />
                  </div>
                  <el-button circle icon="icon-wechat" slot="reference"></el-button>
                </el-popover>
              </div>
            </el-col>
            <el-col :span="12" style="float: right; padding: 15px 0">
              <el-col :span="8" class="title-small">
                <div>{{ aboutInfo.commentNum }}</div>
                <div>评论</div>
              </el-col>
              <el-col :span="8" class="title-small">
                <div>{{ aboutInfo.blogNum }}</div>
                <div>文章</div>
              </el-col>
              <el-col :span="8" class="title-small">
                <div>3</div>
                <div>新鲜事</div>
              </el-col>
            </el-col>
          </div>
          <div style="margin-left:35px;margin-bottom:10px;">记事本:</div>
          <div class="block">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>liuchen 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>liuchen 提交于 2018/4/3 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>liuchen 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import "~/assets/icon/iconfont.css";
export default {
  async asyncData({ app }) {
    const { data } = await app.$axios.get("/about");
    return { aboutInfo: data.data };
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
.title-small {
  text-align: center;
  font-weight: bold;
}
</style>