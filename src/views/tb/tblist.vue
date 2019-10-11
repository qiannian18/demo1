<template>
	<el-card class="box-card">
		<div style="width: 100%;">
			<el-table :data="tableData" border style="width: 100%"  v-loading="loading">
				<el-table-column prop="id" label="编号" width="80" align="center">
				</el-table-column>
				<el-table-column prop="theme" label="标题" width="180" align="center" :show-overflow-tooltip="true">
				</el-table-column>
				<el-table-column prop="subheading" label="副标题" width="240" align="center" :show-overflow-tooltip="true">
				</el-table-column>
				<el-table-column prop="content" label="内容" width="400" align="center" :show-overflow-tooltip="true">
				</el-table-column>
				<el-table-column prop="praise" label="点赞数" width="100" align="center">
				</el-table-column>
				<el-table-column prop="comment" label="评论数" width="100" align="center">
				</el-table-column>
				<el-table-column prop="createtime" label="发布日期" width="200" align="center">
				</el-table-column>
				<el-table-column label="操作" align="center">
					<template slot-scope="scope">
						<el-button size="mini" type="primary" @click="">详情</el-button>
						<el-button size="mini" type="success" @click="">编辑</el-button>
						<el-button size="mini" type="danger" @click="">隐藏</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</el-card>
</template>
<script>
	export default {
		data() {
			return {
				loading: false,
				tableData: null,
				index:"",
				size:""
			}
		},
		methods: {
			getArticle(pageIndex,pageSize) {
				let data ="pageIndex="+pageIndex+"&pageSize="+pageSize
				
				this.$http.post(this.baseUrl+"/getPage",data).then((res)=>{
					console.log(res)
					this.tableData=res.data.data.list
				}).catch((error)=>{
					
				})
				
			}
		},
		mounted(){
			this.getArticle(1,15)
			
		}
	}
</script>

<style>
</style>
