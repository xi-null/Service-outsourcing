<template>
  <div>
    <div class="titleBar">
      <tabBar/>
    </div>
    <div class="searchBar">
    <div class="search_input_box">
      <input 
        type="text"
        class="search_input"
        placeholder="请输入您要查询的关键词"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='请输入您要查询的关键词'"
        v-model="content"
        >
      <button class="search_button" @click="search()">
        <div>
          <img src="../../assets/images/icon_search.png" alt="" class="icon_search">
        </div>
        <div class="search_content">搜索</div>
      </button>
    </div>
    </div>
    <div class="resultBar">
      <div class="total_box">
        <div class="total_num">为您找到相关政策约 <span class="num">{{total}} </span>条</div>
      </div>
      <div class="type_box">
      <div class="type_box_type">
        <div class="policy_type">政策级别：</div>
          <div>
            <el-radio-group v-model="radio" size="medium">
              <el-radio-button label="全部" ></el-radio-button>
              <el-radio-button label="国家级"></el-radio-button>
              <el-radio-button label="县级"></el-radio-button>
              <el-radio-button label="市级"></el-radio-button>
              <el-radio-button label="乡县级"></el-radio-button>
            </el-radio-group>
          </div>
          <div class="time_type">筛选时间：</div>
          <div class="block">
            <el-date-picker
              v-model="value2"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </div>
      </div>   
      </div>
      <div class="content_box" v-if="total">
        <div  v-infinite-scroll="loadMore" infinite-scroll-disabled="disabled" infinite-scroll-distance="5">
          <div class="content_item" v-for="(item,index) in resultList" :key="index">
            <div class="top">
              <div class="content_title" @click="goDetails(item.policyId)">
                {{item.policyTitle}}
              </div>
              <div class="content_type">
                <div class="content_typename"> {{item.policyGrade}}</div>
              </div>
              <div class="readNum">
                <div class="readNum_iconbox"><img src="../../assets/images/Vector.png" alt=""></div>
                <div class="readNum_num">阅读量：{{item.readCount}}</div>
              </div>
            </div>
            <div class="buttom">
              <div class="infor_bar">
              <div class="content_source">
                <div class="content_source_icon"><img src="../../assets/images/icon_agency.png" alt=""></div>
                  <span class="content_source_name">发文机构：</span>
                  <span class="content_source_name2" v-if="item.policySource">{{item.policySource}}</span>
                  <span class="content_source_name2" v-else>暂无发文机构信息</span>
              </div>
              <div class="content_province">
                  <div class="content_source_icon"><img src="../../assets/images/icon_location.png" alt=""></div>
                <span class="content_source_name">地区：</span>
                  <span class="content_source_name2" v-if="item.province"> {{item.province}}</span>
                  <span class="content_source_name2" v-else>暂无发文地区信息</span>
              </div>
              </div>
              <div class="content_time">
                {{item.pubTime}}
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>  
        <div v-if="loading" style="margin-top:10px;" class="loading">
                  <span></span>
        </div>
        <p v-if="noMore">没有更多了</p>
      </div>
      <div class="content_box" v-else><el-empty description="找不到相关政策内容"></el-empty></div>
    </div>
  </div>
</template>

<script>
import {getPolicy} from '../../api/user'
import tabBar from '@/components/tabBar.vue';
export default {
  name: 'PolicyDemoSearchResult',
  components:{
    tabBar
  },
  data() {
    return {
      count:5,
      total:0,
      loading: false,
      resultList:[],
      content:'',
      radio:'全部',
       pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
       },
      value1: '',
      value2: '',
      pageNum:1,
      pageSize:50,
      start:'',
      end:''
    };
  },
  
  watch: { 
      radio(newValue) {
        console.log(newValue)
        this.search()
      },
      value2(newValue,oldVue) {
        console.log(newValue)
        this.start = this.changeTime(this.value2[0])
        console.log(this.start)
        this.end = this.changeTime(this.value2[1])
        this.search()
      }
  },
  mounted() {
    this.content=this.$route.query.content
    this.search()
  },
  computed: {
    noMore() {
      return this.count >= this.total;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    changeTime(date){
      let year = date.getFullYear() + "-";
      let month = date.getMonth() + 1 + "-";
      let day = date.getDate()
      let dateStr = year + (month[2] ? month : '0' + month) + ( day = day < 10 ? "0" + day : day); // 2021-05-20
      return dateStr;
    },
    loadMore() {
      console.log("加载...")
      this.loading = true;
      setTimeout(() => {
        this.pageNum++;
        this.count+=50
        var data ={
        grade:this.radio,
        start:this.start,
        end:this.end,
        pageNum:this.pageNum,
        pageSize:this.pageSize
      }
      getPolicy(this.content,data).then(res=>{
          this.resultList = this.resultList.concat(res.item.policy)
          this.total = res.item.total
          console.log(res)
          console.log(this.resultList)
        })
        this.loading = false;
      }, 2000);
    },
  search(){
      var data = {
        grade:this.radio,
        start:this.start,
        end:this.end,
        pageNum:this.pageNum,
        pageSize:this.pageSize
      }
      getPolicy(this.content,data).then(res=>{
          console.log(data)
          this.resultList = res.item.policy
          this.total = res.item.total
          console.log(res)
          console.log(data,this.resultList)
        })
    },
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
  }
};
</script>

<style lang="scss" scoped>
.time_type{
  margin-left: 23vh;
  margin-top: 1vh;
}
.type_box_type{
  margin-top: 1.5vh;
  display: flex;
}
.policy_type{
  margin-left: 2vh;
  margin-top: 1vh;
}
 .loading{
    text-align: center;
}
.loading span {
  display: inline-block;
  width: 35px;
  margin: 0 auto;
  height: 35px;
  border: 3px solid #409eff;
  border-left: transparent;
  animation: zhuan 0.5s linear infinite;
  border-radius: 50%;
}
@keyframes zhuan {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.infor_bar{
  width: 56vw;
  display: flex;
}
.type_box{
  background-color: #fff;
  display: flex;
  margin-top: 2vh;
  height: 8vh;
  width: 70vw;
  margin: auto;
}
.line{
  width: 67vw;
  margin: auto;
  height: 0.5px;
  background-color: rgba(204,212,231,0.18);
}
.content_time{
  margin-left: 2%;
  color: #888A92;
   font-size: 0.95vw;
}
.content_item{
  margin-top: 2%;
}
.content_province{
  width: 36.5vw;
  display: flex;
  color: #888A92;
   font-size: 0.95vw;
}
.content_source_name{
  color: #5874F2;
  margin-top: 0.3vh;
}
.content_source_name2{
  margin-top: 0.3vh;
}
.content_source{
  display: flex;
  color: #888A92;
  font-size: 0.95vw;
  width: 20vw;
}
.buttom{
  display: flex;
  margin-top: 0.8%;
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
  margin-top: 0.8%;
  margin-left: 2%;
}
.content_title{
  cursor: pointer;
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
.num{
  color: #5A76E8;
}
.total_box{
  margin-left: 15vw;
  margin-bottom: 1vh;
  margin-top: 4vh;
}
.total_num{
  padding-top: 1vh;
  font-size: 14px;
  font-weight: 500;
  color: #888A92;

}
.resultBar{
  height: 80.5vh;
  background: #F7F8FD;
}
.content_box{
  margin-top: 2vh;
  width: 70vw;
  height: 65vh;
  overflow-y: auto;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px 0px 5px 2px rgba(204,212,231,0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
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
  margin-top: 4vh;
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
</style>