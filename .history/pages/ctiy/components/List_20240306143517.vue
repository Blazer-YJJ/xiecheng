<template>
	<view>
		<scroll-view class="list" scroll-y="true" :scroll-into-view="toView">
			<view class="header">
				<view class="now">当前城市</view>
				<view class="local-city iconfont">&#xe600;&nbsp;&nbsp;{{ city }}</view>
			</view>
			<view class="center">
				<view class="hot">热门出发站</view>
				<view class="city-list">
					<view class="item" v-for="item in hotCities" :key="item.id" @click="handleCityClick(item.name)">
						{{ item.name }}
					</view>
				</view>
			</view>
			<view class="bottom-list">
				<block v-for="(item, key) of cities" :key="key">
					<view class="alphabet" :id="key">{{ key }}</view>
					<view class="bottom-item" v-for="innerItem of item" :key="innerItem.id"
						@click="handleCityClick(innerItem.name)">
						{{ innerItem.name }}
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	name: "CityList",
	data() {
		return {
			toView: ''
		}
	},
	props: {
		cities: Object,
		hotCities: Array,
		letter: String,
		city: String
	},
	watch: {
		letter() {
			this.toView = this.letter;
		}
	},
	methods: {
		handleCityClick(res) {
			try {
				uni.setStorageSync('cityName', res);
			} catch (e) {
				//TODO handle the exception
			}

			uni.switchTab({
				url: '/pages/list/list'
			})
		}
	}
}
</script>

<style scoped>
.list {
	width: 100%;
	background: #FFFFFF;
}

.header {
	height: 70px;
	padding-left: 10px;
}

.hot,
.now {
	color: #999999;
	font-size: 13px;
	padding-bottom: 10px;
	;
}

.local-city,
.item {
	float: left;
	width: 28.5%;
	height: 30px;
	line-height: 30px;
	margin-right: 3.3%;
	text-align: center;
	border-radius: 5px;
	font-size: 14px;
	color: #333333;
	overflow: hidden;
	box-shadow: 0 0 5px rgba(200, 200, 200, 1);
}

.iconfont {
	font-size: 14px;
	color: #448AFF;
}

.item {
	margin-bottom: 15px;
	margin-top: 5px;
}

.hot {
	padding-left: 10px;
}

.city-list {
	padding-left: 10px;
	overflow: hidden;
}

.bottom-list {
	color: #333333;
	padding-left: 20px;
}

.alphabet {
	height: 25px;
	line-height: 25px;
	padding-left: 10px;
	margin-top: 12px;
	margin-right: 28px;
	font-size: 12px;
	font-weight: 500;
	background: #F5F5F5;
	margin-bottom: 5px;
}

.bottom-item {
	line-height: 44px;
	margin-right: 28px;
	font-size: 14px;
	border-bottom: 1px solid #EAEAEC;
}
</style>
