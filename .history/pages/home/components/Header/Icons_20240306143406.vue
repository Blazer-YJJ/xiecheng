<template>
	<view class="icons">
		<view class="top">
			<view class="top-item" v-for="(item, i) in headerList" :key="i">
				<view class="top-icon" :style="item.position"></view>
				<view class="top-desc">{{ item.desc }}</view>
			</view>
		</view>
		<view class="center">
			<view class="center-top">
				<view class="hotel">酒店</view>
				<view class="house">民宿/客栈</view>
				<view class="ticket">机票/火车票</view>
			</view>
			<view class="center-center">
				<view class="plane">机票</view>
				<view class="trian">火车票</view>
				<view class="car">汽车/船票</view>
				<view class="taxi">汽车/租车</view>
			</view>
			<view class="center-bottom">
				<view class="travel">旅游</view>
				<view class="skytrain">高铁游</view>
				<view class="boat">游轮游</view>
				<view class="custom">定制游</view>
			</view>
		</view>
		<view class="bottom">
			<view class="bottom-item" v-for="(item, j) in bottomList" :key="j">
				<view class="bottom-icon" :style="item.position"></view>
				<view class="bottom-desc">{{ item.desc }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "HomeIcons",
		props: {
			headerList: Array,
			bottomList: Array
		}
	}
</script>

<style>
	.icons {
		position: relative;
		top: -30px;
		z-index: 1;
		padding-left: 12px;
		padding-right: 12px;
	}
	.top {
		height: 90px;
		border-radius: 18px;
		background-color: #FFFFFF;
		margin-bottom: 5px;
	}
	.top-item {
		width: 20%;
		float: left;
	}
	.top-icon {
		width: 60px;
		height: 60px;
		margin: 0 auto;
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/nav.png') no-repeat;
		background-size: 60px;
	}
	.top-desc {
		text-align: center;
		font-size: 12px;
		color: #222222
	}
	.cente {
		color: #FFFFFF;
		font-size: 14px;
	}
	.center-top {
		overflow: hidden;
		margin-bottom: 2px;
		line-height: 80px;
		font-size: 14px;
		color: #555555;
		font-weight: 600;
	}
	.hotel, .house, .ticket {
		float: left;
		text-align: center;
	}
	.hotel {
		width: 21.6%;
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/nav.png') no-repeat;
		background-color: #FB7D51;
		background-size: 65px auto;
		background-position: 15rpx -190px;
		border-radius: 20px 0px 0px 0px;
	}
	.house {
		width: 21.6%;
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/nav.png') no-repeat;
		margin-left: 5rpx;
		background-color: #DD524D;
		background-size: 74px auto;
		background-position: 10rpx -882px;
	}
	.ticket {
		width: 55%;
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/nav.png') no-repeat;
		margin-left: 5rpx;
		border-radius: 0px 20px 0px 0px;
		background-color: #007AFF;
		background-size: 74px auto;
		background-position: 110rpx -442px
	}
	.center-center, .center-bottom {
		overflow: hidden;
		margin-bottom: 2px;
		line-height: 80px;
		font-size: 14px;
		color: #555555;
		font-weight: 600;
	}
	.plane, .trian, .car, .taxi {
		float: left;
		text-align: center;
	}
	.plane {
		width: 21.6%;
		margin-right: 5rpx;
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/nav.png') no-repeat;
		background-size: 75px auto;
		background-position: 5rpx -750px;
		background-color: #4d9aed;
	}
	.trian {
		width: 21.6%;
		margin-right: 5rpx;
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/nav.png') no-repeat;
		background-size: 75px auto;
		background-position: 5rpx -975px;
		background-color: #4d9aed;
	}
	.car {
		width: 27.2%;
		margin-right: 5rpx;
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/nav.png') no-repeat;
		background-size: 75px auto;
		background-position: 30rpx -600px;
		background-color: #4d9aed;
	}
	.taxi {
		width: 27%;
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/nav.png') no-repeat;
		background-size: 75px auto;
		background-position: 30rpx -675px;
		background-color: #4d9aed;
	}
	.travel, .skytrain, .boat, .custom {
		float: left;
		width: 24.3%;
		text-align: center;
	}
	.travel {
		margin-right: 5rpx;
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/nav.png') no-repeat;
		background-size: 78px auto;
		background-position: 15rpx -545px;
		background-color: #F0AD4E;
		border-radius: 0px 0px 0px 20px;
	}
	.skytrain {
		margin-right: 5rpx;
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/nav.png') no-repeat;
		background-size: 78px auto;
		background-position: 15rpx -1015px;
		background-color: #F0AD4E;
	}
	.boat {
		margin-right: 5rpx;
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/nav.png') no-repeat;
		background-size: 78px auto;
		background-position: 15rpx -152px;
		background-color: #F0AD4E;
	}
	.custom {
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/nav.png') no-repeat;
		background-size: 78px auto;
		background-position: 15rpx -80px;
		background-color: #F0AD4E;
		border-radius: 0px 0px 20px 0px;
	}
	.bottom {
			width: 100%;
			overflow: hidden;
			margin-top: 5rpx;
			font-size: 25rpx;
			color: #333333;
			margin: 10px 5px;
	}
	.bottom-item {
		width: 18.5%;
		float: left;
		margin-top: 5px;
		text-align: center;
		margin: 5rpx 2.5rpx;
		
	}
	.bottom-icon {
		width: 50px;
		height: 50px;
		margin: 0 auto;
		background: url('https://webresource.c-ctrip.com/NFES/html5/1631703195693/_next/serverStatic/img/subnav.png') no-repeat;
		background-size: 45px auto;
	}
</style>
