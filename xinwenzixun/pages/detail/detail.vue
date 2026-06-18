<template>
	<view class="page">
		<!-- 详情页顶部大图，图片地址来自首页传入 id 对应的新闻数据 -->
		<image class="cover" :src="news.cover" mode="aspectFill"></image>
		<view class="body">
			<!-- 新闻主体信息 -->
			<text class="title">{{ news.title }}</text>
			<view class="meta">
				<text class="meta-text">{{ news.source }}</text>
				<text class="meta-text">{{ news.time }}</text>
			</view>
			<view class="divider"></view>
			<text class="content">{{ news.content }}</text>
		</view>
	</view>
</template>

<script>
import { newsList } from '../../data/news.js'

export default {
	data() {
		return {
			// 当前详情页展示的新闻对象
			news: {}
		}
	},
	onLoad(options) {
		// 首页通过 ?id=xxx 传参，这里转成数字后匹配本地新闻列表
		const id = Number(options.id)
		const found = newsList.find(item => item.id === id)
		if (found) {
			this.news = found
			// 用新闻来源作为详情页导航栏标题，提升当前内容上下文
			uni.setNavigationBarTitle({ title: found.source })
		}
	}
}
</script>

<style>
.page {
	background-color: #ffffff;
	min-height: 100vh;
}

.cover {
	width: 100%;
	height: 420rpx;
}

.body {
	padding: 36rpx;
}

.title {
	font-size: 36rpx;
	font-weight: bold;
	color: #333333;
	line-height: 1.6;
}

.meta {
	display: flex;
	gap: 24rpx;
	margin-top: 20rpx;
}

.meta-text {
	font-size: 24rpx;
	color: #999999;
}

.divider {
	height: 1rpx;
	background-color: #eeeeee;
	margin: 30rpx 0;
}

.content {
	font-size: 30rpx;
	color: #555555;
	line-height: 1.9;
}
</style>
