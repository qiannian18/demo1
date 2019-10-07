<template>
	<div id="app">

		<div style="flex-direction: column;background: #404040;overflow: hidden;">
			<myleft></myleft>
		</div>
		<div style="display: flex;flex-direction: column; flex-grow: 1;overflow: hidden;">
			<div style="flex: row;background: black;">
				<myheader></myheader>
			</div>
			<div style="flex-grow: 1;padding:1.25rem; overflow: auto;">
				<el-breadcrumb separator-class="el-icon-arrow-right"  style="margin-bottom: 1.25rem;">
					<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>活动管理</el-breadcrumb-item>
					<el-breadcrumb-item>活动列表</el-breadcrumb-item>
				</el-breadcrumb>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		myleft,
		myheader
	} from "./components"
	export default {
		name: 'app',
		components: {
			myleft,
			myheader
		}
	}
</script>

<style>
	* {
		box-sizing: border-box;
		margin: 0rem;
		padding: 0rem;

	}

	#app {
		display: flex;
		height: 100vh;
		overflow: hidden;
	}
</style>
