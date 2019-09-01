<template>
	<div id="app">		
			<myleft></myleft>
			<myheader></myheader>
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
		margin: 0;
		padding: 0;
	}

	#app {
		height: 100vh;
		display: flex;
	}
</style>
