<template>
	<el-card class="box-card">
		<div style="width: 100%;height: 3.125rem;">
			<div style="float: left;">
				板块分类
				<el-select v-model="classId" placeholder="请选择分类板块">
					<el-option :label="item.classname" :value="item.id" v-for="item in classNameData"></el-option>
				</el-select>
			</div>
			
			<div style="width: 13.75rem;float: left;margin-left: 1.875rem;">
				<div style="float: left;margin-top: 0.625rem;"> 
				标签文本	
				</div>
				<div style="float: left;width: 9.375rem;">
					<el-input v-model="labelText"></el-input>
				</div>
				
			</div>
			
			<div style="float: left;margin-left: 1.875rem;">
				标签颜色
				<el-select v-model="labelId" placeholder="请选择标签颜色">
					<el-option :label="item.color" :value="item.id" v-for="item in labelData">
						{{item.color}}
						<Tag :color="item.color">{{item.color}}</Tag>
					</el-option>
				</el-select>
			</div>
		</div>

		<div style="margin-top: 2.5rem;">
			文章标题
			<el-input v-model="title"></el-input>
		</div>


		<div style="margin-top: 3.125rem;">
			文章副标题
			<el-input v-model="subtitle"></el-input>
		</div>

		<div id="editor" style="margin-top: 2.5rem;">
		
		</div>
		<div style="width: 15.625rem;margin: auto;margin-top: 0.625rem;">
			<el-button type="primary" icon="el-icon-edit" style="width: 6.25rem;" @click="pushArticle()">发布</el-button>
			<el-button type="danger" style="width: 6.25rem;" @click="cancel()">取消</el-button>
		</div>
	</el-card>

</template>

<script>
	import E from 'wangeditor'
	export default {
		data() {
			return {
				labelPosition: 'top',
				title: '',
				subtitle: '',
				classId: '',
				labelId: '',
				labelText:'',
				classNameData: null,
				labelData: null,
				editorContent:''
			};
		},
		methods: {
			/* 获取所有分类 */
			getClassName() {
				this.$http.get(this.baseUrl + "/getClassNameAll").then((res) => {
					this.classNameData = res.data.data
					
				}).catch((error) => {

				})
			},
			/* 获取所有label */
			getLabelAll() {
				this.$http.get(this.baseUrl + "/getLabelAll").then((res) => {
					this.labelData = res.data.data
				}).catch((error) => {

				})
			},
			/* 创建富文本 */
			createEditor() {
				var editor = new E('#editor')
				editor.customConfig.uploadImgMaxLength = 1 /* 限制一次上传一张*/
				editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024 /* 限制上传大小3m*/
				editor.customConfig.uploadImgTimeout = 3 * 60 * 1000 //设置超时时间
				editor.customConfig.uploadFileName = "file" //后端接收文件的参数名
				editor.customConfig.uploadImgServer = this.baseUrl + "/upload/image" //这里填图片上传的地址
				editor.customConfig.onchange=(html)=>{
					this.editorContent=html;
				}
				editor.customConfig.uploadImgHooks = {
					before: (xhr, editor, files) => {},
					success: (xhr, editor, result) => {},
					fail: (xhr, editor, result) => {
						this.$message("失败");
					},
					error: (xhr, editor) => {},
					customInsert: (insertImg, result, editor) => {
						let url = "http://localhost:8088/images/" + result.data;
						insertImg(url);
					}
				}
				editor.create()
			},
			/* 推送文章发布 */
			pushArticle() {
				if (this.labelId == '' || this.classId == '') {
					this.$message("分类或标签不能为空")
				} else {
					let data = "theme="+this.title+"&subheading="+this.subtitle+"&content="+encodeURIComponent(this.editorContent)+"&classid="+this.classId+"&labelid="+this.labelId+"&label="+this.labelText
					
					this.$http.post(this.baseUrl+"/pushArticle", data).then((res) => {
				
						if(res.data.code=='200'){
							alert("发布成功")
							this.$router.push("/tblist")
						}else{
							alert(res.data.data)
						}
					}).catch((error) => {

					})
				}
			},
			cancel(){
				this.$router.push("/tblist")
			}

		},
		mounted() {
			this.createEditor()
			this.getClassName()
			this.getLabelAll()
		}
	}
</script>
