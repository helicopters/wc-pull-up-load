<style>
	
</style>
<template>
	<div class="container">
		
		<header>你好</header>
		
		<wc-pullup-load @end="more" ref="pullup">

			<h1 v-for="(value, key) in list">{{value}}</h1>
		</wc-pullup-load>




	</div>
</template>
<script>
	export default {
		name: 'App',
		data () {
			return {
				list: []
			}
		},
		mounted () {
			let i =0;
			for (;i<100;i++) {
				this.list.push(i)
			}
		},
		methods: {
			more () {
				setTimeout(()=>{
					let i = 0;
			for (;i<100;i++) {
				this.list.push(i)
			}

			this.$refs.pullup.unlock();
				},1000)
			}
		}
	}
</script>