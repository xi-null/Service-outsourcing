<template>
  <div class="home_box">
    <div class="nav_bar">
      <tabBar/>
    </div>
    <div class="search_img_box">
      <img src="../../assets/images/pic_banner.png" alt="" class="search_img">
    </div>
    <div class="search_input_box">
      <input 
        type="text"
        class="search_input"
        placeholder="请输入您要查询的关键词"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='请输入您要查询的关键词'"
        v-model="searchContent"
        >
      <button class="search_button" @click="search()">
        <div>
          <img src="../../assets/images/icon_search.png" alt="" class="icon_search">
        </div>
        <div class="search_content">搜索</div>
      </button>
    </div>
    <div class="words">
      <EchartsWord/>
    </div>  
  </div>
</template>

<script>
import tabBar from '@/components/tabBar.vue';
import EchartsWord from './EchartsWord';
export default {
  name: 'PolicyDemoHomeView',
  components:{
    tabBar,
    EchartsWord
  },
  data() {
    return {
      searchContent:''
    };
  },

  mounted() {
    
  },

  methods: {
    search(){
      if(this.searchContent === ''){
        alert('输入不能为空')
      }else{
          this.$router.push(
            {
              path: '/searchResult',
              query: {
                content: this.searchContent
              }
            }
          )
        }
      }
  },
};
</script>

<style lang="scss" scoped>
.home_box{
  height: 100vh!important;
  overflow: hidden;
}
.nav_bar{
  height: 5vh;
}
.words{
  margin-top: 2%;
  position: relative;
  left: 17%;
}
.icon_search {
  margin-top: 0.7vh;
  margin-left: 0.2vw;
}
input::-webkit-input-placeholder{   /* 使用webkit内核的浏览器 */
	position: relative;
  left: 3%;
}
input:-moz-placeholder{    /* Firefox版本4-18 */
	position: relative;
  left: 3%;
}              
input::-moz-placeholder{    /* Firefox版本19+ */
  position: relative;
  left: 3%;
}              
input:-ms-input-placeholder{   /* IE浏览器 */
	position: relative;
  left: 3%;
}  
.search_input{
  width: 37vw;
  height: 5vh;
  background: #FFFFFF;
  box-shadow: 0px 0px 5px 3px rgba(204,212,231,0.18);
  border-radius: 12px 0px 0px 12px;
  opacity: 1;
  border: none;
  outline: none;
  margin-left: 25vw;
}
.search_content {
  color: white;
  margin: auto;
}
.search_input_box {
  display: flex;
  width: 100vw;
  margin-top: 3vh;
  align-items: center;
  text-align: center;
}
.search_button{
  width: 6vw;
  height: 5vh;
  background: #3554E2;
  border-radius: 0px 12px 12px 0px;
  opacity: 1;
  border: none;
  outline: none;
  display: flex;
}
.nav_bar{
  width: 100%;
  height: 5vh;
}
.search_img{
  width: 100%;
  height: 25vh;
}
</style>