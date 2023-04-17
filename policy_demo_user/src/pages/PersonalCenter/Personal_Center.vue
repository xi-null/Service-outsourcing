<template>
  <div>
    <div class="title">
      <TabBar/>
    </div>
    <div class="left">
      <div class="content_title_box">
        <span class="content_title">个人中心</span>
      </div>
      <div class="line"/>
      <div>
        <el-tabs type="border-card" :tab-position="tabPosition"> 
        <el-tab-pane class="el-tab-pane">
          <span slot="label"><img src="../../assets/images/personalSlice/user_icon_info_on.png" alt=""> 基础信息</span>
          <div class="basic_message">
           <Basic_Message/>
          </div>
        </el-tab-pane>
         <el-tab-pane>
          <span slot="label"><img src="../../assets/images/personalSlice/user_icon_policystar_off.png" alt=""> 政策收藏</span>
          <My_Store/>
        </el-tab-pane>
      </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/tabBar'
import Basic_Message from './Basic_Message'
import My_Store from './My_Store'
export default {
  name: 'PolicyDemoPersonalCenter',
  components:{
    TabBar,
    Basic_Message,
    My_Store
  },
  data() {
    return {
      tabPosition:'left'
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.content_title_box{
  font-weight: bold;
  color: #2E2F38;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 2%;
  height: 2vh;
}
.basic_message{
  width: 100%;
  height: 100%;
}
.el-tabs{
  height: 90vh;
}
.is-left {
  height: 17vh!important;
  width: 15vw;
}
</style>