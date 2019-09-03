<template>
	<el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
	 active-text-color="#ffd04b" :collapse="iscollapse" style="border: 0;" router>
		<el-menu-item index="1" route="/home">
			<i class="el-icon-menu"></i>
			<span slot="title">首页</span>
		</el-menu-item>
		<el-submenu index="2">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>淘宝数据</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="2-1" route="/tblist">订单数据</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="3">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>拼多多数据</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="3-1">选项1</el-menu-item>
				<el-menu-item index="3-2">选项2</el-menu-item>
				<el-menu-item index="3-3">选项3</el-menu-item>
			</el-menu-item-group>
		</el-submenu>

	</el-menu>
</template>
<script>
	import bus from '../routes/eventBus.js'
	export default {
		data() {
			return {
				iscollapse: true,
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
			var isleft=this;
			bus.$on("isleft", function(msg) {
				isleft.iscollapse =!isleft.iscollapse;
			}, )
		}

	}
</script>

<style scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
</style>
