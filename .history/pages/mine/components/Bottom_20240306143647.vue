<template>
	<view class="bottom">
		<view class="item">
			<view class="left">常用信息</view>
			<view class="right">旅客/地址/发票</view>
		</view>
		<view class="item">
			<view class="left">收藏夹</view>
			<view class="right">旅游地/产品</view>
		</view>
		<view class="item">
			<view class="left">常看历史</view>
			<view class="right">近7天浏览记录</view>
		</view>
		<view class="item">
			<view class="left">我要合作</view>
			<view class="right">供应商加盟/代理合作</view>
		</view>
		<view class="item last">
			<view class="left">出行助手</view>
			<view class="right">航班/车次/当地天气</view>
		</view>

	</view>
</template>

<script>
export default {
	name: "MineBottom"
}
</script>

<style>
.bottom {
	width: 100%;
	margin-top: 10px;
}

.item {
	width: 100%;
	height: 40px;
	background: #FFFFFF;
}

.left {
	line-height: 40px;
	font-size: 15px;
	color: #333333;
	margin-left: 16px;
	float: left;
}

.right {
	line-height: 40px;
	font-size: 12px;
	color: #999999;
	float: right;
	margin-right: 20px;
}

.last {
	margin-top: 10px;
}
</style>
