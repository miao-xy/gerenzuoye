<template>
	<view class="login-page">
		<!-- 背景装饰层，只负责营造登录页氛围，不参与交互 -->
		<view class="background-shape shape-one"></view>
		<view class="background-shape shape-two"></view>

		<view class="login-shell">
			<!-- 顶部品牌信息：Logo、产品名和简短说明 -->
			<view class="header">
				<view class="logo-wrap">
					<image class="logo" src="/static/logo.png" mode="aspectFit"></image>
				</view>
				<text class="eyebrow">今日要闻 · 资讯管理</text>
				<text class="app-name">新闻资讯</text>
				<text class="subtitle">登录后查看推荐资讯、收藏和个人中心</text>
			</view>

			<!-- 登录表单：当前项目使用写死的测试账号校验 -->
			<view class="form">
				<view class="form-title">
					<text class="form-heading">欢迎回来</text>
					<text class="form-desc">使用测试账号继续访问</text>
				</view>

				<!-- focusedField 用来控制输入框聚焦时的高亮样式 -->
				<view class="input-group" :class="{ active: focusedField === 'username' }">
					<text class="label">账号</text>
					<input class="input" v-model="username" placeholder="请输入账号" placeholder-class="placeholder"
						@focus="focusedField = 'username'" @blur="focusedField = ''" @input="errorMessage = ''" />
				</view>
				<view class="input-group" :class="{ active: focusedField === 'password' }">
					<text class="label">密码</text>
					<input class="input" v-model="password" placeholder="请输入密码" placeholder-class="placeholder" password
						@focus="focusedField = 'password'" @blur="focusedField = ''" @input="errorMessage = ''" />
				</view>

				<text v-if="errorMessage" class="error-text">{{ errorMessage }}</text>

				<button class="btn-login" :disabled="!canSubmit" @click="handleLogin">登录</button>
				<text class="helper-text">测试账号：miao / 2312505043</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 表单输入值
			username: '',
			password: '',
			// 当前聚焦字段，用于切换输入框视觉状态
			focusedField: '',
			// 登录失败时展示在表单内的错误提示
			errorMessage: ''
		}
	},
	computed: {
		// 两个输入框都有内容时才允许点击登录按钮
		canSubmit() {
			return Boolean(this.username.trim() && this.password)
		}
	},
	methods: {
		handleLogin() {
			// 防止禁用态按钮或异常触发时继续执行登录逻辑
			if (!this.canSubmit) return

			// Demo 项目暂时使用固定账号：miao / 2312505043
			if (this.username.trim() === 'miao' && this.password === '2312505043') {
				// 保存登录状态，后续 App.vue 和我的页面会读取这个值
				uni.setStorageSync('username', this.username.trim())
				uni.reLaunch({ url: '/pages/index/index' })
			} else {
				// 同时给出表单内提示和系统 toast，保证用户能明确看到失败原因
				this.errorMessage = '账号或密码错误，请重新输入'
				uni.showToast({
					title: '账号或密码错误',
					icon: 'none'
				})
			}
		}
	}
}
</script>

<style>
.login-page {
	min-height: 100vh;
	background:
		radial-gradient(circle at 12% 8%, rgba(82, 141, 198, 0.22), transparent 34%),
		linear-gradient(180deg, #eef6fb 0%, #f7f3ec 100%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 72rpx 44rpx;
	box-sizing: border-box;
	position: relative;
	overflow: hidden;
}

.background-shape {
	position: absolute;
	border-radius: 999rpx;
	pointer-events: none;
}

.shape-one {
	width: 360rpx;
	height: 360rpx;
	top: -120rpx;
	right: -120rpx;
	background-color: rgba(74, 144, 217, 0.16);
}

.shape-two {
	width: 260rpx;
	height: 260rpx;
	left: -96rpx;
	bottom: 108rpx;
	background-color: rgba(224, 157, 84, 0.13);
}

.login-shell {
	width: 100%;
	max-width: 640rpx;
	position: relative;
	z-index: 1;
}

.header {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 40rpx;
}

.logo-wrap {
	width: 124rpx;
	height: 124rpx;
	border-radius: 34rpx;
	background-color: rgba(255, 255, 255, 0.78);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 30rpx;
	box-shadow: 0 18rpx 42rpx rgba(43, 92, 139, 0.14);
}

.logo {
	width: 82rpx;
	height: 82rpx;
}

.eyebrow {
	font-size: 24rpx;
	font-weight: 600;
	color: #4A7298;
	margin-bottom: 12rpx;
}

.app-name {
	font-size: 56rpx;
	font-weight: bold;
	color: #18324A;
	line-height: 1.15;
}

.subtitle {
	margin-top: 16rpx;
	font-size: 28rpx;
	color: #5F7285;
	line-height: 1.6;
}

.form {
	width: 100%;
	background-color: rgba(255, 255, 255, 0.92);
	border-radius: 28rpx;
	padding: 44rpx 36rpx 34rpx;
	box-sizing: border-box;
	box-shadow: 0 28rpx 70rpx rgba(43, 92, 139, 0.16);
}

.form-title {
	margin-bottom: 34rpx;
}

.form-heading {
	display: block;
	font-size: 36rpx;
	font-weight: 700;
	color: #1E3448;
	line-height: 1.25;
}

.form-desc {
	display: block;
	margin-top: 10rpx;
	font-size: 25rpx;
	color: #718091;
	line-height: 1.5;
}

.input-group {
	background-color: #F5F8FA;
	border: 2rpx solid #E4EBF1;
	border-radius: 18rpx;
	padding: 18rpx 24rpx 16rpx;
	margin-bottom: 22rpx;
	box-sizing: border-box;
	transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.input-group.active {
	background-color: #FBFDFE;
	border-color: #4A90D9;
	box-shadow: 0 10rpx 26rpx rgba(74, 144, 217, 0.13);
}

.label {
	display: block;
	font-size: 24rpx;
	font-weight: 600;
	color: #516A82;
	margin-bottom: 8rpx;
}

.input {
	width: 100%;
	height: 54rpx;
	font-size: 30rpx;
	color: #1E3448;
	box-sizing: border-box;
}

.placeholder {
	color: #A5B1BD;
}

.error-text {
	display: block;
	min-height: 34rpx;
	margin: 2rpx 0 18rpx;
	font-size: 24rpx;
	color: #D84B45;
	line-height: 1.4;
}

.btn-login {
	margin-top: 8rpx;
	width: 100%;
	height: 92rpx;
	background-color: #4A90D9;
	color: #ffffff;
	font-size: 31rpx;
	font-weight: 700;
	border-radius: 18rpx;
	border: none;
	box-shadow: 0 18rpx 34rpx rgba(74, 144, 217, 0.24);
	transition: opacity 0.2s ease, transform 0.2s ease;
}

.btn-login::after {
	border: none;
}

.btn-login:active {
	transform: translateY(2rpx);
}

.btn-login[disabled] {
	background-color: #B9C8D4;
	color: rgba(255, 255, 255, 0.86);
	box-shadow: none;
}

.helper-text {
	display: block;
	margin-top: 22rpx;
	text-align: center;
	font-size: 24rpx;
	color: #7E8E9D;
	line-height: 1.4;
}
</style>
