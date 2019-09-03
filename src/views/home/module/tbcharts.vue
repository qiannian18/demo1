<template>	
		<div id="tbcharts" style="width: 100%;height: 25rem;"></div>
</template>

<script>
	import echarts from "echarts"
	export default {
		mounted() {
			var myChart = echarts.init(document.getElementById('tbcharts'));
			// 指定图表的配置项和数据
			var option = {
				title: {
					text: '数据报表'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['淘宝', '拼多多', '京东']
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				},
				yAxis: {
					type: 'value'
				},
				series: [{
						name: '淘宝',
						type: 'line',
						stack: '总量',
						data: [120, 132, 101, 134, 90, 230, 210]
					},
					{
						name: '拼多多',
						type: 'line',
						stack: '总量',
						data: [220, 182, 191, 234, 290, 330, 310]
					},
					{
						name: '京东',
						type: 'line',
						stack: '总量',
						data: [150, 232, 201, 154, 190, 330, 410]
					},
				]
			};

			myChart.setOption(option);
		}
	}
</script>

<style>
</style>
