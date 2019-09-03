<template>	
		<div id="datacharts" style="width: 100%;height: 25rem;"></div>
</template>

<script>
	import echarts from "echarts"
	export default {
		mounted() {
			var myChart = echarts.init(document.getElementById('datacharts'));
			 var option = {
			    title : {
			        text: '今日营收比例',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        left: 'left',
			        data: ['淘宝','京东','拼多多','其他']
			    },
			    series : [
			        {
			            name: '收入来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'淘宝',itemStyle: {color: '#E062AE'}},
			                {value:310, name:'京东',itemStyle: {color: '#37A2DA'}},
			                {value:234, name:'拼多多',itemStyle: {color: '#67E0E3'}},
			                {value:135, name:'其他',itemStyle: {color: '#ADADAD'}},
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			};
			myChart.setOption(option);
		}
	}
</script>

<style>
</style>
