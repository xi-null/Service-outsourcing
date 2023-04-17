<template>
  <div>
     <div class="msg">
        <el-form :rules="rules" label-width="100px" class="demo-ruleForm">
          <h1 class="title2">{{title}}</h1>
          <el-form-item label="公司名称"   class="msg_input">
            <el-input v-model="infoList.company" class="input_length"></el-input>
          </el-form-item>
          <el-form-item label="产品类别"  class="msg_input2">
            <el-cascader v-model="infoList.industryCode" :options="options" @change="handleChange" class="input_length"></el-cascader>
          </el-form-item>
          <el-form-item label="所在地区" class="msg_input2">
            <el-cascader v-model="infoList.districtCode" :options="options2" @change="handleChange" class="input_length"></el-cascader>
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
            <div class="modifyPassword">修改密码</div>
          </div>
          <el-button type="primary2" @click="ConfirmIt" class="confirm_button" >保存</el-button>
        </el-form>
        </div>
  </div>
</template>

<script>
import { getIndustry, getDistrict, messageRequest,getInfo } from '../api/user'
export default {
  name: 'PolicyDemoInput',

  data() {
    return {
      rules:{
        date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ]
      },
      options:[],
      options2:[],
      email:'',
      infoList:[]
    };
  },

 created() {
    this.userId = window.localStorage.getItem('userid')
    getInfo(this.userId).then(res=>{
      console.log('getInfo',res)
      this.infoList = res.item.userInfo
      console.log(this.infoList.districtCode)
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
      console.log(res)
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
    handleChange(value) {
        console.log(value); 
      },
    ConfirmIt(){
      let userId = window.localStorage.getItem('userid')
      let params = {
        companyName: this.infoList.company,
        foundDate: 1682524800,
        fund: this.infoList.fund,
        //类型只返回最外层code
        industryCategory: this.infoList.industryCode[1],
        //地区返回最里层code
        district:this.infoList.districtCode[2]
      }
      console.log('tag', params)
      messageRequest(userId,params).then(res => {
        console.log('messageRequest',res)
        getInfo(this.userId).then(res=>{
        console.log('tag2',res)
        this.infoList = res.item.userInfo
      })
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.modifyPassword{
  color: #5A76E8;
}
.email_box{
  display: flex;
  margin-left: 3.2%;
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