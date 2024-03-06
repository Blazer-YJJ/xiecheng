<template>
	<view class="list">
		<list-header :city="city"></list-header>
		<list-nav></list-nav>
		<list-item :itemList="itemList"></list-item>
		<view class="loading">{{ loadingText }}</view>
	</view>
</template>

<script>
import ListHeader from "./components/Header.vue";
import ListNav from "./components/Nav.vue";
import ListItem from "./components/Item.vue";

export default {
	data() {
		return {
			itemList: [],
			loadingText: '加载更多',
			num: 0,
			city: ''
		}
	},
	components: {
		ListHeader,
		ListNav,
		ListItem
	},
	methods: {
		getListInfo() {
			uni.showNavigationBarLoading();

			let that = this;

			uni.request({
				url: "http://192.168.0.103/api/list.json",

				success(res) {
					if (res.data.ret && res.data.data) {
						const data = res.data.data;

						that.itemList = data.itemList;
						uni.hideNavigationBarLoading();
						uni.stopPullDownRefresh();
					}
				}
			})
		},
		getMoreInfo(e) {
			let that = this;

			if (e == 1) {
				that.loadingText = '已加载全部数据~~';

				return false;
			}

			uni.showNavigationBarLoading();
			uni.request({
				url: "http://192.168.0.103/api/lists.json",

				success(res) {
					uni.hideNavigationBarLoading();

					if (res.data.ret && res.data.data) {
						const data = res.data.data;
						that.itemList = data.itemList.concat(data.itemList);	//累加
						that.num = 1;
					}
				}
			});
		}
	},
	onLoad() {
		this.getListInfo();

	},
	onPullDownRefresh() {
		this.getListInfo();
	},
	onReachBottom() {
		this.getMoreInfo(this.num);
	},
	onShareAppMessage(res) {
		if (res.from === 'menu') { }

		return {
			title: '便旅·商品-列表',
			path: '/pages/list/list.vue'
		}
	},
	onShow() {
		try {
			const value = uni.getStorageSync('cityName');
			this.city = value;
		} catch (e) {
			//TODO handle the exception
		}
	}
}
</script>

<style>
page {
	background-color: #EAEAEC;
}

.loading {
	line-height: 2em;
	color: #888888;
	text-align: center;
	margin-top: 30px;
	font-size: 14px;
}
</style>
