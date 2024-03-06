<template>
	<view class="content">
		<home-header></home-header>
		<home-swiper :swiperList="swiperList"></home-swiper>
		<home-icons :headerList="headerList" :bottomList="bottomList"></home-icons>
		<home-tmh></home-tmh>
		<home-activity :activityList="activityList"></home-activity>
	</view>
</template>

<script>
import HomeHeader from "./components/Header/Header";
import HomeSwiper from "./components/Header/Swiper";
import HomeIcons from "./components/Header/Icons";
import HomeTmh from "./components/Header/Tmh";
import HomeActivity from "./components/Header/Activity";

export default {
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeTmh,
		HomeActivity
	},
	data() {
		return {
			swiperList: [],
			headerList: [],
			bottomList: [],
			activityList: []
		}
	},
	methods: {
		getListInfo() {
			let that = this;

			uni.request({
				url: "http://192.168.0.103/api/index.json",

				success(res) {
					if (res.data.ret && res.data.data) {
						const data = res.data.data;

						that.swiperList = data.swiperList;
						that.headerList = data.headerList;
						that.bottomList = data.bottomList;
						that.activityList = data.activityList;
					}
				}
			})
		}
	},
	onLoad() {
		this.getListInfo()
	},
	onShareAppMessage(res) {
		if (res.from === 'menu') {

		}
		return {
			title: '便旅·首页',
			path: '/pages/home/home.vue'
		}
	}
}
</script>

<style>
page {
	background-color: #F1F1F1
}
</style>
