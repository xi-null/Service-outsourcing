<template>
<div>
  <div class="store_box">
      <div class="title">
        <div class="title_content">
          政策收藏
        </div>
      </div>
      <div class="tabBar">
        <div class="tabBarItem1">文件名称</div>
        <div class="tabBarItem2">发文机构</div>
        <div class="tabBarItem3">发布时间</div>
      </div>
      <div class="content_box">
        <div class="content_item" v-for="item in storeList" :key="item.id">
          <div class="content_item1" @click="goDetails(item.policyId)">{{item.policyTitle}}</div>
          <div class="content_item2">{{item.policySource}}</div>
          <div class="content_item3">{{item.pubTime}}</div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import {getStore} from '../../api/user'
export default {
  name: 'PolicyDemoMyStore',

  data() {
    return {
      userId:'',
      storeList:[]
    };
  },

  mounted() {
    this.userId = window.localStorage.getItem('userid')
    getStore(this.userId).then(res=>{
      console.log('ee',res)
      this.storeList = res.item.policy
    })
  },

  methods: {
    goDetails(id){
      this.$router.push(
        {
          path: '/searchDetail',
          query: {
            policyId: id
          }
        }
      )
    }
  },
};
</script>

<style lang="scss" scoped>
.content_item{
  display: flex;
  margin-top: 2%;
  height: 4vh;
}
.content_item1{
  cursor: pointer;
  width: 43vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 1%;
}
.content_item2{
  width: 10vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 4%;
}
.content_item3{
  margin-left: 14%;
}
.tabBarItem1{
  margin-left: 2%;
  margin-top: 1%;
}
.tabBarItem2 {
  margin-left: 52%;
  margin-top: 1%;
}
.tabBarItem3{
  margin-left: 21%;
  margin-top: 1%;
}
.title_content{
  padding-top: 1%;
  margin-left: 5%;
}
.tabBar{
  background: #F8F8FA;
  display: flex;
  width: 100%;
  height: 6%;
  align-content: center;
}
.store_box{
  margin: auto;
  width: 80vw;
  height: 85vh;
  background: #FFFFFF;
  box-shadow: 0px 1px 8px 0px rgba(173,173,173,0.21);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
}
.title{
  width: 100%;
  height: 8%;
  font-size: 2.5vh;
  font-weight: bold;
  color: #2E2F38;
}
</style>