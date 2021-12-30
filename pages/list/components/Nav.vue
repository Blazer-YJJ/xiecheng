<template>
	<view class="nav">
		<!-- glance 滑动导航栏组件 -->
		<glanceSlideNavTabBar 
		    topfixedval='0px' 
		    :topfixed=true 
		    @clickitem="clickitem" 
		    :data = "[{textcontent:'全部'},
		            {textcontent:'自由行'},
		            {textcontent:'跟团游'},
		            {textcontent:'游轮游'},
					{textcontent:'火车机票'},
					{textcontent:'景点门票'},
					{textcontent:'当地玩乐'}]"
		>
		</glanceSlideNavTabBar>
	</view>
</template>

<script>
	import glanceSlideNavTabBar from './../../../wxcomponents/glance-SlideNavTabBar/glance-SlideNavTabBar';
	export default{
		name: "ListNav",
		components: {
			glanceSlideNavTabBar
		},
		methods: {
			clickitem(idx,val){
			    // 处理刷新导航的内容
			    uni.showToast({
			        title: val // val:指点击的导航栏位值
				})
			}
		}
	}
</script>

<style scoped>
	.nav {
		position: fixed;
		z-index: 2;
		top: 0; 
		left: 0;
		right: 0;
		margin-top: 44px;
		height: 30px;
		border: 1px solid #EAEAEC;
	}
</style>
