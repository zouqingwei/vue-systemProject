<template>
<div class="detailone">
  <Detail></Detail>
  <!--卡片个人信息-->
  <div class="card">
    <table>
      <tr><td><img src="../assets/bg1.jpg"/><p>用户名：user</p></td></tr>
      <tr><td>年龄：18</td></tr>
      <tr><td>权限管理：超级权限</td></tr>
      <tr><td>爱好：编程</td></tr>
    </table>
  </div>
  <!--日期时间表-->
  <div class="data">
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</div>


</template>

<script>
  import Detail from './Detail'
    export default {
        name: "DetailOne",
      components:{Detail},
      data() {
        return {
          value: new Date()
        }
      }
    }
</script>

<style scoped>
  .card{width: 20%;margin-top: 60px;}
  table{float: left;width: 100%; height: 300px;border: 2px solid #bcc7d0; border-collapse: collapse;text-align: center}
  img{border-radius:50px;width: 100px;height: 100px }
  td{border: 1px solid #bcc7d0;line-height: 50px}
  .data{width:45% ;float:right; margin-right: 50px; border: 2px solid #bcc7d0; margin-top: -320px}
  .el-calendar{width: 100%;float:right;}
</style>
