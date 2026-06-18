<script>
	export default {
		onLaunch: function() {
			const username = uni.getStorageSync('username')
			if (username) {
				uni.switchTab({ url: '/pages/index/index' })
			}
		},
		onShow: function() {},
		onHide: function() {}
	}
</script>

<style>
	/*每个页面公共css */
</style>
