<template>
	<el-menu class="el-menu-vertical-demo" background-color="#404040" text-color="#fff" active-text-color="#ffd04b"
	 :collapse="iscollapse" style="border: 0;" router :default-active="active">
		<el-menu-item index="1" route="/home">
			<i class="el-icon-menu"></i>
			<span slot="title">首页</span>
		</el-menu-item>
		<el-submenu index="2">
			<template slot="title">
				<i class="el-icon-edit" style="font-size: 1.55rem;margin-right: 0.5125rem; color:#CDCD00;"></i>
				<span>文章管理</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="2-1" route="/tblist">文章列表</el-menu-item>
				<el-menu-item index="2-2" route="/newarticle">写文章</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="3">
			<template slot="title">
				<i class="el-icon-s-order" style="font-size: 1.55rem;margin-right: 0.5125rem; color:#CDCD00;"></i>
				<span>板块管理</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="3-1" route="/addclass">板块分类</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		
		<el-submenu index="4">
			<template slot="title">
				<i class="el-icon-circle-check" style="font-size: 1.55rem;margin-right: 0.5125rem; color:#CDCD00;"></i>
				<span>评论管理</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="4-1" route="">审核评论</el-menu-item>
			</el-menu-item-group>
		</el-submenu>

		<el-submenu index="5">
			<template slot="title">
				<i class="el-icon-s-operation" style="font-size: 1.55rem;margin-right: 0.5125rem; color:#CDCD00;"></i>
				<span>系统设置</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="5-1">选项1</el-menu-item>
			</el-menu-item-group>
		</el-submenu>

	</el-menu>
</template>
<script>
	import bus from '../routes/eventBus.js'
	import '../css/iconfont.css'
	export default {
		data() {
			return {
				iscollapse: false,
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		mounted() {
			var isleft = this;
			/* 同级组件传值/接收 */
			bus.$on("isleft", function(msg) {
				isleft.iscollapse = !isleft.iscollapse;
			}, )
			console.log(this.active)
		},
		props: ["active"]
	}
</script>

<style scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}

	.iconstyle {
		font-size: 1.55rem;
		margin-right: 0.5125rem;
		color: #CDCD00;
	}
</style>
