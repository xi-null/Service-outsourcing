<template>
<div class="login_box">
    <div class="left_box">
       <div class="logo">
        <Logo/>
        </div>
        <div class="msg">
        <el-form class="login-container" :model="form" :rules="rules" ref="form">
          <h1 class="title">注册您的账号：</h1>
          <el-form-item prop="userName">
            <el-input type="text" placeholder="电子邮箱" v-model="form.userName" autocomplete="off" class="msg_input"></el-input>
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-input type="password" placeholder="密码" v-model="form.userPassword" autocomplete="off" class="msg_input2"></el-input>
          </el-form-item>
          <el-form-item prop="userPassword1">
            <el-input type="password" placeholder="确认密码" v-model="form.userPassword1" autocomplete="off" class="msg_input2"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="sendEmail" class="sendEmail">发送验证码</el-button>
          </el-form-item>
          <el-form-item prop="vertifyCode">
           <el-input v-model="form.vertifyCode" placeholder="验证码" class="msg_input2"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doRegister" class="register_button">注册</el-button>
          </el-form-item>
        </el-form>
        </div>
    </div>
    <div class="right_box">
      <Right/>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/logo'
import Right from '@/components/right'
import {registerRequest, vetifyCode,sendEmail} from '../../api/user'
export default {
  name: 'PolicyDemoRegisterIt',
   components:{
    Logo,
    Right
  },
  data() {
    return {
      form: {
          userPassword: '',
          userPassword1: '',
          userRight: 0,
          vertifyCode: '',
          userName: ''
        },
        rules: {
          userName: [
            { required: true, message: '请输入电子邮箱', trigger: 'blur' },
            { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
          ],
          userPassword: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 4, max: 10, pattern: /^[a-zA-Z0-9_]+$/, message: '长度在 4 到 10 个字符且为数字和字母', trigger: 'blur' }
          ],
          userPassword1: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { min: 4, max: 10, pattern: /^[a-zA-Z0-9_]+$/, message: '长度在 4 到 10 个字符且为数字和字母', trigger: 'blur' }
          ],
          vertifyCode: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ]
        }
    };
  },

  mounted() {
    
  },

  methods: {
      doRegister() {
        if(this.form.userPassword!==this.form.userPassword1) {
            this.$message({
            message: '两次输入的密码不一致',
            type: 'error'
          })
          return false
        }
        else {
          const data ={
            email:this.form.userName,
            code:this.form.vertifyCode
          }
          vetifyCode(data).then(res=>{
            console.log(res)
            if(res.msgCode==='-10034'){
               alert( '验证码错误')
            }
            else{
              const data2 = {
                password:this.form.userPassword,
                username:this.form.userName
              }
              registerRequest(data2).then(res=>{
                console.log('registerRequest', res)
                if(res.msgCode=== '-10010'){
                    alert( '该账号已经被注册')
                }
                //注册成功，跳转到登录页面
              })
            }
          })
        }
    },
    sendEmail(){
      console.log('发送验证码')
      sendEmail(this.form.userName).then(res =>{
        console.log('tag', res)
        alert('验证码已经发送，请稍后')
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap-input-last{
  display: flex;
}
.sendEmail{
  font-size: 14px;
  background: #3554E2;
  border: none;
  margin-top: 2%!important;
  color: #FFFFFF;
  cursor: pointer;
}
.register_button{
  width: 25vw;
  height:4.5vh;
  background: #3554E2;
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 16px;
  border-radius: 57px 57px 57px 57px;
  opacity: 1;
  border: none;
  margin-top: 4.5%;
}
.msg_input {
  height:4.5vh;
  width: 25vw!important;
  margin-top: 5%;
}
.msg_input2{
  height:4.5vh;
  width: 25vw!important;
  margin-top: 3%!important;
}
.el-form-item {
  margin-bottom: 0!important;
}
.title{
  font-size: 32px;
  font-weight: bold;
  color: #1C1D23;
}
.msg {
  margin-left: 30.15%;
  margin-top: 9%;
  font-size: 32px;
}
.login_box {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.left_box {
  width: 62.92%;
  height: 100%;
}
.right_box{
  width: 37.08%;
  height: 100%;
}
input::-webkit-input-placeholder{   /* 使用webkit内核的浏览器 */
	position: relative;
  left: 5%;
}
input:-moz-placeholder{    /* Firefox版本4-18 */
	position: relative;
  left: 5%;
}              
input::-moz-placeholder{    /* Firefox版本19+ */
  position: relative;
  left: 5%;
}              
input:-ms-input-placeholder{   /* IE浏览器 */
	position: relative;
  left: 5%;
}    
</style>