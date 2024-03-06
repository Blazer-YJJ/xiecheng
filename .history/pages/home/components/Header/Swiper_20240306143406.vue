<template>
	<view class="swiper">
		<swiper :autoplay="autoplay" 
				:interval="interval" 
				:duration="duration" 
				circular="circular" 
				@change="swiperChar"
		>
			<block v-for="item in swiperList" :key="item.id">
				<swiper-item>
					<image :src="item.imgUrl" mode="scaleToFill"></image>
				</swiper-item>
			</block>
		</swiper>
		<view class="dots">
			<block v-for="(item, index) in swiperList" :key="item.id">
				<view :class="[index == swiperCurrent ? 'active dot' : 'dot']"></view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				autoplay: true,
				interval: 3000,
				duration: 1000,
				circular: true,
				swiperCurrent: 0,
			}
		},
		props: {
			swiperList: Array
		},
		methods: {
			swiperChar(res) {
				this.swiperCurrent = res.detail.current;
			}
		}
	}
</script>

<style scoped>
	.swiper {
		position: relative;
		margin-top: 100rpx;
		width: 750rpx;
		height: 175px;
	}
	swiper {
		width: 100%;
		height: 100%;
	}
	image {
		width: 100%;
	}
	.dots {
		position: absolute;
		right: 10px;
		bottom: 35px;
		display: flex;
		justify-content: center;
	}
	.dot {
		margin: 0 4px;
		width: 7px;
		height: 7px;
		background: rgba(255,255,255,0.5);
		border-radius: 8px;
		transition: all .6s;
	}
	.dot.active {
		width: 20px;
		border-radius: 8px;
		background-color: #FFFFFF;
	}
</style>
