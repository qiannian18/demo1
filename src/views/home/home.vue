<template>
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

</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">

</style>
