<template>
    <div>
     <h1><i class="el-icon-back" @click="back"></i>数据详情</h1>

      <!--轮播图1 -->
      <div class="lunbo">
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide><img src="./../assets/a.jpg"></swiper-slide>
        <swiper-slide><img src="./../assets/b.jpg"></swiper-slide>
        <swiper-slide><img src="./../assets/c.jpg"></swiper-slide>
        <swiper-slide><img src="./../assets/d.jpg"></swiper-slide>
        <swiper-slide><img src="./../assets/e.jpg"></swiper-slide>
        <swiper-slide><img src="./../assets/f.jpg"></swiper-slide>
        <!-- Optional controls -->
        <div class="pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>

      </swiper>
      </div>
      <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
      <!--轮播图1  end-->


      <div class="sinbox">
        <h3 v-changeStyle:bol>{{msg.id}}.{{msg.title}}</h3>
        <article>{{msg.body}}</article>
      </div>

    </div>
</template>

<script>

    export default {
        name: "Single",
        data(){
          return{
            msg:{},
            id:this.$route.params.id,   //从home组件点击后传递过来的路由动态值
            swiperOption: {
              autoplay : 2000,
              loop:true,
              effect : 'cube',
              zoom : true,
              paginationElementClass : 'my-switch',
              pagination : '.pagination',
              paginationClickable :true,
              paginationAsRange : true,
              prevButton:'.swiper-button-prev',
              nextButton:'.swiper-button-next',
            }
          }
        },
      created(){
           this.$axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then((res)=>{
             // console.log(res.data);
             this.msg=res.data;
           }).catch(()=>{
             this.$message({
               title: '错误',
               message: '数据丢失了'
             });
           })
      },
      methods:{
          back(){
            this.$router.go(-1);
          }
      }

    }
</script>

<style scoped>
h1{height: 50px;text-align: center;background: #dd6161;line-height: 50px;color: white;font-size: 20px;margin-bottom:50px;box-shadow: 0px 4px 2px #ddc4a5
}
.sinbox{height: 90px;background: #edf2ac;border: 2px solid #64dd06;border-radius: 10px;margin-bottom:10px;text-align: center;margin-top: 80px}
.sinbox h3{height: 35px;line-height: 35px; font-size: 18px;}

/*轮播图1*/
.swiper-container{
  width:600px;
  height:350px;
}
.swiper-visible-switch{
  background: #dd9b7a;
}

.pagination {
  position: absolute;
  z-index: 20;
  bottom: 20px;
  width: 100%;
  text-align: center;
  padding-left:130px;
}
.swiper-pagination-switch {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #555;
  margin: 0 5px;
  opacity: 0.8;
  border: 1px solid #fff;
  cursor: pointer;
}
.swiper-active-switch {
  background: #fff;
}
.lunbo img{
  width:600px;
  height:350px;
  border-radius:120px;
  border: 3px solid #c92fdd;
  box-shadow: 5px 5px 5px;
}
/*轮播图end*/


</style>
