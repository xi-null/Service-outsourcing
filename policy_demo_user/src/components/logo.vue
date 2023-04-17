<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/images/logo_40px.png" alt="" class="logo_img">
    </div>
    <div class="demo_name">策查到底</div>
  </div>
</template>

<script>
export default {
  name: 'DemoLogo',
  methods:{
  
  }
};
</script>

<style lang="scss" scoped>
.logo{
  margin-left: 3.26%;
  margin-top: 3.7%;
}
.logo_img {
  width: 50px;
  height: 50px;
}
.header {
  display: flex;
  height: 100%;
}
.demo_name {
  font-family: LogoFont;
  color: #2740BE;
  font-size: 2vh;
  margin-left: 2.01%;
  margin-top: 4.5%;
}
</style>