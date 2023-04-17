<template>
  <div class="login_box">
    <div class="left_box">
       <div class="logo">
        <Logo/>
        </div>
        <div class="msg">
          <el-form :model="form" :rules="rules" ref="form">
            <div class="title">用户登录：</div>
            <el-form-item prop="username">
              <el-input type="text" placeholder="电子邮箱" v-model="form.username" autocomplete="off" class="msg_input" onfocus="this.placeholder=''"
                onblur="this.placeholder='电子邮箱'">
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" placeholder="密码" v-model="form.password" autocomplete="off" class="msg_input2"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='密码'"
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="Login" class="login_button">登录</el-button>
            </el-form-item>
              <div type="primary" @click="goRegister" class="registerLink">用户注册</div>
              <el-button type="text" @click="dialogVisible = true" class="modifyPassword">修改密码</el-button>
              <el-dialog
                title="修改密码"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
                <el-form class="login-container" :model="form" :rules="rules" ref="form">
                  <el-form-item prop="email">
                    <el-input type="text" placeholder="请输入邮箱" v-model="form.email" autocomplete="off" class="msg_input2" 
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='请输入邮箱'"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="userPassword">
                    <el-input type="password" placeholder="请输入新密码" v-model="form.userPassword" autocomplete="off" class="msg_input2"
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='请输入新密码'"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="userPassword1">
                    <el-input type="password" placeholder="请再次输入新密码" v-model="form.userPassword1" autocomplete="off" class="msg_input2"
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='请再次输入新密码'"
                    ></el-input>
                  </el-form-item>
                  <div class="input2">
                    <el-form-item prop="vertifyCode">
                    <el-input v-model="form.vertifyCode" placeholder="请输入邮箱内收到的验证码" class="msg_input3"/
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='请输入邮箱内收到的验证码'"
                    >
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="sendEmail" class="sendEmail">发送验证码</el-button>
                    </el-form-item>
                  </div>
                  <el-form-item>
                    <el-button type="primary" @click="doRegister" class="register_button">确定</el-button>
                  </el-form-item>
                </el-form>
              </el-dialog>
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
import {getIndustry,vetifyCode,sendEmail,modifyPassword} from '../../api/user'
import {loginRequest} from '../../api/user'
// import {registerRequest} from '../../api/user'
export default {
  name: 'PolicyDemoLoginIt',
  components:{
    Logo,
    Right
  },
  data() {
    return {
      form:{
        username:"",
        password:"",
        userPassword:"",
        userPassword1:"",
        vertifyCode:"",
        email:""
      },
      rules: {
          username: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 4, max: 30, pattern: /^[a-zA-Z0-9_]+$/, message: '长度在 4 到 30 个字符且为数字和字母', trigger: 'blur' }
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
        },
         dialogVisible: false
    };
  },

  mounted() {
    
  },

  methods: {
    goRegister () {
      this.$router.push({
        path: '/register'
      })
    },
    goHome(){
      this.$router.push({
        path: '/home'
      })
    },
     sendEmail(){
      sendEmail(this.form.email).then(res =>{
        console.log('tag', res)
        alert('验证码已经发送，请稍后')
      })
    },
    doRegister() {
        if(this.form.userPassword!==this.form.userPassword1) {
          console.log('this.infoList')
           alert('两次输入的密码不一致')
          return false
        }
        else {
          const data ={
            email:this.form.email,
            code:this.form.vertifyCode
          }
          vetifyCode(data).then(res=>{
            console.log(res)
            if(res.msgCode==='-10034'){
               alert( '验证码错误')
            }
            else{
              const params ={
                newPassword:this.form.userPassword
              }
              modifyPassword(this.userId,params).then(res=>{
                console.log('tag', res)
                alert('修改密码成功')
                this.dialogVisible = false
              })
            }
          })
        }
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    Login(){
       let datas = new FormData()
        datas.append('username', this.form.username)
        datas.append('password', this.form.password)
       loginRequest( datas ).then(res => {
        console.log('登录接口',res)
        if (res.errMsg === '请求成功.') {
          window.localStorage.setItem('token', res.item.access_token)
          window.localStorage.setItem('refresh_token', res.item.refresh_token)
          window.localStorage.setItem('userid', res.item.user_id)
          this.goHome()
        }
      })
       getIndustry().then(res=>{
        console.log(res)
       })
       
    }
  },
};
</script>

<style lang="scss" scoped>
.registerLink{
  font-size: 1.8vh;
  margin-top: 2%;
  color: #409EFF;
  cursor: pointer;
}
.register_button{
  width: 25vw!important;
  margin-top: 5%!important;
}
.msg_input3{
  width: 17vw;
  margin-right: 0.8vw;
}
.input2{
  margin-top: 5%!important;
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
.msg_input2{
  height:4.5vh;
  width: 25vw!important;
  margin-top: 5%!important;
}
.modifyPassword{
  color: #5A76E8;
  cursor: pointer;
}
.login_button{
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