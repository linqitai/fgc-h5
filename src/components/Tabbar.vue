<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '~@/assets/scss/index.scss';
.van-tabbar{
	background-color:inherit !important;
}
[class*=van-hairline]::after{
	border: 1px solid $mainBorderColor !important; 
}
.van-tabbar-item{
	@include userSelectNone();
}
</style>
<template>
  <van-tabbar v-model="getActive" inactive-color="#ffffff" active-color="#ffae00" @change="onChange">
    <!-- <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="coupon-o" replace to="/mill">矿机商城</van-tabbar-item>
    <van-tabbar-item icon="exchange" replace to="/deal">交易中心</van-tabbar-item>
    <van-tabbar-item icon="contact" replace to="/my">个人中心</van-tabbar-item>
	<van-tabbar-item icon="good-job-o" replace to="/raiseApplyList">贴吧</van-tabbar-item> -->
	<van-tabbar-item icon="home-o">首页</van-tabbar-item>
	<van-tabbar-item icon="coupon-o">矿机商城</van-tabbar-item>
	<van-tabbar-item icon="exchange">交易中心</van-tabbar-item>
	<van-tabbar-item icon="contact">个人中心</van-tabbar-item>
  </van-tabbar>
</template>
<script>
// import { Button } from 'vant';<van-icon name="exchange" />
// import Button from 'vant/lib/button';
// import 'vant/lib/button/style';
import { Dialog } from 'vant';
export default {
	props: {
		msg: String
	},
    data() {
		return {
			active: 0,
			boolTrue:true
		}
	},
	created() {
		//...判断tabbar 的 active
		let _this = this;
		let params = window.location.hash;
		//console.log('params',params);
		let hash = params.substr(2);
		switch(hash) {
		    case 'home':
		       _this.active = 0;
		       break;
			case 'mill':
			   _this.active = 1;
			   break;
			case 'deal':
			   _this.active = 2;
			   break;
			case 'my':
			   _this.active = 3;
			   break;
		    default:
		       _this.active = 0;
		}
		_this.$store.commit('setTabbarActive', _this.active)
	},
	computed:{
		getActive(){
			return this.$store.state.tabbarActive;
		}
	},
	methods:{
		onChange(index){
			let _this = this;
			_this.$store.commit('setTabbarActive', index)
			switch(index) {
			    case 0:
			       _this.$router.replace("home")
			       break;
				case 1:
				   _this.$router.replace("mill")
				   break;
				case 2:
				   /* _this.$router.replace("deal") */
				   /* _this.$toast("此功能正在努力建设中"); */
				   if(_this.$utils.getDateTime(new Date())>'2020/12/31 23:59:59'){
				   	_this.$router.replace("deal")
				   }else{
				   	Dialog.alert({
				   	  title: '系统提示',
				   	  message: '此版块将于元旦开放，交易中心的初始价格正在经过投票中，请前往【首页的共识投票】查看'
				   	}).then(() => {
				   	  // on close
					  _this.$router.replace("voteList")
				   	});
				   }
				   break;
				case 3:
				   _this.$router.replace("my")
				   break;
			    default:
			       _this.$router.replace("home")
			}
		}
	}
}
</script>
