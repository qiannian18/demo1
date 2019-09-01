<template>
	<div style="flex-direction: row;flex: 1;">
		<div style=" background: #333;align-items: center;">
			<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
			 background-color="#333" text-color="#fff" active-text-color="#ffd04b" style="border: 0rem;">
				<el-submenu index="1">
					<template slot="title">我的工作台</template>
					<el-menu-item index="1-1">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
					<el-menu-item index="1-3">选项3</el-menu-item>
				</el-submenu>
			</el-menu>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
</style>
