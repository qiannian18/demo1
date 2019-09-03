<template>
	<el-menu default-active="1" class="el-menu-vertical-demo" background-color="#404040" text-color="#fff"
	 active-text-color="#ffd04b" :collapse="iscollapse" style="border: 0;" router>
		<el-menu-item index="1" route="/home">
			<i class="el-icon-menu"></i>
			<span slot="title">首页</span>
		</el-menu-item>
		<el-submenu index="2">
			<template slot="title">
				<i class="iconfont  icon-iconfonttaobao" style="font-size: 1.55rem;margin-right: 0.5125rem; color:#CDCD00;"></i>
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
				<i class="iconfont icon-jingdong iconstyle" style="font-size: 1.55rem;margin-right: 0.5125rem; color:#CDCD00;"></i>
				<span>京东数据</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="3-1">选项1</el-menu-item>
				<el-menu-item index="3-2">选项2</el-menu-item>
				<el-menu-item index="3-3">选项3</el-menu-item>
			</el-menu-item-group>
		</el-submenu>

		<el-submenu index="4">
			<template slot="title">
				<i class="iconfont icon-pin" style="font-size: 1.55rem;margin-right: 0.5125rem; color:#CDCD00;"></i>
				<span>拼多多数据</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="4-1">选项1</el-menu-item>
				<el-menu-item index="4-2">选项2</el-menu-item>
				<el-menu-item index="4-3">选项3</el-menu-item>
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
		}
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
