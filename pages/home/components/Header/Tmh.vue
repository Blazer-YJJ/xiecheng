<template>
	<view class="tmh">
		<view class="top">
			<view class="top-left iconfont"></view>
			<view class="top-right">
				<text class="top-text">更多</text>
			</view>
		</view>
		<view class="body">
			<view class="body-left"> 
				<view class="body-img">
					<image class="left-img" 
						   src="https://images4.c-ctrip.com/target/200w070000002k21g2C3F_D_280_280_R5.jpg">
					</image>
				</view>
				<view class="left-desc">
					特大好消息！为了回馈新老客户，现在xx机场xx酒店1晚仅需
				</view>
				<view class="price">                                                                                              
					<text class="money">￥</text>
					<text class="number">1222</text>
					<text class="word">起</text>
				</view>
			</view>
			<view class="body-right">
				<view class="right-top">
					<view class="right-left-text">
						<view class="right-text-top">千款特价商品不看看嘛</view>
						<view class="right-text-bottom">客官~走过路过别错过哟~</view>
					</view>
					<view class="right-img"></view>
				</view>
				<view class="right-bottom">
					<view class="item-left">
						<image class="bottom-img-bot" src="../../../../static/images/icon/yhj-hover.png"></image>
						<view class="forigen">限时抢购</view>
						<view class="text">境外商品</view>
					</view>
					<view class="item-right">
						<image class="bottom-img-bot" src="../../../../static/images/icon/text-hover.png"></image>
						<view class="forigen">限时抢购</view>
						<view class="text">境外商品</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

</script>

<style scoped>
	.tmh {
		margin-left: 17px;
		margin-right: 17px;
		background-color: #FFFFFF;
		border-radius: 20px;
		margin-top: -20px;
	}
	.top {
		margin: 10px 10px;
		margin-top: 10px;
		margin-bottom: 10px;
		overflow: hidden;
	}
	.top-left {
		float: left;
		margin-top: 10px;
		font-size: 18px;
		color: #DD524D;
		width: 80px;
		height: 40rpx;
		float: left;
		background: url('https://images4.c-ctrip.com/target/0zc71120008g0ha4z93C6.png') no-repeat;
		background-size: auto 40rpx;
	}
	.top-right {
		margin-top: 10px;
		float: right;
		font-size: 14px;
		width: 100rpx;
		height: 40rpx;
		background-color: #55A532;
		border-radius: 5px;
		text-align: center;
	}
	.top-text {
		color: #FFFFFF;
	}
	.body {
		overflow: hidden;
		border-radius: 20px;
	}
	.body-left {
		width: 49.5%;
		float: left;
	}
	.body-img {
		width: 100%;
		height: 125px;
	}
	.left-img {
		width: 100%;
		height: 100%;
	}
	.left-desc {
		width: 100%;
		font-size: 12px;
		color: #5b5852;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		background-color: #F0FFFF;
	}
	.price, .word {
		font-size: 14px;
		color: #5b5852;
		text-align: center;
	}
	.number {
		font-size: 18px;
		color: Tomato;
	}
	.price {
		background-color: #F0FFFF;
		border-top: 1px solid #8B8682;
	}
	.body-right {
		float: right;
		width: 50.4%;
	}
	.right-top {
		width: 100%;
		height: 95px;
	}
	.right-left-text {
		float: left;
		width: 49%;
		height: 95px;
		margin-left: 5rpx;
		background-color: #E8E8E8;
	}
	.right-text-top {
		color: #DD524D;
		font-size: 16px;
		font-weight: 800;
		text-align: center;
	}
	.right-text-bottom {
		font-size: 12px;
		font-weight: 300;
		text-align: center;
	}
	.right-img {
		float: right;
		width: 48%;
		height: 95px;
		background: url('https://youimg1.c-ctrip.com/target/0103y1200090pxlkiAF32_R_238_268.jpg') no-repeat;
		background-size: auto 107px;
	}
	.right-bottom {
		width: 100%;
		margin-left: 5rpx;
		margin-top: 5rpx;
	}
	.item-left {
		float: left;
		width: 49%;
		text-align: center;
		background-color: #E8E8E8;
	}
	.item-right {
		float: right;
		margin-left: 5rpx;
		width: 49%;
		text-align: center;
		background-color: #E8E8E8;
	}
	.bottom-img-bot {
		width: 69rpx;
		height: 69rpx;
	}
	.forigen {
		font-size: 12px;
		color: 	#828282;
	}
	.text {
		font-size: 10px;
		color: 	#828282;
	}

</style>
