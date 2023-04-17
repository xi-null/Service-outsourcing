<template>
    //容器盒子
            <div v-infinite-scroll="load" infinite-scroll-disabled="disabled"  infinite-scroll-distance="20"   class="videoLister"  >
               <div v-for="(item , index1) in dataList"
                :key="index1"
                track-by="$index"
                class="concreteSec" >
                <div class="courseTit">
                  <div class="footdivs">                   
                        <div class="cishu">{{item.clickNum == null ? 0 : item.clickNum}} 数量</div>
                   </div>
                </div>
            </div>
            //下拉加载时候加loading旋转动效
            <div v-if="loading" style="margin-top:10px;" class="loading">
                  <span></span>
            </div>
            //加载完成，提示语句
            <div v-if="noMore" style="margin:10 auto; text-align: center; font-size:18px;font-weight: 550; color:#000000">----我是有底线的----</div>
        </div>
</template>
<script>
  import { InfiniteScroll } from "element-ui"
   export default {
       directives: {
        	"infinite-scroll": InfiniteScroll,
     },
     data() {
        return{
          dataList: [],  //渲染数据数组
          loading: false,  //加载时的动画
		      pages:1,     //滚动加载默认显示第一页
		      pageIndex:1  //分页查询后端所需参数，【确认后端所需的参数名，有的接口不一样，根据实际情况而定】，
       }
    },
    //计算
     computed:{
      noMore() {
         //当起始页数大于总页数时停止加载
         return this.pageIndex >= this.pages ;
      },
      disabled() {
         return this.loading || this.noMore;
      }
    },
     created() {
        this.getList()
    },
     methods: {
               //下拉加载事件
       load() {
            //滑到底部时进行加载
            this.loading = true;
            setTimeout(() => {
               let obj = {
                 resourceType: 1,    //查询数据所需参数，忽略
                 pageIndex:this.pageIndex+1,   //pageIndex此参数根据自己实际情况，分页所需参数有的接口不一样
                 pageSize:10, //每页查询的条数
               }
               getResourcesByClick(obj)
                 .then((res) => {
                   let pageInfo = res.data
                   pageInfo.list.forEach(e=>{
                     this.dataList.push(e)
                   })
                   this.pageIndex = pageInfo.pageNum        
                   this.loading = false;
                 })
                 .catch((error) => {
                     console.log(error)
                 })
              }, 1500);
        },
        //渲染列表
      getList() {
        let obj = {
          resourceType: 1,
          pageIndex:1,   //此参数一定要确认好，传错肯定运行效果出错
          pageSize:10, //每页查询的条数
        }
        //this.url = ''
        getResourcesByClick(obj)
          .then((res) => {
            let pageInfo = res.data
            pageInfo.list.forEach((el)=>{
              this.dataList.push(el)
            })
            this.pages = res.data.pages
            this.loading = false;
          })
          .catch(() => {})
      },
     }
  }
 </script> 
 //加载时候转圈的动效
 <style>
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
 </style>
