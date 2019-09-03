<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="4">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>今日IP</span>

					</div>
				</el-card>

			</el-col>
			<el-col :span="4">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>今日销量</span>
					</div>

				</el-card>
			</el-col>
			<el-col :span="4">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>订单总额</span>

					</div>
				</el-card>
			</el-col>
			<el-col :span="4">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>预计盈利金额</span>

					</div>
				</el-card>
			</el-col>

			<el-col :span="4">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>淘宝订单数</span>

					</div>
				</el-card>
			</el-col>

			<el-col :span="4">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>拼多多订单数</span>

					</div>
				</el-card>
			</el-col>
		</el-row>

		<el-row :gutter="20" style="margin-top: 1.875rem;">
			
			<el-col :xl="12" :lg="12" :md="11" :sm="9" :xs="8">
				 <el-card style="height: 28.125rem;">

					<tbcharts></tbcharts>

				 </el-card>

			</el-col>

			<el-col :xl="12" :lg="12" :md="11" :sm="9" :xs="8">
				<el-card  style="height: 28.125rem">
					<datacharts></datacharts>
				</el-card>

			</el-col>
		</el-row>

	</div>


</template>

<script>
	import {
		tbcharts,datacharts
	} from "./module"
	
	export default {
		data() {
			return {

			}
		},
		components: {
			tbcharts,
			datacharts
		}
	}
</script>

<style scoped="scoped">
.tbcharts{
	width: 100%;
}
</style>
