<template>
<div>
  <Head></Head>

  <div class="totalbox">
    <el-col>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <!--<template slot="title">分组一</template>-->
            <router-link to="/detailone">
            <el-menu-item index="1-1">选项1</el-menu-item>
            </router-link>
            <router-link to="/detailtwo">
            <el-menu-item index="1-2">选项2</el-menu-item>
            </router-link>
            <router-link to="/detailthree">
            <el-menu-item index="1-3">选项3</el-menu-item>
            </router-link>
            <router-link to="/detailfour">
            <el-menu-item index="1-4">选项4</el-menu-item>
            </router-link>
          </el-menu-item-group>

        </el-submenu>
      </el-menu>
    </el-col>

  </div>

</div>

</template>

<script>
  import Head from './Head'
  export default {
        name: "Detail",
        components:{Head},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
    }
</script>

<style scoped>
.el-col{width:15%;float: left}
  .router-link-exact-active{width: 10%;}
</style>
