<template>
    <div class="login">
        <div class="login_inner">
          <h1>请您登录</h1>
          <el-input
            placeholder="请输入用户名"
            suffix-icon="el-icon-user-solid"
            v-model="user">
          </el-input>
          <el-input
            placeholder="请输入密码"
            suffix-icon="el-icon-view"
            v-model="pass">
          </el-input>
          <div>
            <el-button type="success" plain @click="sub">登录</el-button>
            <el-button type="warning" plain @click="res">重置</el-button>
          </div>
        </div>

      <!--dierge -->
      <!--<div class="login_inner">-->
        <!--<h1>请您登录</h1>-->
      <!--<el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
        <!--<el-form-item label="用户名" prop="user">-->
          <!--<el-input type="text" v-model="loginForm.user" autocomplete="off" suffix-icon="el-icon-user-solid"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="密码" prop="pass">-->
          <!--<el-input type="password" v-model="loginForm.pass" autocomplete="off" suffix-icon="el-icon-view"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
          <!--<el-button type="primary" @click="sub">提交</el-button>-->
          <!--<el-button @click="res">重置</el-button>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
          return {
            user:'',
            pass:'',
            // loginForm: {
            //   user: '',
            //   pass: ''
            //
            // },
            // rules:{
            //   user: [
            //     {require:true,message:'请输入登录名称',trigger:"blur"},
            //     {min:3,max:10,message:"长度在3-10个字符",trigger:"blur"}
            //   ],
            //   pass: [
            //     {require:true,message:'请输入登录密码',trigger:"blur"},
            //     {min:6,max:15,message:"长度在6-15个字符",trigger:"blur"}
            //   ],
            // }

          }
          },
      methods:{
          sub(){
            this.$axios.post('/api',{user:this.user,pass:this.pass}).then((res)=>{
              console.log(res.data)
              if(res.data===1){
                localStorage.setItem('user',this.user);
                this.$router.push('/');
                // this.pass=JSON.parse(localStorage.getItem('pass'));

              }else if (res.data===-1){
                this.$notify({
                  showClose:true,
                  message: '出错了',
                  type: 'warning'
                });

              }
            }).catch(()=>{
              this.$notify({
                message: '服务器找不到了',
                type: 'warning'
              });
            })
          },
        res(){
            this.user='';
            this.pass=''

        }
      }
    }
</script>

<style scoped>
  .login_inner{width: 350px; height: 250px;margin: 200px auto;border: 2px solid #464bb2;border-radius:30px;text-align: center;padding: 0px 10px}
  h1{font-size: 20px; font-weight: bold;color: #005cbf;margin-top: 10px}
  .el-input{width:80%; margin: 20px 0px;border: #005cbf}
  .el-form-item{margin-top: 30px}
  .el-form-item .el-form-item__content{margin-left: 160px}
  .el-form-item{margin-left: -45px;text-align: right}
</style>
