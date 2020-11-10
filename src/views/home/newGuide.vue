<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/index.scss';
[class*=van-hairline]::after {
    border: 1px solid transparent !important;
}
.newGuide{
	@include page4Home();
	.newGuideContent{
		color: $mainTextColor;
		min-height: 100%;
		width: 100%;
		box-sizing: border-box;
		background-color: $main-bg-color;
		.list {
			width: 100%;
			padding: 6px 6px;
			box-sizing: border-box;
			.item {
				width: 100%;
				border: 1px solid $bottomLineColor;
				letter-spacing: 1px;
				background-color: $main-box-color;
				margin-bottom: 4px;
				border-radius: 4px;
				overflow: hidden;
				&::last-child{
					margin-bottom: 0px;
				}
				.imgBox{
					width: 100%;
					img{
						width: 100%;
					}
				}
				.textBox{
					padding: 4px 10px;
					.freeGet{color: $main-adorn-color !important;}
					.title{font-size: $fs-title;font-weight: bold;color: $mainTextColor !important;}
					.line{
						overflow: hidden;clear: both;
						&.content{font-size: $fs-content;line-height: 1.3em;color: $mainTextColor !important;}
					}
					
				}
			}
		}
	}	
}
</style>
<template>
  <div class="newGuide">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">
			新手指南
		</div>
		<i class="iconfont iconfont-question rightBox icon"></i>
	</m-header>
	<div class="newGuideContent">
		<div class="list">
			<div class="item" v-for="item in list">
				<!-- <router-link to="shopDetail"></router-link> -->
				<!-- <div class="imgBox">
					<img :src="item.image" alt="">
				</div> -->
				<div class="textBox">
					<div class="line">
						<div class="left title">{{item.title}}</div>
						<!-- <div class="freeGet right">2020/08/01 12:12:12</div> -->
					</div>
					<!-- <div class="line content margT3 justify">平台小店预热优惠活动：订购此产品需交￥299押金，下单成功且经过商家审核后，奖励299张平台券，每人最多拍1件(备注：激活POS机需要刷卡满￥299，激活成功后再找商家审核，审核确实激活后，您所交的￥299押金可退回)</div> -->
					<div class="line content margT3"><div class="left">{{item.time}}</div><div class="right underline"><a :href="item.url" target="_blank">查看详情</a></div></div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { getTestUser,ERR_OK } from "@/api/index";
// import {getCookie} from '@/assets/js/utils.js'
import mHeader from '@/components/Header.vue';
export default {
	data() {
		return {
			list:[],			
			userId:'',
			loading1: false,
			finished1: false,
		}
	},  
	components:{
	    mHeader
	},
	mounted(){
		let _this = this;
		_this.list = _this.$config.guideList;
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
	}
}
</script>
