<template>
  <div class="nav_bar">
    <div class="header">
      <div class="logo">
        <img src="../assets/images/logo_40px.png" alt="" class="logo_img">
      </div>
      <div class="demo_name">策查到底</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PolicyDemoTabBar',

  data() {
    return {
      nav_list:[
        {label:'个人中心',id:0},
        // {label:'信息',id:1}
      ]
    };
  },

  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.nav_list_item {
  cursor: pointer;
  width: 12vh;
  color: #555761;
  font-size: 16px;
}
.nav_list{
  display: flex;
  align-items: center;
  margin-left: 60%;
}
.nav_bar {
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 8px 0px rgba(173,173,173,0.21);
  display: flex;
}
.logo{
  margin-top: 1%;
}
.logo_img {
  width: 5vh;
  height: 5vh;
}
.header {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 2.08%;
}
.demo_name {
  width: 29vh;
  font-family: LogoFont;
  color: #2740BE;
  font-size: 2vh;
  margin-left: 1.01%;
}
</style>