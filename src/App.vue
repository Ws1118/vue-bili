<template>
  <div id="app">
    <el-row class="bg el-button--danger">
      <!-- <element class=""> -->
      <i class="iconfont icon-bilibilidonghua"></i>
      <!-- <el-button>这里应该是bili的icon图标</el-button> -->
      <el-button type="danger">主站</el-button>
      <el-button type="danger">番剧</el-button>
      <el-button type="danger">游戏中心</el-button>
      <el-button type="danger">直播</el-button>
      <el-button type="danger">会员购</el-button>
      <el-button type="danger">漫画</el-button>
      <el-button type="danger">赛事</el-button>
      <el-button type="danger">下载APP</el-button>
      <el-button type="info" icon="search"></el-button>
      <el-button type="danger">大会员</el-button>
      <el-button type="danger">消息</el-button>
      <el-button type="danger">动态</el-button>
      <el-button type="danger">收藏</el-button>
      <el-button type="danger">历史</el-button>
      <el-button type="danger">创作中心</el-button>
      <el-button type="danger">投稿</el-button>

      <!-- <el-button>主站</el-button>
        <el-button>番剧</el-button>
        <el-button>游戏中心</el-button>
        <el-button>直播</el-button>
        <el-button>会员购</el-button>
        <el-button>漫画</el-button>
        <el-button>赛事</el-button>
        <el-button>下载APP</el-button>
        <el-button icon="search"></el-button>
        <el-button>大会员</el-button>
        <el-button>消息</el-button>
        <el-button>动态</el-button>
        <el-button>收藏</el-button>
        <el-button>历史</el-button>
        <el-button>创作中心</el-button>
        <el-button>投稿</el-button> -->
      <!-- </element> -->
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.bg {
  top: -60px;
  width: 100%;
  height: 25vh;
  background: url("https://i0.hdslb.com/bfs/vc/ab61ab76a225646e3bcb162b0f8fb2aa47f1f66c.png");
}

.icon-bilibilidonghua {
  font-size: 2rem;
  color: #fff;
}

/* 更改element-UI按钮样式 */
.el-button--danger {
  color: #fff;
  background-color: #ff69b4;
  border-color: #ff69b4;
}
</style>
