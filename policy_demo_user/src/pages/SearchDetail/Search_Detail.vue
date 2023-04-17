<template>
  <div>
    <div class="tabBar"><tabBar/></div>
    <div class="detail_box">
      <div class="title_box">
        <div class="top">
              <div class="content_title">
                {{policyDetail.policyTitle}}
              </div>
              <div class="content_type">
                <div class="content_typename"> {{policyDetail.policyGrade}}</div>
              </div>
              <div class="readNum">
                <div class="readNum_iconbox"><img src="../../assets/images/Vector.png" alt=""></div>
                <div class="readNum_num">阅读量：{{policyDetail.readCount}}</div>
              </div>
            </div>
            <div class="buttom">
              <div class="content_source">
                <div class="content_source_icon"><img src="../../assets/images/icon_agency.png" alt=""></div>
                  <span class="content_source_name">发文机构：</span>
                  <span class="content_source_name2">{{policyDetail.policySource}}</span>
                  <span class="line2">|</span>
                   <span class="store_img_box" @click="storePolicy(policyDetail.policyId)" v-if="policyDetail.collected === false">
                      <img src="../../assets/images/policyDetail/detail_icon_star_off.png" alt="" class="store_img">
                   </span>
                  <span class="store_img_box" @click="cancleStorePolicy(policyDetail.policyId)" v-if="policyDetail.collected">
                    <img src="../../assets/images/policyDetail/detail_icon_star_on.png" alt="" class="store_img">
                  </span>
              </div>
              <div class="content_time">
                {{policyDetail.pubTime}}
              </div>
            </div>
      </div>
      <div class="content_box">
        <div class="content_box_title">
          正文详情
        </div>
        <div class="line"></div>
        <div class="content_box_detail">
          <div class="content_box_details" v-if="policyDetail.policyBody">
            {{policyDetail.policyBody}}
          </div>
          <div class="content_box_details" v-else>
            <el-empty description="政策正文内容为空"></el-empty>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import {getPolicyDetail,storePolicy,cancleStore} from '../../api/user'
import tabBar from '@/components/tabBar.vue'
export default {
  name: 'PolicyDemoSearchDetail',
  components:{
    tabBar
  },
  data() {
    return {
      policyDetail:{},
      policyId:'',
      userId:''
    };
  },

  created() {
    this.userId = window.localStorage.getItem('userid')
    this.policyId = this.$route.query.policyId
    this.getPolicyDetail()
  },

  methods: {
    getPolicyDetail(){
       getPolicyDetail(this.policyId).then(res=>{
        console.log(res)
        this.policyDetail = res.item.policy
      })
    },
    storePolicy(id){
      storePolicy(this.userId,id).then(res=>{
        console.log('store',res)
        this.policyDetail.collected = true
      })
    },
    cancleStorePolicy(id){
      cancleStore(this.userId,id).then(res=>{
        console.log('delete',res)
        this.policyDetail.collected = false
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.store_img_box{
  cursor: pointer;
}
.store_img{
  margin-left: 1vw;
  width: 1.5vw;
  height: 1.5vw;
}
.line2{
  color: #A7A9B0;width: 3px;
height: 14px;
margin-left: 2%;
}
::-webkit-scrollbar {
            display: none;
    }
.content_box_details{
  width: 60vw;
  margin: auto;
  padding-top: 2vh;
  overflow-y: scroll;
}
.content_box_title{
  color: #888A92;
  margin-left: 2vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
}
.line{
  width: 65vw;
  background-color: #EBEBED;
  height: 0.1vh;
}
.content_box{
  width: 65vw;
  margin: auto;
  margin-top: 2vh;
  background: #FFFFFF;
  box-shadow: 0px 0px 5px 2px rgba(204,212,231,0.1);
  border-radius: 12px 12px 12px 12px;
}
.tabBar{
  height: 6vh;
}
.detail_box{
  background: #F7F8FD;
 padding-top: 3vh;
  width: 100vw;
  height: 91vh;
}
.title_box{
  width: 65vw;
  height: 10vh;
  margin: auto;
  background-color: #fff;
}
.content_time{
  margin-left: 2%;
  color: #888A92;
   font-size: 0.95vw;
}
.content_item{
  margin-top: 2%;
}
.content_source_name{
  color: #5874F2;
}
.content_source{
  display: flex;
  color: #888A92;
   font-size: 0.95vw;
   width: 53.5vw;
}
.buttom{
  display: flex;
  margin-top: 2vh;
  margin-left: 2%;
}
.readNum{
  display: flex;
  width: 11vw;
  margin-left: 42%;
}

.readNum_num{
   margin-left: 2%;
   color: #888A92;
   font-size: 0.95vw;
}
.top{
  display: flex;
  padding-top: 1.3vh;
  margin-top: 0.8%;
  margin-left: 2%;
}
.content_title{
  width: 25vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.content_type{
  margin-left: 1%;
  width: 3vw;
  height: 2.8vh;
  color: white;
  background: #5874F2;
  border-radius: 8px 8px 8px 8px;
  opacity: 1;
}
.content_typename{
  margin-top: 0.2vh;
  margin-left: 0.4vw;
}
</style>