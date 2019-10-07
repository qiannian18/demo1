<template>
	<el-card class="box-card">

		<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
			<el-form-item label="分类板块">
				<el-select v-model="formLabelAlign.class" placeholder="请选中分类板块">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			
			<el-form-item label="标题">
				<el-input v-model="formLabelAlign.name"></el-input>
			</el-form-item>
			<el-form-item label="副标题">
				<el-input v-model="formLabelAlign.region"></el-input>
			</el-form-item>
		</el-form>

		<div id="editor">

		</div>
		<div style="width: 15.625rem;margin: auto;margin-top: 0.625rem;">
			<el-button type="primary" icon="el-icon-edit" style="width: 6.25rem;">发布</el-button>
			<el-button type="danger" style="width: 6.25rem;">取消</el-button>
		</div>

	</el-card>

</template>

<script>
	import E from 'wangeditor'
	export default {
		data() {
			return {
				labelPosition: 'top',
				formLabelAlign: {
					name: '',
					region: '',
					type: '',
					class: '',
				}
			};
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			seteditor() {

			}
		},
		mounted() {
			// wangeditor
			var editor = new E('#editor')
			editor.customConfig.uploadImgShowBase64 = true
			/* 	editor.onchange = function() {
					this.formData.phone = this.$txt.html()
				} */
			editor.create()
		}
	}
</script>
