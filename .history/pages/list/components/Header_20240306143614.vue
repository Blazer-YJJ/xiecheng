<template>
	<view class="header">
		<view class="search">
			<view class="search-left">
				<view class="iconfont location">&#xe600;</view>
				<view class="station" @click="toCity">{{ city }}站</view>
			</view>
			<view class="search-right">
				<view class="search-icon iconfont">&#xe61a;</view>
				<view class="desc">目的地/关键字</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "ListHeader",
	props: {
		city: String
	},
	methods: {
		toCity() {
			uni.navigateTo({
				url: "/pages/ctiy/ctiy"
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
	bottom: 0;
	z-index: 1;
	height: 44px;
	background-color: #fafafc;
}

.search {
	width: 88%;
	height: 30px;
	line-height: 30px;
	margin-top: 6px;
	margin-left: 6%;
	border-radius: 20px;
	background-color: #DCDCDC;
}

.search-left {
	padding-left: 10px;
	padding-right: 15px;
	float: left;
}

.location,
.station {
	font-size: 14px;
	color: #448aff;
	float: left;
}

.search-right {
	line-height: 30px;
	float: left;
}

.search-icon,
.desc {
	float: left;
	margin-left: 5px;
	font-size: 14px;
	color: #999999;
}
</style>
