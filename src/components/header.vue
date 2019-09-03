<template>
	<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"  background-color="#545c64"
	 text-color="#fff" active-text-color="#ffd04b" style="border: 0rem;">
	 <el-menu-item >
	 <template slot="title">
		 <i :class="isicon" style="color:#ffd04b" @click="sendleft()"></i>
	 </template>
	 </el-menu-item>
		<el-submenu index="1" style="float: right; padding-right: 1.25rem;">
			<template slot="title">我的工作台</template>
			<el-menu-item index="1-1">选项1</el-menu-item>
			<el-menu-item index="1-2">选项2</el-menu-item>
			<el-menu-item index="1-3">选项3</el-menu-item>
		</el-submenu>
	</el-menu>
</template>

<script>
	import bus from '../routes/eventBus.js'
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
				isicon:'el-icon-d-arrow-left'
			};
		},
		methods: {
			
			sendleft(){
					bus.$emit("isleft",false);
					this.isicon=='el-icon-d-arrow-left' ? this.isicon='el-icon-d-arrow-right' :  this.isicon='el-icon-d-arrow-left'   
			}
		}
	}
</script>

<style>
</style>
