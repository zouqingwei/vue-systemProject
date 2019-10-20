<template>
<div>
  <Head></Head>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="index" width="50" label="序号"></el-table-column>
    <el-table-column prop="brand" label="品牌" width="180"></el-table-column>
    <el-table-column prop="single" label="型号" width="180"></el-table-column>
    <el-table-column label="图例" width="180">
      <template slot-scope="scope">
        <img :src="scope.row.src">
      </template>
    </el-table-column>
    <el-table-column prop="price" label="单价"></el-table-column>
    <el-table-column prop="num" label="数量">
      <template slot-scope="scope">
        <el-input-number v-model="scope.row.num" @change="handleChange(scope.row)" :min="1" :max="10"></el-input-number>
      </template>
    </el-table-column>
    <el-table-column prop="subtotal" label="价格"></el-table-column>
  </el-table>
  <h2>总共价格：{{totalPrice}}</h2>
</div>
</template>

<script>
  import Head from './Head'
  export default {
        name: "Shop",
        components:{Head},
        data(){
          return{
            tableData:[],
          }
        },
    created(){
          this.$axios.get('./../../static/shop.json').then((res)=>{
            this.tableData=res.data;
          })
    },
    methods:{
      handleChange(val){
        val.subtotal=val.num*val.price;
      }
    },
    computed:{
          totalPrice(){
            return this.tableData.reduce((sum,data)=>{
              return sum+data.subtotal;
            },0)
          }
    }
    }
</script>

<style scoped>
img{width: 60px;}
  h2{float: right;margin-right: 100px; font-weight: bold; font-size:30px;margin-top: 50px}
</style>
