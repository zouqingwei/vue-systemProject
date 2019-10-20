<template>
<header>
  <nav>
    <router-link to="/">首页</router-link>
    <router-link to="/detail">管理</router-link>
    <router-link to="/list">列表</router-link>
    <router-link to="/shop">购物</router-link>
    <span class="come">欢迎用户:{{username}}</span>
  </nav>
</header>
</template>

<script>
    export default {
        name: "Head",
      data(){
          return{
            username:localStorage.getItem('user'),
          }
      },

    }
</script>

<style scoped>
  header{text-align: center;height: 80px; line-height: 80px;background: #ccdcff;margin-bottom: 15px}
  header a{background: #45d8ff; width: 80px; display: inline-block; height: 60px;line-height: 60px;border-radius:10px;
    color: white; text-decoration: none }
  .router-link-exact-active{background:rgba(255,255,255,0.5) ;color: #b21f2d}
  nav{position: relative}
  span{color: #2b81af;float: right;position: absolute;}
  .come{margin-left: 120px;}
  .edit{margin-left: 300px;}
</style>
