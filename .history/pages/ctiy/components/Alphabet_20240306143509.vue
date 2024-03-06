<template>
	<view class="all">
		<view class="letter">当前</view>
		<view class="letter">热门</view>
		<view class="letter" v-for="item in letters" :key="item" @click="handleLetterClick(item)">
			{{ item }}
		</view>
	</view>
</template>

<script>
export default {
	name: "CityAlphabet",
	props: {
		cities: Object
	},
	data() {
		return {
			touchStarus: false
		}
	},
	computed: {
		letters() {
			const letters = [];

			for (let i in this.cities) {
				letters.push(i);
			}

			return letters;
		}
	},
	methods: {
		handleLetterClick(e) {
			console.log(e)
			this.$emit("change", e);
		}
	}
}
</script>

<style>
.all {
	position: fixed;
	top: 120px;
	right: 0;
}

.letter {
	width: 28px;
	height: 14px;
	line-height: 14px;
	color: #19A0F0;
	font-size: 12px;
	text-align: center;
}
</style>