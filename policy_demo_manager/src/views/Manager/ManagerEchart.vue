<template>

   <div class="">

      <!-- 为 ECharts 准备一个定义了宽高的 DOM -->

  <div id="main" style="width: 600px;height:450px;"></div>

   </div>

</template>

<script>
import {getChart} from '../../api/user'
export default {

name: 'PolicyDemoManagerManagerEchart',
  data(){
    return{
      searchData:[],
      accessData:[],
      xMessage:[],
      searchMax:0,
      accessMax:0,
      searchInterval:0,
      accessInterval:0
    }
  },
  components: {},
  watch:{
		xMessage(){
			this.$nextTick(()=>{
				//此时就可以获取到在created赋值后的dataList了
			})
		}
	},
  created() {
    getChart().then(res=>{
      console.log(res)
      this.xMessage = res.item.xMeasure
      this.searchData = res.item.userSearch
      this.accessData = res.item.userAccess
      this.searchMax = res.item.searchMax
      this.accessMax = res.item.accessMax
      this.initMyChart()
    })
  },
  methods:{
    initMyChart(){
      
    var myChart = this.$echarts.init(document.getElementById('main'))
    // 指定图表的配置项和数据
    console.log(this.xMessage)
  var option = {
    title: {
      text: '网络动态'
    },
    tooltip: {
        trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
          color: '#5e8ffe'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['搜索量', '访问量']
    },
    xAxis: [
      {
        type: 'category',
        data: this.xMessage,
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '搜索量',
        min: 0,
        max: this.searchMax+100,
        interval:(this.searchMax+100)/7 ,
        axisLabel: {
          formatter: '{value} 次'
        }
      },
      {
        type: 'value',
        name: '访问量',
        min: 0,
        max: this.accessMax+50,
        interval:(this.accessMax+50)/7,
        axisLabel: {
          formatter: '{value} 次'
        }
      }
    ],
    series: [
      {
        name: '搜索量',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 次';
          }
        },
        barWidth:40,
        barGap:"2%",
        barCateGoryGap:"2%",	
        data: this.searchData,
        itemStyle:{
          normal:{
            color:'#5e8ffe',
          }
        }
      },
      {
        name: '访问量',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 次';
          }
        },
        data: this.accessData
      }
    ]
  };
      // 使用刚指定的配置项和数据显示图表。

      option && myChart.setOption(option);
    }
  }

}

</script>

<style>

</style>