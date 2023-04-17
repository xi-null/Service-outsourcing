<template>
  <div class="left">
    <div class="left_title1">
          管理后台
        </div>
        <div class="line"></div>
        <div class="left_title_type">
          <img src="../../assets/images/Manager_slices/dashboard_icon_Chart.png" alt="" class="left_title_type_img">
          <div class="left_title_typename">数据中心</div>
        </div>
        <div class="left_title2">
          我的
        </div>
        <div class="line"></div>
        <div class="left_title_type">
          <img src="../../assets/images/Manager_slices/dashboard_icon_signout.png" alt="" class="left_title_type_img">
          <div class="left_title_typename" @click="loginOut()">退出登录</div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'PolicyDemoManagerLeftBar',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    loginOut(){
        this.$router.push({
        path: '/'
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.left_title_type_img{
  width: 1.5vw;
  height: 3.2vh;
  margin-top: 2vh;
  margin-left: 2vw;
}
.left_title_typename{
  margin-top: 2vh;
  margin-left: 0.2vw;
  font-weight: 500;
  color: #41434C;
}
.left_title_type{
  width: 18vw;
  height: 7vh;
  margin: auto;
  margin-top: 2vh;
  display: flex;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px 2px rgba(236,236,238,0.51);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
}
.left_title1{
  font-weight: bold;
  color: #2E2F38;
  font-size: 2.3vh;
  margin-top: 2.5vh;
  margin-left: 2vw;
}
.left_title2{
  font-weight: bold;
  color: #2E2F38;
  font-size: 2.3vh;
  margin-top: 7vh;
  margin-left: 2vw;
}
.line{
  margin-top: 2.5vh;
  width: 100%;
  background-color: #EBEBED;
  height: 0.1vh;
}
.left{
  width: 100%;
  height: 100%;
}
</style>