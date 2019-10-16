<template>
  <el-container class="index">
    <!-- 头部 -->
    <el-header>
      <div class="logo">
        <img src="../assets/logo.ec55f206.png" alt />
      </div>
      <h1 class="title">我的管理系统</h1>
      <div class="logout">
        欢迎光临~
        <a @click="logout" href="javascript:;">退出</a>
      </div>
    </el-header>

    <el-container>
      <!-- 导航栏 -->
      <el-aside width="200px">
        <el-menu
          unique-opened
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 主体区域 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('mytoken1')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss' scoped>
.index {
  height: 100%;
  // 头部
  .el-header {
    background-color: #d8d8d8;
    display: flex;
    .logo {
      width: 180px;
      img {
        height: 40px;
        margin: 10px;
      }
    }
    .title {
      text-align: center;
      height: 60px;
      line-height: 60px;
      color: #545c64;
      flex: 1;
    }
    .logout {
      width: 180px;
      height: 60px;
      line-height: 60px;
      text-align: right;
      font-weight: 700;
      a {
        color: orange;
      }
    }
  }
  .el-container {
    // 导航栏
    .el-aside {
      background-color: #545c64;
      .el-menu {
        border: none;
      }
    }
    // 主体区域
    .el-main {
      background-color: #ecf0f1;
    }
  }
}
</style>
