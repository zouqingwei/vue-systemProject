<template>
  <div class="home">
    <Head></Head>
    <h1 class="el-color-dropdown__btn">总览条目</h1>
    <div class="box" v-for="item of list" :key="item.id.toString()">
     <router-link :to="'/single/'+item.id">
       <h3 v-changeStyle:ita>{{item.id}}.{{item.title|upper}}</h3>
     </router-link>
      <article>{{item.body}}</article>
    </div>
    <div class="laybtn"><el-button type="success" round @click="getMore">继续加载</el-button></div>
  </div>
</template>

<script>
  import Head from './Head'
export default {
  components:{Head},
  name: 'Home',
  data () {
    return {
      list:[],
      n:0
    }
  },
  created(){
    // if(this.$store.state.storeMoreList.length === 0){
    this.$axios.get('./../../static/txt.json').then((res)=>{
      // console.log(res.data);
      this.list=res.data.slice(0,10);       //第一种
      this.$store.commit('initList',res.data);     //第二种
      // let storeListArr=this.$store.state.storeList.slice(0,10);
      // this.list=storeListArr;
    }).catch(()=>{
      this.$message({
      title: '警告',
      message: '数据丢失了',
      type: 'error'
    });
    });
    // }else {
    //     this.list=this.$store.state.storeMoreList;
    //     this.n=10;
    // }
  },
  methods:{
    getMore(){              //父组件  继续加载
        if (this.n < 5) {
          this.$axios.get('./../../static/txt.json').then((res) => {
            let data = res.data.slice(5 + this.n, 10 + this.n);
            this.list = this.list.concat(data);
            this.$store.commit('storeGetMoreList',this.list);
            console.log(data);
          }).catch(() => {
            this.$notify.error({
              title: '警告',
              message: '数据丢失了',
              type: 'error'
            });
          })
          this.n += 5;
        } else {
          this.$notify({
            showClose:true,
            title: '警告',
            message: '别翻了，没有数据了',
            type: 'warning'
          });

        }
        this.$store.commit('storeGetMoreList',this.list);
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{height: 60px;background: #baffbd; color: white;text-align: center; line-height: 60px;font-size: 30px;margin-bottom: 15px;}
/*background:url("./../assets/bg2.jpg");*/
.box{height:100px; background-size:100%;border: 2px solid #777777;border-radius: 10px;margin-bottom:10px;text-align: center;}
.box h3{height: 40px;line-height: 40px; font-size: 18px; }
.box a{text-decoration: none}
.laybtn{text-align: center;}
</style>
