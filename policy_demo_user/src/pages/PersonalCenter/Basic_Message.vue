<template>
  <div class="Basic_Message_box">
    <div class="left">
      <div class="msg">
        <el-form :rules="rules" label-width="100px" class="demo-ruleForm">
          <h1 class="title2">{{title}}</h1>
          <el-form-item label="公司名称"   class="msg_input">
            <el-input v-model="infoList.company" class="input_length"></el-input>
          </el-form-item>
          <el-form-item label="产品类别"  class="msg_input2">
            <el-cascader v-model="infoList.industryCode" :options="options" class="input_length"></el-cascader>
          </el-form-item>
          <el-form-item label="所在地区" class="msg_input2">
            <el-cascader v-model="infoList.districtCode" :options="options2" class="input_length"></el-cascader>
          </el-form-item>
          <el-form-item label="注册资本"  class="msg_input2">
            <el-input v-model="infoList.fund" class="input_length"></el-input>
          </el-form-item>
          <el-form-item label="成立时间"  class="msg_input2">
            <el-form-item >
              <el-date-picker type="date" placeholder="请选择企业的成立时间" v-model="infoList.foundDate" class="input_length"></el-date-picker>
            </el-form-item>
          </el-form-item>
          <div class="email_box">
            <div class="email_title">
              电子邮箱：
            </div>
            <div class="email_message">
              {{infoList.email}}
            </div>
            <el-button type="text" @click="dialogVisible = true" class="modifyPassword">修改密码</el-button>
            <el-dialog
              title="修改密码"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">
              <el-form class="login-container" :model="form" :rules="rules" ref="form">
                <el-form-item prop="userPassword">
                  <el-input type="password" placeholder="请输入新密码" v-model="form.userPassword" autocomplete="off" class="msg_input2"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='请输入新密码'"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="userPassword1">
                  <el-input type="password" placeholder="请再次输入新密码" v-model="form.userPassword1" autocomplete="off" class="msg_input2"onfocus="this.placeholder=''"
                    onblur="this.placeholder='请再次输入新密码'"></el-input>
                </el-form-item>
                <div class="input2">
                  <el-form-item prop="vertifyCode">
                  <el-input v-model="form.vertifyCode" placeholder="请输入邮箱内收到的验证码" class="msg_input3" onfocus="this.placeholder=''"
                    onblur="this.placeholder='请输入邮箱内收到的验证码'"/>
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
          </div>
          <el-button type="primary2" @click="ConfirmIt" class="confirm_button" >保存</el-button>
        </el-form>
        </div>
    </div>
    <div class="right"> 
      <img src="../../assets/images/personalSlice/Group.png" alt="" class="Basic_Message_box_img">
    </div>
  </div>
</template>

<script>
import { getIndustry, getDistrict, messageRequest,getInfo ,vetifyCode,sendEmail,modifyPassword} from '../../api/user'
export default {
  name: 'PolicyDemoBasicMessage',

  data() {
    return {
      userId:'',
      form: {
          userPassword: '',
          userPassword1: '',
          vertifyCode: '',
          userName: ''
      },
      rules:{
        date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
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
      options:[],
      options2:[],
      email:'',
      infoList:[],
      dialogVisible: false
    };
  },
  created() {
    this.userId = window.localStorage.getItem('userid')
    getInfo(this.userId).then(res=>{
      this.infoList = res.item.userInfo
    })
    this.title = this.$route.meta.title
    getIndustry().then(res => {
      console.log('tag', res)
        this.options = res.item.industry_category.map(({className,category,classId})=>({
          value:classId,
          label:className,
          children:category.map(({industryCategory,id})=>({
            value:id,
            label:industryCategory
          }))
        }))
    })
    getDistrict().then(res =>{
      this.options2 = res.item.industry_category.map(({province,citys,provinceId}) => ({
        value:provinceId,
        label:province,
        children:citys.map(({city,areas,cityId}) =>({
          value:cityId,
          label:city,
          children:areas.map(({area,areaId}) =>({
            value:areaId,
            label:area
          }))
        }))
      }))
    })
  },

  methods: {
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    ConfirmIt(){
      let params = {
        companyName: this.infoList.company,
        foundDate: 1611140853,
        fund: this.infoList.fund,
        //类型只返回最外层code
        industryCategory: this.infoList.industryCode[1],
        //地区返回最里层code
        district:this.infoList.districtCode[2]
      }
      messageRequest(this.userId,params).then(res => {
        getInfo(this.userId).then(res=>{
        this.infoList = res.item.userInfo
      })
      })
    },
     doRegister() {
        if(this.form.userPassword!==this.form.userPassword1) {
          console.log('this.infoList')
           alert('两次输入的密码不一致')
          return false
        }
        else {
          console.log('this.infoList.email')
          const data ={
            email:this.infoList.email,
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
    sendEmail(){
      sendEmail(this.infoList.email).then(res =>{
        console.log('tag', res)
        alert('验证码已经发送，请稍后')
      })
    }
  },
};
</script>

<style lang="scss" scoped>
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
.email_title{
  margin-top: 1.6vh;
}
.email_message{
  margin-top: 1.6vh;
}
.Basic_Message_box{
  width: 50vw;
  height: 100vh;
  display: flex;
}
.left {
  margin-left:10%;
  margin-top: 5%;
}
.Basic_Message_box_img {
  margin-left: 50%;
  margin-top: 40%;
  width: 35vw;
  height: 58vh;
}
.modifyPassword{
  color: #5A76E8;
  margin-left: 5%;
}
.email_box{
  display: flex;
  margin-left:10%;
  margin-top: 5%;
  font-size: 14px;
  color: #606266;
}
.confirm_button{
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
  margin-left: 3.2%;
}
.input_length {
  width: 25vw!important;
}
.msg_input {
  height:4.5vh;
  margin-top: 5%;
}
.msg_input2{
  height:4.5vh;
  margin-top: 3.5%!important;
}
.el-form-item {
  margin-bottom: 0!important;
}
.title{
  margin-left: 3.2%;
  font-size: 32px;
  font-weight: bold;
  color: #1C1D23;
}
.title2{
  margin-left: 3.2%;
  font-size: 16px;
  font-weight: bold;
  color: #1C1D23;
}
.complete_box {
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