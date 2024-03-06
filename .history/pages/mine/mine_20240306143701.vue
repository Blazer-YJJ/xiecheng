<template>
	<view class="mine">
		<mine-header></mine-header>
		<mine-center></mine-center>
		<mine-bottom></mine-bottom>
	</view>
</template>

<script>
import MineHeader from "./components/Header";
import MineCenter from "./components/Center";
import MineBottom from "./components/Bottom";

export default {
	components: {
		MineHeader,
		MineCenter,
		MineBottom
	}
}
</script>

<style scoped>
.mine {
	background: #F5F5F5;
	height: 1366rpx;
}
</style>
