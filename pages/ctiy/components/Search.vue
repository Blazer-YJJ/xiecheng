<template>
	<view class="input">
		<view class="search">
			<view class="icon"></view>
			<input class="search-input" type="text" placeholder="城市/拼音" confirm-type="search" @input="handleInput"></input>
			<view class="search-contnet" v-show="inputVal">
				<view class="search-item" 
					  v-for="item in list" 
					  :key="item.id" 
					  @click="handleCityClick(item.name)"
				>
					{{ item.name }}
				</view>
				<view class="search-item" v-if="!list.length">暂无数据。。。</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputVal: '',
				list: []
			}
		},
		props: {
			cities: Object
		},
		methods: {
			handleInput(e) {
				this.inputVal = e.detail.value;
			},
			handleCityClick(res) {
				try{
					uni.setStorageSync('cityName', res);
				}catch(e){
					//TODO handle the exception
				}
				
				uni.switchTab({
					url: '/pages/list/list'
				})
			}
		},
		watch: {	
			inputVal() {
				if(!this.inputVal) {
					this.list = [];
					return;
				}
				
				const reslut = [];
				
				for(let i in this.cities){
					this.cities[i].forEach((value) => {
						if(value.spell.indexOf(this.inputVal) > -1 || value.name.indexOf(this.inputVal) > -1 ){
							reslut.push(value)
						}
						
						this.list = reslut;
					})
				}
			}
		}
	}
</script>

<style>
	.search {
		height: 50px;
		padding-top: 10px;
		padding-left: 10px;
		background: #EFEFF4
	}
	.icon {
		position: absolute;
		width: 20px;
		height: 20px;
		margin-top: 10px;
		margin-left: 12px;
		background: url('https://pages.c-ctrip.com/you/livestream/tripshoot_search@3x.png') no-repeat;
		background-size: 20px auto;
	}
	.search-input {
		box-sizing: border-box;
		border: none;
		width: 95%;
		height: 38px;
		line-height: 38px;
		padding-left: 39px;
		margin-left: 5px;
		border-radius: 16px;
		color: #333333;
		font-size: 14px;
		background: #FFFFFF;
	}
	.search-contnet {
		z-index: 1;
		width: 100%;
		position: absolute;
		top: 60px;
		background-color: #FAFAFC;
	}
	.search-item {
		height: 30px;
		line-height: 30px;
		padding-left: 10px;
		background: #FFFFFF;
		color: #999999;
		font-size: 14px;
		border-bottom: 1px solid #EAEAEC;
	}
</style>
