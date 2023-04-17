<template>
<div class="complete_box">
    <div class="left_box">
       <div class="logo">
        <Logo/>
        </div>
        <div class="msg">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <h1 class="title">完善个人信息：</h1>
          <el-form-item label="公司名称" prop="name" required class="msg_input">
            <el-input v-model="ruleForm.name" class="input_length"></el-input>
          </el-form-item>
          <el-form-item label="产品类别" prop="category" required class="msg_input2">
            <el-cascader v-model="ruleForm.category" :options="options" @change="handleChange" class="input_length"></el-cascader>
          </el-form-item>
          <el-form-item label="所在地区" prop="district" required class="msg_input2">
            <el-cascader v-model="ruleForm.district" :options="options2" @change="handleChange" class="input_length"></el-cascader>
          </el-form-item>
          <el-form-item label="注册资本" prop="money" required class="msg_input2">
            <el-input v-model="ruleForm.money" class="input_length"></el-input>
          </el-form-item>
          <el-form-item label="成立时间" required class="msg_input2">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="请选择企业的成立时间" v-model="ruleForm.date" class="input_length"></el-date-picker>
            </el-form-item>
          </el-form-item>
          <el-button type="primary" @click="ConfirmIt" class="confirm_button">确定</el-button>
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
import { getIndustry, getDistrict, messageRequest } from '../../api/user'
export default {
  name: 'PolicyDemoCompleteMessage',
  components:{
    Logo,
    Right
  },
  data() {
    return {
      ruleForm:{
        name:'',
        date:'',
        category:'',
        district:'',
        money:''
      },
      rules:{
        date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
      },
      options:[],
      options2:[]
    };
  },

  mounted() {
    getIndustry().then(res => {
      console.log('tag', res)
        this.options = res.item.industry_category.map(({className,category})=>({
          value:className,
          label:className,
          children:category.map(({industryCategory})=>({
            value:industryCategory,
            label:industryCategory
          }))
        }))
    })
    getDistrict().then(res =>{
      console.log(res)
      this.options2 = res.item.industry_category.map(({province,citys}) => ({
        value:province,
        label:province,
        children:citys.map(({city,areas}) =>({
          value:city,
          label:city,
          children:areas.map(({area}) =>({
            value:area,
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
      console.log('foundDate', this.ruleForm.category[0] + this.ruleForm.category[1])
      let params = {
        companyName: this.ruleForm.name,
        foundDate: this.ruleForm.date.getTime()/1000,
        fund: this.ruleForm.money,
        industryCategory: this.ruleForm.category[0] + this.ruleForm.category[1],
        district: this.ruleForm.district[0]+this.ruleForm.district[1]+this.ruleForm.district[2]
      }
      console.log('tag', params)
      messageRequest(userId,params).then(res => {
        console.log(res)
      })
    }
  },
};
</script>

<style lang="scss" scoped>
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
.msg {
  margin-left: 29.15%;
  margin-top: 9%;
  font-size: 32px;
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