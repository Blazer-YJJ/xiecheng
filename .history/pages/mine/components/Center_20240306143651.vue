<template>
	<view class="center">
		<view class="top">
			<view class="icon iconfont">&#xe625;</view>
			<view class="pures">我的钱包</view>
			<view class="desc">
				<view class="desc-item">礼品卡</view>
				<view class="desc-item">|</view>
				<view class="desc-item">现金</view>
				<view class="desc-item">|</view>
				<view class="desc-item">活动返现</view>
			</view>
		</view>
		<view class="bottom">
			<view class="item">
				<view class="icon iconfont">&#xe657;</view>
				<view class="bottom-desc">优惠券</view>
				<view class="bottom-word">点我领劵</view>
			</view>
			<view class="item">
				<view class="icon iconfont">&#xe897;</view>
				<view class="bottom-desc">积分</view>
				<view class="bottom-word">兑好礼</view>
			</view>
			<view class="item">
				<view class="icon iconfont">&#xe654;</view>
				<view class="bottom-desc">拿去花</view>
				<view class="bottom-word">分期付款</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "MineCenter"
}
</script>

<style>
.center {
	width: 100%;
	font-size: 17px;
	color: #333333;
	background: #FFFFFF;
}

.top {
	width: 100%;
	height: 65px;
	border: 1px solid #EAEAEC;
}

.icon {
	width: 20px;
	height: 65px;
	line-height: 65px;
	margin-left: 15px;
	float: left;
	font-size: 20px;
}

.pures {
	float: left;
	line-height: 65px;
	margin-left: 5px;
}

.desc {
	position: relative;
	line-height: 65px;
	left: 8px;
	width: 100%;
	font-size: 12px;
	color: #999999;
}

.desc-item {
	float: left;
	margin-left: 10px;
}

.item {
	width: 31.47%;
	height: 70px;
	padding-left: 9rpx;
	border: 1px solid #EAEAEC;
	float: left;
	background-color: #FFFFFF;
}

.bottom-desc {
	margin-top: 12px;
	margin-left: 40px;
}

.bottom-word {
	width: 100%;
	margin-top: 8px;
	text-align: center;
	font-size: 12px;
	color: #999999;
}

.bottom {
	overflow: hidden;
}
</style>
