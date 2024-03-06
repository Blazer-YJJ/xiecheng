<template>
	<view class="message">
		<view class="message-img">
			<image class="img" src="../../static/images/icon/text-hover.png" mode=""></image>
		</view>
		{{ message }}
	</view>
</template>

<script>
export default {
	name: "message",
	data() {
		return {
			message: '当前暂无消息'
		}
	},

}
</script>

<style scoped>
.message {
	font-size: 18px;
	text-align: center;
	color: #888888;
	margin: 0 auto;
}

.message-img {
	margin-top: 200rpx;
}

.img {
	width: 55px;
	height: 55px;
}

image {
	width: 100%;
	height: 100%;
}
</style>
