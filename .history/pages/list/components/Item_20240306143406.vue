<template>
	<view class="list">
		<view class="item" v-for="(item, index) in itemList" :key="index">
			<view class="item-img">
				<image class="img" :src="item.imgUrl"></image>
				<view class="starting">{{ item.starting }}</view>
			</view>
			<view class="desc">
				<view class="top">{{ item.desc }}</view>
				<view class="bottom">
					<text class="score">{{ item.score }}</text>
					<text class="sold">{{ item.sold }}</text>
					<view class="price">
						<text class="icon">￥</text>
						<text class="number">{{ item.price }}</text>
						<text class="word">起</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ListItme",
		props: {
			itemList: Array
		}
	}
</script>

<style scoepd>
	.list {
		margin-top: 85px;
	}
	.item {
		height: 115px;
		margin-top: 10rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
		background-color: #FFFFFF;
	}
	.item-img {
		position: relative;
		width: 35%;
		height: 115px;
		float: left;
	}
	.img {
		width: 100%;
		height: 100%;;
	}
	.starting {
		position: absolute;
		top: 103px;
		width: 100%;
		height: 14px;
		line-height: 14px;
		text-align: center;
		font-size: 14px;
		color: #FFFFFF;
		background: rgba(68,68,68,0.8);
	}
	.desc {
		width: 60.6%;
		height: 115px;
		margin-left: 5px;
		float: left;
	}
	.top {
		height: 60px;
		line-height: 20px;
		text-overflow: ellipsis; 
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		color: #333333;
		font-size: 14px;
		margin-left: 5px;
	}
	.bottom {
		margin-top: 35px;
		font-size: 12px;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}
	.score {
		color: #448AFF;	
	}
	.sold {
		margin-left: 5px;
		color: #999999;
		margin-left: 20px;
	}
	.price {
		position: relative;
		top: -25px;
		float: right;
		color: #ff6913;
		font-size: 12px;
	}
	.number {
		font-size: 20px;
	}
	.word {
		font-size: 14px;
	}
</style>
