<template>
	<view class="header">
		<block v-if="true">
			<view class="start">登录便旅--开启您的便捷旅行</view>
			<navigator class="login" url="/pages/login/login">登录or注册</navigator>
			<view class="search">查询信息</view>
		</block>
		<block v-if="false">
			<view class="start">尊敬的用户，您好！</view>
			<navigator class="login" url="/pages/login/login">退出登录</navigator>
			<view class="search">查询信息</view>
		</block>
	</view>
</template>

<script>
export default {
	name: "MineHeader"
}
</script>

<style>
.header {
	width: 100%;
	height: 140px;
	color: #FFFFFF;
	background: #1a67a5 url('https://pic.c-ctrip.com/platform/h5/my/home/photo_myctrip@2x_6.22.jpg') no-repeat;
}

.start {
	padding-top: 20px;
	line-height: 44px;
	text-align: center;
	font-size: 18px;
	margin-bottom: 20px;
}

.login,
.search {
	width: 240rpx;
	height: 36px;
	line-height: 36px;
	text-align: center;
	font-size: 15px;
	border-radius: 50px;
	float: left;
}

.login {
	background-color: #ff9a14;
	border: 1px solid #FF9A14;
	margin-left: 50px;
}

.search {
	background: rgba(255, 255, 255, 0.15);
	border: 1px solid rgba(255, 255, 255, 0.5);
	margin-left: 30px;
}
</style>
