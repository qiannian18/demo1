<template>
	<el-card class="box-card">
		<el-row :gutter="20">
			<el-col :span="8">
				<el-form :label-position="labelPosition" label-width="80px" :model="data">
					<el-form-item label="添加板块" label-width="80px">
						<el-input v-model="data.title"></el-input>
					</el-form-item>
				</el-form>
				<el-button type="success" style="display: block; margin: auto;" @click="addClass()">添加板块</el-button>
			</el-col>
		</el-row>

	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				labelPosition: 'top',
				data: {
					title: '',
				}
			};
		},
		methods: {
			/* 添加分类 */
			addClass() {
				let data = "className=" + this.data.title
				this.$http.post(this.baseUrl+'/addClassName', data).then((res) => {
					
					if (res.data.code === '200') {
						this.$message({
							message: res.data.data,
							type: "success"
						});
					} else {
						 this.$message.error(res.data.data);
					}
					
				}).catch((error) => {
					console.log(error);
				})
			},
			
		},
	}
</script>

<style>

</style>
