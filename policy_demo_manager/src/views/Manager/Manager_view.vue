<template>
  <div class="manager">
    <div class="tabBar">
      <tabBar/>
    </div>
    <div class="manager_box">
      <div class="left">
        <LeftBar/>
      </div>
      <div class="right">
        <div class="right_box">
          <div class="first_storey">
            <div class="right_title">
              数据中心
            </div>
            <div class="right_button_box"> 
              <el-radio-group v-model="radio1" size="small" @input="changeIt"> 
                <el-radio-button label="今日"></el-radio-button>
                <el-radio-button label="近一周"></el-radio-button>
                <el-radio-button label="近一个月"></el-radio-button>
                <el-radio-button label="近一年"></el-radio-button>
              </el-radio-group>
            </div>  
          </div>
            <div class="second_storey">
              <div class="num_box">
                <div class="register_box">
                  <div class="register_box_title">累计注册量</div>
                  <div class="register_box_num">{{registerNum}}</div>
                  <div>
                    <img src="../../assets/images/Manager_slices/dashboard_icon_signincount.png" alt="" class="register_box_img">
                  </div>
                </div>
                <div class="visit_box">
                  <div class="visit_box_title">{{radio1}}访问量</div>
                  <div class="visitr_box_num">{{accessNum}}</div>
                  <div>
                    <img src="../../assets/images/Manager_slices/dashboard_icon_viewcount.png" alt="" class="vistit_box_img">
                  </div>
                </div>
                <div class="search_box">
                  <div class="search_box_title">{{radio1}}搜索量</div>
                  <div class="search_box_num">{{SearchNum}}</div>
                  <div>
                    <img src="../../assets/images/Manager_slices/dashboard_icon_searchcount.png" alt="" class="search_box_img">
                  </div>
                </div>
              </div>
            </div>
            <div class="third_storey">
              <div class="echart_box">
                <div class="echart_box_chart"><ManagerEchart/></div>
              </div>
              <div class="top_box">
                <div class="top_box_title">搜索关键词排行榜TOP10</div>
                  <div class="top_box_content"><TopChart/></div>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import {getAccess,getSearchNum,getRegister} from '../../api/user'
import tabBar from '@/components/tabBar.vue';
import LeftBar from './LeftBar.vue';
import ManagerEchart from './ManagerEchart.vue'
import TopChart from './TopChart.vue'
export default {
  name: 'PolicyDemoManagerManagerView',
  components:{
    tabBar,
    LeftBar,
    ManagerEchart,
    TopChart
  },
  data() {
    return {
      radio1:'今日',
      registerNum:0,
      SearchNum:0,
      accessNum:0
    };
  },

  mounted() {
    this.getRegisterNum()
    this.getSearchNum()
    this.getAccess()
  },

  methods: {
    changeIt(value){
      console.log(value)
      var type = 1
      if(value === '今日'){
        type = 1
      }else if(value === '近一周'){
        type = 2
      }else if(value === '近一个月'){
        type = 3
      }else if(value === '近一年'){
        type = 4
      }
      getAccess(type).then(res=>{
        console.log(res)
        this.accessNum = res.item.count
      })
      getSearchNum(type).then(res=>{
         this.SearchNum = res.item.count
      })
    },
    getAccess(){
      const type = 1
      getAccess(type).then(res=>{
         this.accessNum = res.item.count
      })
    },
    getSearchNum(){
      const type = 1
      getSearchNum(type).then(res=>{
        this.SearchNum = res.item.count
      })
    },
    getRegisterNum(){
      getRegister().then(res=>{
        console.log(res)
        this.registerNum = res.item.count
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.echart_box_chart{
  width: 90%;
  margin: auto;
  margin-top: 2vh;
}
.top_box{
    background-color: #fff;
    margin-left: 4%;
    width: 21vw;
    height: 65vh;
}
.top_box_content{
 margin-left: 4%;
 margin-top: 2vh;
}
.top_box_title{
  color: #808297;
  font-size: 1.8vh;
  font-weight: bold;
  margin-top: 2vh;
  margin-left: 4%;
}
.third_storey{
  margin-top: 3%;
}
.echart_box{
  width: 42vw;
  height: 65vh;
  background-color: #fff;
}
.register_box_title,.visit_box_title,.search_box_title{
  font-weight: 500;
  color: #808297;
  font-size: 2.2vh;
  margin-left: 2vw;
  margin-top: 2.5vh;
}
.register_box_num,.visitr_box_num,.search_box_num{
  margin-left: 2vw;
  margin-top: 1.8vh;
  font-weight: 400;
  color: #000000;
}
.register_box_img,.vistit_box_img,.search_box_img{
  position: relative;
  left: 12vw;
  top:-10vh;
  width: 11.5vh;
  height: 14.5vh;
}
.register_box{
  margin-top: 2vh;
  height: 14vh;
  width: 18vw;
  background: linear-gradient(225deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%);
  box-shadow: 0px 5px 20px -20px rgba(110,161,255,0.05);
  border-radius: 10px 10px 10px 10px;
  opacity: 1;
  border: 2px solid;
  border-image: linear-gradient(225deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)) 2 2;
}
.visit_box,.search_box{
  margin-top: 2vh;
  height: 14vh;
  width: 18vw;
  background: linear-gradient(225deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%);
  box-shadow: 0px 5px 20px -20px rgba(110,161,255,0.05);
  border-radius: 10px 10px 10px 10px;
  opacity: 1;
  border: 2px solid;
  border-image: linear-gradient(225deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)) 2 2;
  margin-left: 5vw;
}
.manager{
  width: 100vw;
  height: 100vh;
}
.right_button_box{
  display: flex;
  margin-left: 30vw;
}
.right_button_item{
  margin-left: 1vw;
}
.right_box{
  width: 70vw;
  height: 65vh;
  padding-top: 2vh;
  margin: auto;
  margin-top: 2vh;
}
.right_title{
  font-size: 2.1vh;
  font-weight: bold;
  color: #000000;
}
.right_button_item{
  cursor: pointer;
  background: #F3F3F3;
  border-radius: 22px 22px 22px 22px;
  border: none;
  outline: none;
}
.right_button_item_active{
  background: #3358FF;
  border-radius: 22px 22px 22px 22px;
}
.first_storey{
  display: flex;
}
.second_storey{
  display: flex;
}
.third_storey{
  display: flex;
}
.num_box{
  display: flex;
}
.manager_box{
  display: flex;
}
.left{
  width: 20vw;
  height: 90vh;
  background: #FAFBFF;
}
.right{
  width: 80vw;
  height: 95vh;
  background: #FAFBFF;
}
.tabBar{
  width: 100vw;
  height: 7vh;
}
</style>