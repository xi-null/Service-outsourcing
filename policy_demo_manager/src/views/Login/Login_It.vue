<template>
  <div class="login_box">
    <div class="left_box">
       <div class="logo">
        <Logo/>
        </div>
        <div class="msg">
          <el-form :model="form" :rules="rules" ref="form">
            <div class="title">管理后台登录：</div>
            <el-form-item prop="username">
              <el-input type="text" placeholder="电子邮箱" v-model="form.username" autocomplete="off" class="msg_input"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" placeholder="密码" v-model="form.password" autocomplete="off" class="msg_input2"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="Login" class="login_button">登录</el-button>
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
import {loginRequest} from '../../api/user'
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
        password:""
      },
      rules: {
          username: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 4, max: 30, pattern: /^[a-zA-Z0-9_]+$/, message: '长度在 4 到 30个字符且为数字和字母', trigger: 'blur' }
          ]
        }
    };
  },

  mounted() {
    
  },

  methods: {
    goRegister () {
      this.$router.push({
        path: '/Manager_view'
      })
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
          this.goRegister()
        }
      })
       
    }
  },
};
</script>

<style lang="scss" scoped>
button:hover {
  background: #3554E2!important;
}
button:visited {
  background: #3554E2!important;
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