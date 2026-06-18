<template>
	<view class="page">
		<!-- 用户信息头部：头像使用用户名首字母生成 -->
		<view class="header">
			<view class="avatar">
				<text class="avatar-text">{{ username.charAt(0).toUpperCase() }}</text>
			</view>
			<text class="username">{{ username }}</text>
		</view>

		<!-- 功能菜单：当前是静态展示，后续可以接收藏、关于、反馈页面 -->
		<view class="menu">
			<view class="menu-item">
				<text class="menu-label">我的收藏</text>
				<text class="arrow">›</text>
			</view>
			<view class="menu-item">
				<text class="menu-label">关于我们</text>
				<text class="arrow">›</text>
			</view>
			<view class="menu-item">
				<text class="menu-label">帮助反馈</text>
				<text class="arrow">›</text>
			</view>
		</view>

		<!-- 退出登录 -->
		<button class="btn-logout" @click="handleLogout">退出登录</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			username: ''
		}
	},
	onShow() {
		// 每次进入“我的”页面都重新读取登录名，保证退出/重新登录后状态正确
		this.username = uni.getStorageSync('username') || '未登录'
	},
	methods: {
		handleLogout() {
			// 退出前二次确认，防止用户误触
			uni.showModal({
				title: '提示',
				content: '确定要退出登录吗？',
				success(res) {
					if (res.confirm) {
						// 清除本地登录状态，并重启页面栈回到登录页
						uni.removeStorageSync('username')
						uni.reLaunch({ url: '/pages/login/login' })
					}
				}
			})
		}
	}
}
</script>

<style>
.page {
	min-height: 100vh;
	background-color: #f5f5f5;
}

/* 头部 */
.header {
	background-color: #4A90D9;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 80rpx 0 60rpx;
}

.avatar {
	width: 140rpx;
	height: 140rpx;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 24rpx;
}

.avatar-text {
	font-size: 56rpx;
	font-weight: bold;
	color: #ffffff;
}

.username {
	font-size: 32rpx;
	color: #ffffff;
}

/* 菜单 */
.menu {
	background-color: #ffffff;
	margin: 30rpx 24rpx;
	border-radius: 12rpx;
	overflow: hidden;
}

.menu-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 40rpx 36rpx;
	border-bottom: 1rpx solid #f0f0f0;
}

.menu-item:last-child {
	border-bottom: none;
}

.menu-label {
	font-size: 30rpx;
	color: #333333;
}

.arrow {
	font-size: 36rpx;
	color: #cccccc;
}

/* 退出按钮 */
.btn-logout {
	margin: 0 24rpx;
	height: 90rpx;
	background-color: #ffffff;
	color: #e74c3c;
	font-size: 30rpx;
	border-radius: 12rpx;
	border: none;
}
</style>
