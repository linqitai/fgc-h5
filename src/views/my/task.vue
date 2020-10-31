<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/index.scss';
[class*=van-hairline]::after {
    border: 1px solid transparent !important;
}
.modelTip{
	font-size: 0.75rem;
	padding: 0 12px;
	color: $grayDarker;
}
.realname{
	@include pageMy();
	.taskList{
		width: 100%;
		padding: $boxPadding2;
		box-sizing: border-box;
		color: $main-box-fh-text-color;
		.box{
			position: relative;
			display: flex;
			flex-direction: row;
			align-items: center;
			border-radius: 4px;
			overflow: hidden;
			padding: $boxPadding2;
			color: $main-box-fh-text-color;
			clear: both;
			&.finishInfo{
				background-color: $main-adorn-color;
			}
			.flexLeft{
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: left;
				padding-right: 12px;
				.line{
					flex: 1;
				}
				.title{
					font-size: 16px;
				}
				.text{
					font-size: 12px;
					line-height: 1.6em;
				}
			}
			.flexRight{
				flex: 0 0 60px;
				text-align: right;
				.iconfont-finished{
					font-size: 60px;
				}
			}
		}
	}
	.update1{
		.van-field__control{
			color: #323232 !important;
		}
	}
}
</style>
<template>
  <div class="realname">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">
			任务中心
		</div>
		<i class="iconfont iconfont-question rightBox icon" @click="showTip"></i>
	</m-header>
	<div class="taskList">
		<div class="box finishInfo">
			<div class="flexLeft">
				<div class="line title">
					基础任务1 
				</div>
				<div class="line text margT10">
					实名认证<br>
					完成后即可获得系统所空投的FGC<br>
				</div>
			</div>
			<div class="flexRight">
				<i class="iconfont iconfont-finished" v-if="userInfo.actived==1"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box finishInfo">
			<div class="flexLeft">
				<div class="line title">
					基础任务2
				</div>
				<div class="line text margT10">
					激活账户<br>
					连续签到15天后即可激活账户<br>
				</div>
			</div>
			<div class="flexRight">
				<i class="iconfont iconfont-finished" v-if="userInfo.isActived==1"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box finishInfo">
			<div class="flexLeft">
				<div class="line title">
					升级任务1
				</div>
				<div class="line text margT10">
					成为青铜级工会会长<br>
					需要：<br>
					有效直推10名 + 个人持币10个 + 一代团队持币1000个<br>
					完成后:<br>
					奖励10个感恩值<br>
				</div>
			</div>
			<div class="flexRight">
				<i class="iconfont iconfont-finished" v-if="userInfo.level==1"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box finishInfo">
			<div class="flexLeft">
				<div class="line title">
					升级任务2
				</div>
				<div class="line text margT10">
					成为白银级工会会长<br>
					需要：<br>
					有效直推100名 + 个人持币100个 + 一代团队持币10000个+三个青铜会长<br>
					完成后:<br>
					奖励100个感恩值<br>
				</div>
			</div>
			<div class="flexRight">
				<i class="iconfont iconfont-finished" v-if="userInfo.level==2"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box finishInfo">
			<div class="flexLeft">
				<div class="line title">
					升级任务3
				</div>
				<div class="line text margT10">
					成为黄金级工会会长<br>
					需要：<br>
					有效直推200名 + 个人持币500个 + 一代团队持币50000个+三个白银会长<br>
					完成后:<br>
					奖励1000个感恩值<br>
				</div>
			</div>
			<div class="flexRight">
				<i class="iconfont iconfont-finished" v-if="userInfo.level==3"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box finishInfo">
			<div class="flexLeft">
				<div class="line title">
					升级任务4
				</div>
				<div class="line text margT10">
					成为铂金级工会会长<br>
					需要：<br>
					有效直推300名 + 个人持币1000个 + 一代团队持币200000个+三个黄金会长<br>
					完成后:<br>
					奖励2000个感恩值<br>
				</div>
			</div>
			<div class="flexRight">
				<i class="iconfont iconfont-finished" v-if="userInfo.level==4"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box finishInfo">
			<div class="flexLeft">
				<div class="line title">
					升级任务5
				</div>
				<div class="line text margT10">
					成为钻石级工会会长<br>
					需要：<br>
					有效直推400名 + 个人持币5000个 + 一代团队持币600000个+三个铂金会长<br>
					完成后:<br>
					奖励10000个感恩值<br>
				</div>
			</div>
			<div class="flexRight">
				<i class="iconfont iconfont-finished" v-if="userInfo.level==5"></i>
			</div>
		</div>
		<van-divider>我是有底线的</van-divider>
	</div>
	<van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="好的">
		<div class="paddingWing f-12 lineHeight tip4model2 textJustify">
			<!-- <div class="title f-14">
				会员期权制度：
			</div>
			<div class="placeholderLine4"></div>
			<div class="title">
				平台每个月都会拿出总盈利的30%来发放给平台的高级工会会长。
			</div>
			<div>
				凡是黄金级以上的工会会长（包括黄金）花1个帮扶券即可获得在帮扶链平台的期权分红，每2个月发放分红一次，具体明细如下：
			</div>
			<div>
				黄金级工会会长期权分红（简称3-5期权分红）:所拥有矿石÷所有黄金会长所拥有矿石总和×平台前2个月交易手续费总收入×30%×50%
			</div>
			<div>
				铂金级工会会长期权分红（简称3-3期权分红）:所拥有矿石÷所有铂金会长所拥有矿石总和×平台前2个月交易手续费总收入×30%×30%
			</div>
			<div>
				钻石级工会会长期权分红（简称3-2期权分红）:所拥有矿石÷所有钻石会长所拥有矿石总和×平台前2个月交易手续费总收入×30%×20%
			</div> -->
			<!-- <div class="placeholderLine10"></div> -->
			<div class="textIndent">
				Tip1：平台会不定期开放回收市场交易区高于溢价回收矿石，所回收的矿石都销毁处理。
			</div>
			<div class="placeholderLine10"></div>
			<div class="textIndent">
				Tip2：平台会不定期举办爱心帮扶活动，帮助经济上有困难的会长，大病求助款优先获得帮助，帮扶对象的年龄为24~70周岁(需要医院证明，然后省市代理去拜访帮扶对象并核实)；若是18周岁以上的学生，学费上有困难也可以得到帮扶链平台的帮助(需要家乡居委会的证明，然后省市代理去拜访帮扶对象并核实)；帮扶对象由省市代理以及白银级以上的工会会长（包括白银）引荐。
			</div>
			<div class="placeholderLine10"></div>
			<div class="textIndent">
				Tip3：另外，平台特意申明，为了维护所有用户的利益，为了打造去中心化的好平台，帮扶链所有用户的矿石数量都公开透明，人人可查，受全体会员的监管，平台方绝对不会也没机会在矿石上获取盈利，项目的建设以及价格都由市场用户的共识性所决定。还有在项目的建设、制度以及模式上每个用户都可以给平台留言提建议，客服会收集整理可行性方案，然后以投票的方式让全体工会会长共同决定，一切需求由半数以上工会会长投票认可后才进行研发与上线，帮扶链工会会全心全意为广大用户提供一个有价值的平台。
			</div>
		</div>
	</van-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { getTestUser,ERR_OK } from "@/api/index";
// import {getCookie} from '@/assets/js/utils.js'
import mHeader from '@/components/Header.vue';
import { Dialog } from 'vant';
export default {
	data() {
		return {
			showTipModel:false,
			result:"",
			loading:true,
			loading4Reword:false,
			showUpdateModel:false,
			showUpdatePasswordModel:false,
			showRealNameModel:false,
			titleName:'',
			label:'---',
			userInfo:{},
			updateValidate:true,
			flag:'',
			isRealName:true,
			isShare3:false,
			isAgency:false,
			userId:'',
			isShowQunTaskOK:false,
			teamBuyMachineNum:0,
			teamLevelAddNum:0,
			createFlockMillInventory:0,
			activity1MillInventory:0,
			activity2MillInventory:0,
			activity3MillInventory:0,
			activity3MillInventory2:0,
			myActivity1MillNum:0,
			myActivity2MillNum:0,
			teamActivedNum1:0,
			teamActivedNum2:0
		}
	},  
	components:{
	    mHeader
	},
	mounted(){
		let _this = this;
		let userInfo = localStorage.getItem("_USERINFO_");
		if(userInfo){
			_this.userInfo = JSON.parse(userInfo);
		}else{
			_this.$toast(_this.$api.loginAgainTipText);
			_this.$router.replace('login');
			return;
		}
		// _this.isShare3 = _this.userInfo.num==null?false:_this.userInfo.num>=3?true:false;
		// console.log('_this.isShare3',_this.isShare3)
		if(_this.userInfo.actived==1){
			_this.isRealName = true;
		}else{
			_this.isRealName = false;
		}
		_this.getAssistMyMachineCount4Task();
		_this.getActivityCompleteInfo();
		_this.getActivityMachineInventory();
		_this.getAssistUserInfoList4RealName();
		// console.log('_this.isRealName',_this.isRealName);
	},
	methods:{
		showTip(){
			this.showTipModel = true;
		},
		toView(type){
			let _this = this;
			if(type=='info'){
				_this.$router.push('/myInfo');
			}else if(type=='share3'){
				_this.$router.push('/myShare');
			}else if(type=='buyMill'){
				_this.$router.push('/mill');
			}else if(type=='deal'){
				_this.$router.push('/deal');
			}
		},
		getAssistUserInfoList4RealName(){
			let _this = this;
			_this.$ajax.ajax(_this.$api.getAssistUserInfoList4RealName, 'GET', null, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.teamActivedNum1 = res.data.teamActivedNum1;
					_this.teamActivedNum2 = res.data.teamActivedNum2;
				}else{
					_this.$toast(res.message);
				}
			})
		},
		getActivityCompleteInfo(){
			let _this = this;
			_this.loading4Reword = true;
			_this.$ajax.ajax(_this.$api.getActivityCompleteInfo, 'GET', null, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.teamBuyMachineNum = res.data.teamBuyMachineNum;
					_this.teamLevelAddNum = res.data.teamLevelAddNum;
					if(_this.teamBuyMachineNum>9){
						_this.getAssistMyMachineNum();
					}else if(_this.teamLevelAddNum>2){
						_this.getAssistMyMachineNum();
					}
				}else{
					_this.$toast(res.message);
				}
			},function(){
				_this.loading4Reword = false;
			})
		},
		getAssistMyMachineNum(){
			let _this = this;
			let params = {
				tag: 6,
				type: 1
			}
			_this.loading4Reword = true;
			_this.$ajax.ajax(_this.$api.getMyActivityMachineNum, 'GET', params, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.myActivity1MillNum = res.data.myActivity1MillNum;
					_this.myActivity2MillNum = res.data.myActivity2MillNum;
				}else{
					_this.$toast(res.message);
				}
			},function(){
				_this.loading4Reword = false;
			})
		},
		getActivityMachineInventory(){
			let _this = this;
			/* let params = {
				tag: 6,
				type: 1
			} */
			_this.loading4Reword = true;
			_this.$ajax.ajax(_this.$api.getActivityMachineInventory, 'GET', null, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.activity1MillInventory = res.data.activity1MachineNum;
					_this.activity2MillInventory = res.data.activity2MachineNum;
					_this.activity3MillInventory = res.data.activity3MachineNum;
					_this.activity3MillInventory2 = res.data.activity3MachineNum2;
					_this.createFlockMillInventory = res.data.createFlockMachineNum;
				}else{
					_this.$toast(res.message);
				}
			},function(){
				_this.loading4Reword = false;
			})
		},
		getActivity1Reward(){
			let _this = this;
			if(_this.teamBuyMachineNum<10){
				// _this.$toast("您已领取过该奖励");
				Dialog.alert({
				  title: '系统提示',
				  message: '您尚未达到领取该奖励的标准'
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.loading4Reword = true;
			_this.$ajax.ajax(_this.$api.getActivity1Reward, 'POST', null, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					Dialog.alert({
					  title: '温馨提示',
					  message: '恭喜您，奖励领取成功！'
					}).then(() => {
					  // on close
					  _this.$router.push('/myMill');
					});
				}else{
					_this.$toast(res.message);
				}
			},function(){
				_this.loading4Reword = false;
			})
		},
		getActivity2Reward(){
			let _this = this;
			if(_this.teamLevelAddNum<3){
				// _this.$toast("您已领取过该奖励");
				Dialog.alert({
				  title: '系统提示',
				  message: '您尚未达到领取该奖励的标准'
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.loading4Reword = true;
			_this.$ajax.ajax(_this.$api.getActivity2Reward, 'POST', null, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					Dialog.alert({
					  title: '温馨提示',
					  message: '恭喜您，奖励领取成功！'
					}).then(() => {
					  // on close
					  _this.$router.push('/myMill');
					});
				}else{
					_this.$toast(res.message);
				}
			},function(){
				_this.loading4Reword = false;
			})
		},
		getActivity3Reward(){
			let _this = this;
			_this.loading4Reword = true;
			_this.$ajax.ajax(_this.$api.getActivity3Reward, 'POST', null, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					//_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					Dialog.alert({
					  title: '温馨提示',
					  message: '恭喜您，奖励领取成功！'
					}).then(() => {
					  // on close
					  _this.$router.push('/myMill');
					});
				}else{
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  // on close
					});
				}
			},function(){
				_this.loading4Reword = false;
			})
		},
		getShareReword1(){
			let _this = this;
			if(_this.userInfo.isGetShareTask==1){
				// _this.$toast("您已领取过该奖励");
				Dialog.alert({
				  title: '系统提示',
				  message: '您已领取过该奖励'
				}).then(() => {
				  // on close
				});
				return;
			}
			if(_this.userInfo.realnameNum<10){
				// _this.$toast("您尚未达到领取该奖励的标准");
				Dialog.alert({
				  title: '系统提示',
				  message: '您尚未达到领取该奖励的标准'
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.loading4Reword = true;
			_this.$ajax.ajax(_this.$api.getShareReword, 'POST', null, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					Dialog.alert({
					  title: '温馨提示',
					  message: '恭喜您，奖励领取成功！'
					}).then(() => {
					  // on close
					  _this.$cookies.set("tab_name_book", "contribution", _this.$api.cookiesTime)
					  _this.$router.push('/myBook');
					});
				}else{
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  // on close
					});
				}
			},function(){
				_this.loading4Reword = false;
			})
		},
		getShareReword2(){
			let _this = this;
			if(_this.userInfo.isGetShareTask==2){
				// _this.$toast("您已领取过该奖励");
				Dialog.alert({
				  title: '系统提示',
				  message: '您已领取过该奖励'
				}).then(() => {
				  // on close
				});
				return;
			}
			if(_this.userInfo.realnameNum<20){
				// _this.$toast("您尚未达到领取该奖励的标准");
				Dialog.alert({
				  title: '系统提示',
				  message: '您尚未达到领取该奖励的标准'
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.loading4Reword = true;
			_this.$ajax.ajax(_this.$api.getShareReword, 'POST', null, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					Dialog.alert({
					  title: '温馨提示',
					  message: '恭喜您，奖励领取成功！'
					}).then(() => {
					  // on close
					  //_this.$router.push('/mill');
					  _this.$cookies.set("tab_name_book", "contribution", _this.$api.cookiesTime)
					  _this.$router.push('/myBook');
					});
				}else{
					//_this.$toast(res.message);
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  // on close
					});
				}
			},function(){
				_this.loading4Reword = false;
			})
		},
		getBuyIn10MineralReword(){
			let _this = this;
			if(_this.userInfo.isGetBuy==1){
				Dialog.alert({
				  title: '系统提示',
				  message: '您已领取过该奖励'
				}).then(() => {
				  // on close
				});
				return;
			}
			if(_this.userInfo.buyAmount<10){
				Dialog.alert({
				  title: '系统提示',
				  message: '您尚未达到领取该奖励的标准'
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.loading4Reword = true;
			_this.$ajax.ajax(_this.$api.getAssistBuyMineralReward, 'POST', null, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					Dialog.alert({
					  title: '温馨提示',
					  message: '恭喜您，奖励领取成功。为了把控算力上的泡沫，经研究决定所奖励的矿机不加算力，用此矿机所产出的矿石去商城租赁矿机即可加算力，请您知晓，帮扶链感恩有您的支持！'
					}).then(() => {
					  // on close
					  //_this.$router.push('/mill');
					  _this.$cookies.set("tab_name_book", "contribution", _this.$api.cookiesTime)
					  _this.$router.push('/myBook');
					});
				}else{
					_this.$toast(res.message);
				}
			},function(){
				_this.loading4Reword = false;
			})
		},
		getAssistReward4Level(level){
			let _this = this;
			let url = "";
			//console.log("_this.userInfo",_this.userInfo);
			let teamCP = _this.userInfo.teamCalculationPower;
			let myCP = _this.userInfo.myCalculationPower;
			let teamNum = _this.userInfo.realnameNum;
			let levelNow = _this.userInfo.level;
			if(level==1){
				if((teamNum<3||teamCP<10||levelNow<=0) && (myCP<1)){
					// _this.$toast();
					Dialog.alert({
					  title: '系统提示',
					  message: '您尚未达到领取该奖励的条件'
					}).then(() => {
					  // on close
					});
					return;
				}
				if(_this.userInfo.isGetOneLevelTask){
					// _this.$toast(_this.$api.DATA_ISGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_ISGET
					}).then(() => {
					  // on close
					});
					return;
				}
				// url = _this.$api.getAssistRewardOneLevelByUserId;
			}else if(level==2){
				if((teamNum<10||teamCP<100||levelNow<=1) && (myCP<8.4)){
					// _this.$toast(_this.$api.DATA_NOTGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_NOTGET
					}).then(() => {
					  // on close
					});
					return;
				}
				if(_this.userInfo.isGetTwoLevelTask){
					// _this.$toast(_this.$api.DATA_ISGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_ISGET
					}).then(() => {
					  // on close
					});
					return;
				}
				// url = _this.$api.getAssistRewardTwoLevelByUserId;
			}else if(level==3){
				if((teamNum<50||teamCP<500||levelNow<=2) && (myCP<33.4)){
					// _this.$toast(_this.$api.DATA_NOTGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_NOTGET
					}).then(() => {
					  // on close
					});
					return;
				}
				if(_this.userInfo.isGetThreeLevelTask){
					_this.$toast(_this.$api.DATA_ISGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_ISGET
					}).then(() => {
					  // on close
					});
					return;
				}
				// url = _this.$api.getAssistRewardThreeLevelByUserId;
			}else if(level==4){
				if((teamNum<100||teamCP<2000||levelNow<=3) && (myCP<133.4)){
					// _this.$toast(_this.$api.DATA_NOTGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_NOTGET
					}).then(() => {
					  // on close
					});
					return;
				}
				if(_this.userInfo.isGetFourLevelTask){
					// _this.$toast(_this.$api.DATA_ISGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_ISGET
					}).then(() => {
					  // on close
					});
					return;
				}
				// url = _this.$api.getAssistRewardFourLevelByUserId;
			}else if(level==5){
				if((teamNum<300||teamCP<10000||levelNow<=4) && (teamNum<500||myCP<133.4)){
					// _this.$toast(_this.$api.DATA_NOTGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_NOTGET
					}).then(() => {
					  // on close
					});
					return;
				}
				if(_this.userInfo.isGetFiveLevelTask){
					// _this.$toast(_this.$api.DATA_ISGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_ISGET
					}).then(() => {
					  // on close
					});
					return;
				}
				// url = _this.$api.getAssistRewardFiveLevelByUserId;
			}
			url = _this.$api.getAssistXXLevelRewardByUserId;
			let params = {
				/* userId: _this.userInfo.userId, */
				level: level
			}
			_this.loading4Reword = true;
			_this.$ajax.ajax(url, 'POST', params, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					if(res.data==1001){
						_this.$toast(_this.$api.DATA_NOTGET);
						return;
					}
					if(res.data==1002){
						_this.$toast(_this.$api.DATA_ISGET);
						return;
					}
					if(res.data==1){
						_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
						Dialog.alert({
						  title: '温馨提示',
						  message: '恭喜您，奖励领取成功。为了把控算力上的泡沫，经精算师研究决定奖励型矿机不加算力,用此矿机所产出的矿石去商城租赁矿机即可加算力，请您知晓！'
						}).then(() => {
						  // on close
						  _this.$router.push('/myMill');
						});
					}
				}else{
					_this.$toast(res.message);
				}
			},function(){
				_this.loading4Reword = false;
			})
		},
		showConfirm(type){
			let _this = this;
			
			if(type=='share3'){
				
			}else if(type == 'agency'){
				console.log('agency');
				
				_this.$ajax.ajax(_this.$api.getCityAgentByUserId + _this.userId, 'GET', null, function(res){
					console.log('res',res);
					if(res.code == _this.$api.CODE_OK){
						if(res.data==null){
							_this.isAgency = false;
							_this.$toast('您还不是省市代理');
						}else{
							_this.isAgency = true;
							//奖励10000个帮扶券
							//奖励一台大型矿机
							//此处调用接口
						}
					}else{
						_this.$toast(res.message);
					}
				})
			}
		},
		getAssistMyMachineCount4Task(){
			let _this = this;
			let params = {
				type:2
			}
			_this.loading4Reword = true;
			_this.$ajax.ajax(_this.$api.getAssistMyMachineCount4FlockTask, 'GET', params, function(res){
				console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					if(res.data>0){
						_this.isShowQunTaskOK = true;
					}else{
						_this.isShowQunTaskOK = false;
					}
				}else{
					_this.$toast(res.message);
				}
			},function(){
				_this.loading4Reword = false;
			})
		},
		toRealName(){
			let _this = this;
			console.log('__this.isRealName',_this.isRealName);
			_this.$router.push('/myInfo');
			if(_this.isRealName){
				// _this.$dialog.comfirm({
				//   title: '提示',
				//   message: '是否任务？'
				// }).then(() => {
				//   // on confirm
				//   console.log('sure renzhen')
				// }).catch(() => {
				//   // on cancel
				// });
			}else{
				console.log('尚未实名');
				// _this.showRealNameModel = true;
				_this.$router.push('/myInfo');
				
			}
		},
		getUserInfo(){
			let _this = this;
			_this.loading = true;
			_this.$ajax.ajax(_this.$api.getAssistUserInfo + _this.userId, 'GET', null, function(res){
				console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.userInfo = res.data;
					_this.userId = _this.userInfo.userId;
					if(_this.userInfo.actived==1){
						_this.isRealName = true;
					}else{
						_this.isRealName = false;
					}
				}else{
					_this.$toast(res.message);
				}
				if(res.code == _this.$api.CODE_4003){
					// _this.info = res.data.list;
					// _this.showRealNameModel = true;
					_this.isRealName = false;
				}
			})
		},
		back(){
			this.$router.go(-1);
		},
		refreshEvent(){
			console.log("refresh")
			let _this = this;
			_this.getUserInfo();
		},
	}
}
</script>
