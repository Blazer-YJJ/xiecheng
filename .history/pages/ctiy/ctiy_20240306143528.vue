<template>
	<view>
		<city-search :cities="cities"></city-search>
		<city-list :cities="cities" :hotCities="hotCities" :letter="letter" :city="city"></city-list>
		<city-alphabet :cities="cities" @change="hanbleLetterChange"></city-alphabet>
	</view>
</template>

<script>
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet"

export default {
	name: "city",
	components: {
		CitySearch,
		CityList,
		CityAlphabet
	},
	data() {
		return {
			cities: {},
			hotCities: [],
			letter: '',
			city: ''
		}
	},
	methods: {
		getCityInfo() {
			let that = this;

			uni.request({
				url: "http://192.168.0.103/api/city.json",
				success(res) {
					if (res.data.ret && res.data.data) {
						const data = res.data.data;

						that.cities = data.cities;
						that.hotCities = data.hotCities;
					}
				}
			})
		},
		hanbleLetterChange(e) {
			this.letter = e;
		}
	},
	onLoad() {
		this.getCityInfo();

		const value = uni.getStorageSync('cityName');

		this.city = value;
	}
}
</script>

<style></style>
