<template>
	<view class="activity">
		<view class="top">
			<view class="top-left iconfont"></view>
			<view class="top-right">
				<text class="top-text">获取更多福利</text>
			</view>
		</view>
		<view class="list">
			<block  v-for="item in activityList" :key="item.id">
				<image :src="item.imgUrl"></image>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomeActivity',
		props: {
			activityList: Array
		}
	}
</script>
	
<style scoped>
	.activity {
		margin-bottom: 20px;
		margin-top: 20px;
		margin-left: 17px;
		margin-right: 17px;
		background-color: #FFFFFF;
		border-radius: 20px;
	}
	.top {
		margin: 0px 17px;
		margin-top: 10px;
		margin-bottom: 10px;
		overflow: hidden;
	}
	.top-left {
		float: left;
		margin-top: 10px;
		font-size: 14px;
		color: #DD524D;
		width: 80px;
		height: 40rpx;
		float: left;
		background: url('https://images4.c-ctrip.com/target/0zc6g120008g0hcb587E5.png') no-repeat;
		background-size: auto 40rpx;
	}
	.top-right {
		margin-top: 10px;
		float: right;
		font-size: 14px;
		width: 220rpx;
		height: 40rpx;
		background-color: #55A532;
		border-radius: 5px;
		text-align: center;
	}
	.top-text {
		color: #FFFFFF;
	}
	.list {
		overflow: hidden;
		border-radius: 20px;
	}
	image {
		width: 50%;
		border: 1px solid #DCDCDC;
		float: left;
		height: 100px;
		box-sizing: border-box;
	}
</style>
