<template>
	<div class="wc-up-load" ref="upload">
		<slot/>
	</div>
</template>
<script>
/*
调用方式
<pull-up-load v-model="lock" @infinite="more">
</pull-up-load>
*/
	export default {
		props: {
			value: {
				default: false
			},
			threshold: {
				default: 0
			}
		},
		mounted () {
			/* 获取 */
			let screenHeight = document.body.clientHeight|| document.documentElement.clientHeight;
			let handler = e => {
				let scrollHeight = document.body.clientHeight|| document.documentElement.clientHeight;
				let maxScrollTop = scrollHeight - screenHeight;

				let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

				/* 
					因为有时候可能有一些原因导致 scrollTop 的最大值会大于右边, 所以用 >=
					这里的 !this.value 表示没有上锁. 
				*/
				if (scrollTop >= maxScrollTop - this.threshold && !this.value) {
					this.$emit('input', true);
					this.$emit('infinite');
				}
			}
			document.addEventListener('scroll', handler, false);
		}
	}
</script>