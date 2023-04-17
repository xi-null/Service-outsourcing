<template>
  <div>
    <div class="progress" v-for="(item,index) in dataList" :key="item.label">
      <div class="progress_content">
        <div class="progress_position" :style=" {backgroundColor:colorList[index] }">{{index+1}}</div>
        <div class="progress_titie">{{item.label}}</div>
      </div>
      <el-progress :percentage="item.value" :color="colorList[index]" :show-text=false :stroke-width=6></el-progress>
    </div>
  </div>
</template>

<script>
import {getSearch} from '../../api/user'
export default {
  name: 'PolicyDemoManagerTopChart',

  data() {
    return {
      colorList:['#3554E2','#5E8FFE','#8775FF','#17D1EB','#52B8FF','#1DCCB7','#1DCC39','#C2E82E','#FED363','#FFE600'],
      dataList:[
      //   {
      //   "name": "福州",
      //   "value": 23.5
      // },
      // {
      //   "name": "政府",
      //   "value": 72
      // },
      // {
      //   "name": "福建",
      //   "value": 11
      // },
      // {
      //   "name": "图解",
      //   "value": 85
      // },
      // {
      //   "name": "新能源",
      //   "value": 38
      // }
      ]
    };
  },

  mounted() {
    getSearch().then(res=>{
      console.log('tag',res)
      this.dataList = res.item.top10
    })
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.progress_content{
  margin-bottom: 0.5vw;
}
.progress_titie{
  font-size: 1.4vh;
  color: #868A93;
  height: 1vw;
  line-height: 1vw;
  margin-left: 0.5vw;
}
.progress_position{
  width: 1vw;
  height: 1vw;
  display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: center;
  line-height: 1vw;
  color: #FFFFFF;
}
.progress_content{
  display: flex;
  margin-bottom: 4%;
}
.progress{
  margin-top: 4%;
  width: 17vw;
}
</style>