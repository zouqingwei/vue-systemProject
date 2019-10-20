<template>
  <div>
    <Head></Head>
    <div>
      <!--:data="tableData" 表格总数据   prop进行数据映射-->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="日期" prop="title"></el-table-column>
        <el-table-column label="内容" prop="body"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="text-align: center; margin-top: 30px"
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      >
        //current-change改变页面时触发该方法
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import Head from './Head'
  export default {
        name: "List",
        components:{Head},
        data(){
           return{
             message:[],  //总数据
             total:0,   //数据总共有多少条
             currentPage:1,
             pageSize:5,  //每一页要显示多少条数据
           }
        },
    created(){
          // this.$axios.get('./../../static/txt.json').then((res)=>{    //第一种
          //   // console.log(res.data);
          //   this.message=res.data;
          //   this.total=res.data.length;
          // }).catch(()=>{
          //   this.$notify({
          //     title: '警告',
          //     message: '别翻了，没有数据了',
          //     type: 'warning'
          //   });
          // })
      //第二种    加载相同数据的时候可以使用store去管理公用的数据，http请求一次后，把公有的数据存储在store中，其他页面需要此数据，可以在store中直接调用
      //    this.message = this.$store.state.storeList;
      //    this.total=this.$store.state.storeList.length;
         //第三种   取到本地存储的值
      this.message=JSON.parse(localStorage.getItem('list'));
      this.total=JSON.parse(localStorage.getItem('list')).length;
    },
    methods:{
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage=val;
      },
      handleDelete(index){
         this.message.splice(index,1)
      }
    },
    computed:{       //过滤后的数据再存给tableData
      tableData(){
        return this.message.slice((this.currentPage-1) * this.pageSize,this.currentPage*this.pageSize)
      }
    }
    }
</script>

<style scoped>

</style>
