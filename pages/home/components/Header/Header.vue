<template>
	<view class="header">
		<view class="search-box">
			<view class="search-left"></view>
			<view class="search-right">
				搜索：酒店/机票/景点/航班号
			</view>
		</view>
		<view class="header-right" @click="toMine">
			<view class="icon"></view>
			<view class="text">我的</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toMine() {
				uni.switchTab({
					url: '/pages/mine/mine'
				})
			}
		}
	}
</script>

<style scoped>
	.header {
		position: fixed;
		top: 0;
		left: 0;		
		right: 0;
		width: 100%;
		height: 50px;
		padding-left: 24rpx;
		background: -webkit-linear-gradient(rgba(128,128,128,1),rgba(0,0,0,0));
		z-index: 10;
	}
	.search-box {
		display: flex;
		width: 87%;
		height: 36px;
		float: left;
		margin-top: 7.5px;
		font-size: 18px;
		background-color: #FFFFFF;
		border-radius: 20px;
	}
	.search-left {
		width: 35px;
		height: 35px;
		margin-top: 2px;
		background: url('../../../../static/images/icon/search.png') no-repeat;
		background-size: 21px auto;
		background-position: 15px 5px;
	}
	.search-right {
		flex: 1;
		line-height: 30px; 
		margin-top: 2px;
		margin-left: 15px;
		font-size: 15px;
		color: #666666;
	}
	.header-right {
		width: 12%;
		float: right;
		color: #F1F1F1;
	}
	.icon {
		width: 22px;
		height: 22px;
		margin-top: 2px;
		background: url('../../../../static/images/icon/mine-hover.png') no-repeat;
		background-size: 21px auto;
		background-position: 1px 2px;
	}
	.text {
		font-size: 12px;
		color: #333333;
	}
</style>
