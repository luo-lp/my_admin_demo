<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <!-- <h5>自定义颜色</h5> -->
            <!-- <img src="../assets/logo.png" alt="" srcset=""> -->
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <!-- <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>用户管理</span>
                </template>

              </el-submenu> -->
              <el-submenu index="1">
                  <template slot="title" class="el-icon-menu" ><span>用户管理</span></template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header><h1>电商后台管理系统</h1></el-header>
        <el-main>欢迎使用</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
