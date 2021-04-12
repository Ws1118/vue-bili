<template>
  <div id="app">
    <i class="iconfont icon-bilibilidonghua"></i>
    <el-row>
      <element class="el-button--primary">
        <!-- <el-button>这里应该是bili的icon图标</el-button> -->
        <el-button type="primary">主站</el-button>
        <el-button type="success">番剧</el-button>
        <el-button type="info">游戏中心</el-button>
        <el-button type="warning">直播</el-button>
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
      </element>
    </el-row>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.icon-bilibilidonghua {
  font-size: 2rem;
  color: #fff;
}

/* 更改element-UI按钮样式 */
.el-button--primary {
  color: #fff;
  background-color: #ff69b4;
  border-color: #ff69b4;
}
</style>
