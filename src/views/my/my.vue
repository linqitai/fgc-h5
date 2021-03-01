<style lang="scss">
	// @import '@/assets/scss/variable.scss';
	@import '~@/assets/scss/index.scss';
	$main-box-color:#ffffff;
	.myPage1{
		position: absolute;
		min-height: 100%;
		width: 100%;
		$iconBgWidth:50px;
		background-color: $main-box-fh-bg-color;
		.refreshBox{
			top: 60px;
		}
		.tip{
			font-size:12px;
			line-height: 1.2em;
			letter-spacing: 1px;
			color: white;
			background-color: $main-adorn-color;
			text-align: center;
			padding-top: 4px;
			padding-bottom: 4px;
		}
		.cateInfo {
			display: flex;
			width: 100%;
			padding: 10px 0;
			.infoBox {
				flex: 1;
				text-align: center;
				font-size: 14px;
		
				.iconBox {
					.iconBackground {
						width: $iconBgWidth;
						height: $iconBgWidth;
						line-height: $iconBgWidth;
						border-radius: $iconBgWidth/3;
						margin: 0 auto;
						color: $main-box-fh-text-color;
						font-size: 30px;
					}
		
					.iconBackground1 {
						background-color: #f39800;
					}
		
					.iconBackground2 {
						background-color: #0049b6;
					}
		
					.iconBackground3 {
						background-color: #00b29b;
					}
		
					.iconBackground4 {
						background-color: #fd5f00;
					}
					
					.iconBackgroundMill {
						background-color: #08abee;
					}
					
					.iconBackgroundWord {
						background-color: #81d741;
					}
					
					.iconBackgroundBook {
						background-color: #00eaff;
					}
					
					.iconBackgroundDeal {
						background-color: #1aa034;
					}
				}
				.text {
					margin-top: 0.375rem;
					color: $main-box-fh-text-color;
				}
			}
		}
		.box {
			display: flex;
			background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color;
			padding: $boxPadding2;
			box-sizing: border-box !important;
			@include userSelectNone();
		}
		
		$avatorWidth:80px;
		.box1 {
			/* background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color; */
			.flex {
				&.flex1 {
					flex: 0 0 60px;
					$heightwidht:60px;
					.name{
						width: $heightwidht;
						height: $heightwidht;
						border-radius: $heightwidht;
						background-color: $main-adorn-color;
						color: $main-box-fh-text-color;
						text-align: center;
						line-height: $heightwidht;
						font-size: 18px;
					}
				}
				&.flex2 {
					flex: 1;
					padding: 0 $boxPadding2;
					display: flex;
					flex-direction: column;
					align-content: center;
					
					.line1{
						flex: 1;
						line-height: 26px;
		
						.nick_name {
							font-size: 14px;
							height: 20px;
							line-height: 20px;
						}
						
						.level {
							background-color: $main-adorn-color;
							color: $main-box-fh-text-color;
							height: 24px;
							line-height: 24px;
							font-size: 11px;
							border-radius: 0 10px 10px 0;
							padding: 4px 8px 4px 4px;
						}
					}
					.line{
						flex: 1;
						line-height: 20px;
						font-size: 11px;
					}
				}
			}
		}
		
		.box2 {
			/* background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color; */
			text-align: center;
			.flex {
				flex: 1;
				.value{
					/* font-size: $fs-3;
					line-height: 1.375rem;
					height: 1.375rem; */
				}
				.text {
					font-size: $fs-1;
					margin-top: 6px;
				}
			}
		}
		
		.box3 {
			/* background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color; */
			text-align: center;
			.flex {
				flex: 1;
				.text {
					font-size: $fs-1;
					margin-top: 6px;
					line-height: 1.2em;
				}
			}
		}
		
		.items {
			/* background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color; */
			.my-cell {
				height: 2.875rem;
				line-height: 2.875rem;
				color: $main-box-fh-text-color;
				font-size: 0.75rem;
				border-bottom: 1px solid $bottomLineColor;
				display: flex;
				padding-left: $boxPadding2;
				padding-right: $boxPadding2;
				.flex1 {
					flex: 1;
					color: $main-box-fh-text-color;
				}
				.flex2 {
					flex: 0 0 40px;
					text-align: right;
					.iconfont-right-arrow2 {
						font-size: 0.75rem;
						color: $grayLight2;
					}
				}
		
			}
		}
	}
</style>
<template>
	<div class="myPage1">
	<div v-if="$route.meta.footer==true">
		<m-header>
			<i class="leftBox"></i>
			<div class="text">
				个人中心
			</div>
			<i class="iconfont iconfont-set rightBox icon" @click="toMyInfo"></i>
		</m-header>
		<van-pull-refresh v-model="loading" @refresh="refreshEvent">
			<div class="box box1">
				<div class="flex flex1">
					<div class="name" @click="toMyInfo">{{userInfo.realName | getLastName}}</div>
				</div>
				<div class="flex flex2">
					<div class="line1">
						<div class="nick_name left">
							{{userInfo.nickName}}<i class="iconfont iconfont-question" @click="showTip('actived')"/>
							<span class="level margL10 margR20" @click="toMyInfo">{{userInfo.level | getUserType}}·{{userInfo.isActived==0?'未激活':'已激活'}}</span>
							
						</div>
					</div>
					<!-- <div class="line margT3">
						注册时间 {{userInfo.registerTime | getDateYMD}}
					</div> -->
					<div class="line margT3">
						<div class="left">买入次数 {{userInfo.buyTimes}}</div>
						<div class="mlBox left">买入数量 {{userInfo.buyAmount}}</div>
					</div>
					<div class="line">
						<div class="left">卖出次数 {{userInfo.sellTimes}}</div>
						<div class="mlBox left">卖出数量 {{userInfo.sellAmount}}</div>
					</div>
					<div class="line">
						<span @click="toBookView('3')">钻石值 {{userInfo.contributionValue}}</span> <i class="iconfont iconfont-question" @click="showTip('contribution')"/>
						<!-- <span class="margL10">
							<van-button size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :loading="giveLevelDealProfitLoading" @click="giveLevelDealProfit">全球分红</van-button>
						</span> -->
					</div>
					<div class="line">
						<span @click="toBookView('6')">信誉分 {{userInfo.credit}}</span> <i class="iconfont iconfont-question" @click="showTip('credit')"/>
						
					</div>
					<div class="placeholderLine"></div>
					<div class="line">
						<span class="">
							<van-button size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :loading="giveLevelDealProfitLoading" @click="giveLevelDealProfit">全球分红</van-button>
						</span>
						<span class="margL10">
							<van-button size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" @click="giveCashProfit">持钻挖矿</van-button>
						</span>
						<span class="margL10">
							<van-button size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" @click="handleCopy4BuyTicket(userInfo.mobilePhone,$event)">购买感恩券</van-button>
						</span>
					</div>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="box box2">
				<div class="flex flex1">
					<div class="value" @click="toBookView('1')">{{userInfo.teamCalculationPower}}</div>
					<div class="text" @click="showTip('teamCalculationPower')">团队算力 <i class="iconfont iconfont-question"/></div>
				</div>
				<div class="flex flex4">
					<!-- <div>{{userInfo.platformTicket}}</div> -->
					<div class="value">
						<i class="" @click="toBookView('2')">{{userInfo.platformTicket}}</i> 
					</div>
					<div class="text" @click="showTip('platformTicket')">
						感恩券
						<i class="iconfont iconfont-question margR5"/>
					</div>
				</div>
				<div class="flex flex2">
					<!-- <div>{{userInfo.thisWeekMineral}}</div> -->
					<div class="value" @click="toBookView('4')">{{userInfo.thisWeekMineral}}</div>
					<div class="text" @click="showTip('mineral')">可用钻石 <i class="iconfont iconfont-question"/></div>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="box box3">
				<div class="flex flex1">
					<div>{{userInfo.myCalculationPower}}</div>
					<div class="text" @click="showTip('myCalculationPower')">个人算力<i class="iconfont iconfont-question"/></div>
				</div>
				<div class="flex flex4">
					<div>{{userInfo.temporaryFreezePlatformTicket}}</div>
					<!-- <NumberGrow :value="userInfo.temporaryFreezePlatformTicket"></NumberGrow> -->
					<div class="text">交易中<br>感恩券</div>
				</div>
				<!-- <div class="flex flex3">
					<div>{{userInfo.temporaryFreezeContribution}}</div>
					<div class="text">交易中<br>贡献值</div>
				</div> -->
				<div class="flex flex2">
					<div>{{userInfo.temporaryFreezeMineral}}</div>
					<!-- <NumberGrow :value="userInfo.temporaryFreezeMineral"></NumberGrow> -->
					<div class="text">交易中<br>钻石</div>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="cateInfo">
				<div class="infoBox">
					<router-link to="/task">
						<div class="iconBox">
							<div class="iconBackground iconBackground1">
								<van-icon class-prefix="iconfont" name="task2" />
							</div>
						</div>
						<div class="text">任务中心</div>
					</router-link>
				</div>
				<div class="infoBox">
					<router-link to="/myMill">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundMill">
								<van-icon class-prefix="iconfont" name="mill2" />
							</div>
						</div>
						<div class="text">我的矿机</div>
					</router-link>
				</div>
				<div class="infoBox">
					<router-link to="/myDeal">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundDeal">
								<van-icon class-prefix="iconfont" name="deal" />
							</div>
						</div>
						<div class="text">我的交易</div>
					</router-link>
				</div>
				<div class="infoBox" @click="toMyBook">
					<div class="iconBox">
						<div class="iconBackground iconBackgroundBook">
							<van-icon class-prefix="iconfont" name="book" />
						</div>
					</div>
					<div class="text">我的账本</div>
					<!-- <router-link to="/myBook">
					</router-link> -->
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="cateInfo">
				<div class="infoBox">
					<router-link to="/myInfo">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundMill">
								<van-icon class-prefix="iconfont" name="realname" />
							</div>
						</div>
						<div class="text">我的实名</div>
					</router-link>
				</div>
				<div class="infoBox">
					<router-link to="/mySuperTeam">
						<div class="iconBox">
							<div class="iconBackground iconBackground4">
								<van-icon class-prefix="iconfont" name="team" />
							</div>
						</div>
						<div class="text">我的工会</div>
					</router-link>
				</div>
				<div class="infoBox">
					 <!-- @click="waiting" -->
					 <div class="iconBox" @click="waiting4Share">
					 	<div class="iconBackground iconBackground1">
					 		<van-icon class-prefix="iconfont" name="share2"/>
					 	</div>
					 </div>
					 <div class="text">战队招募</div>
					<!-- <router-link to="/myShare">
						<div class="iconBox" >
							<div class="iconBackground iconBackground1">
								<van-icon class-prefix="iconfont" name="share2"/>
							</div>
						</div>
						<div class="text">战队招募</div>
					</router-link> -->
				</div>
				<div class="infoBox">
					<router-link to="/myWord">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundWord">
								<van-icon class-prefix="iconfont" name="word" />
							</div>
						</div>
						<div class="text">我要留言</div>
					</router-link>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="items">
				<router-link to="transferMineral4L">
					<div class="my-cell">
						<div class="flex1">
							定向转让钻石(会长)
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items">
				<router-link to="transferTicket">
					<div class="my-cell">
						<div class="flex1">
							定向转让感恩券
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<!-- <div class="items">
				<router-link to="myRaiseList">
					<div class="my-cell">
						<div class="flex1">
							我所发布的帖子
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div> -->
			<div class="items" v-if="userInfo.isAgent==3">
				<router-link to="dealList">
					<div class="my-cell">
						<div class="flex1">
							会员交易列表
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<router-link to="initPassword">
					<div class="my-cell">
						<div class="flex1">
							给他人初始化密码
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<router-link to="lookupIdCard">
					<div class="my-cell">
						<div class="flex1">
							查看他人身份证号被谁占用
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items">
				<div class="items">
					<router-link to="lookInfo">
						<div class="my-cell">
							<div class="flex1">
								查询他人信息
							</div>
							<div class="flex2">
								<i class="iconfont iconfont-right-arrow2"></i>
							</div>
						</div>
					</router-link>
				</div>
			</div>
			<!-- <div class="paddingAll">
				<van-button color="#c7c7c7" size="normal" :block="true" @click="cancelAccount" loading-type="spinner">注销账户(暂对尚未实名的用户开放)</van-button>
			</div> -->
			<!-- <div class="items">
				<div class="my-cell">
					<div class="flex1">
						更换上级
					</div>
					<div class="flex2">
						<i class="iconfont iconfont-right-arrow2"></i>
					</div>
				</div>
			</div> -->
			<div class="items" v-if="userInfo.userId==userInfo.parentId">
				<router-link to="abandonFirst">
					<div class="my-cell">
						<div class="flex1">
							转到帮扶链上级下面
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items">
				<router-link to="destroyAccount">
					<div class="my-cell">
						<div class="flex1">
							销毁账户
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
		</van-pull-refresh>
		<van-dialog v-model="showToBuyTicketModel" title="买券提示" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
			<div class="paddingWing">
				<div class="placeholderLine20"></div>
				<div class="tip4modelNew">感恩券1CNY/张，另加少许服务费，<b class="red textBold">为了避免充值的时候填写错手机号，系统已经帮您复制了手机号</b>，前去买券页面粘贴即可！</div>
				<div class="placeholderLine20"></div>
			</div>
			<!-- <van-button type="info" @click="buyMillLoading=true;" :disabled="buyMillLoading" :block="true">租赁</van-button> -->
			<van-button type="info" size="large" @click="buyTicketBtn" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">好的</van-button>
		</van-dialog>
		<!-- <m-fullscreen></m-fullscreen> -->
		<!-- <m-refresh @refreshEvent="refreshEvent"></m-refresh> -->
		<van-dialog v-model="showTipModel" title="系统提示" :showCancelButton="isShowCancelBtn" cancelButtonText="稍后" confirmButtonText="好的" @confirm="confirmBtn">
			<div class="paddingWing f-12 lineHeight tip4model2">
				1.您尚未实名，是否先前去实名？<br>
			</div>
		</van-dialog>
		<van-dialog v-model="showTipModel2" title="系统提示" :showCancelButton="isShowCancelBtn" cancelButtonText="稍后" confirmButtonText="好的" @confirm="confirmBtn">
			<div class="paddingWing f-12 lineHeight tip4model2">
				1.您的实名审核被驳回，是否前去查看驳回原因？<br>
			</div>
		</van-dialog>
		<!-- <van-dialog v-model="showDeleteAccountModel" title="销毁/注销账号" :showConfirmButton="false" :close-on-click-overlay="true">
			<div class="placeholderLine10"></div>
			<div class="refuseReason">
				<van-field v-model="idCard" required placeholder="请填写身份证号"/>
				<van-button size="normal" :block="true" @click="cancelAccountEvent">确认</van-button>
			</div>
			<div class="placeholderLine10"></div>
		</van-dialog> -->
	</div>
	<m-refresh @refreshEvent="refreshEvent"></m-refresh>
	<transition name="van-fade">
	  <router-view></router-view>
	</transition>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import mRefresh from '@/components/Refresh2.vue';
	import { Dialog } from 'vant';
	import clip from '@/assets/js/clipboard';
	// import mFullscreen from '@/components/Fullscreen.vue';
	/* import { Skeleton } from 'vant'; */
	export default {
		data() {
			return {
				showToBuyTicketModel:false,
				idCard:'',
				showDeleteAccountModel:false,
				isShowCancelBtn:true,
				showTipModel:false,
				showTipModel2:false,
				pageHeight:"",
				userId:"",
				result: "",
				loading: true,
				userInfo: "",
				buyAndSellInfo:{
					buyInNum:0.0,
					buyInTime:0,
					sellOutNum:0.0,
					sellOutTime:0,
				},
				cookiesTime:60 * 60 * 24,
				cityInfo:'',
				dsPassword:'',
				giveLevelDealProfitLoading:false,
				giveCashProfitLoading:false,
				giveBuyProfitLoading:false,
				isShowBuyProfit:true
			}
		},
		components: {
			mHeader,
			mRefresh,
			// mFullscreen
		},
		created() {
			let _this = this;
			if(_this.$utils.getDate(new Date())>'2020/11/02'){
				_this.isShowBuyProfit = false;
			}
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				////console.log("userInfo_localStorage");
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
				if(_this.userInfo.accountStatus==1){
					//退出登录
					_this.logout();
				}
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				localStorage.removeItem('_USERINFO_');
				_this.$cookies.remove('userId');
				_this.$cookies.remove('token');
				_this.$cookies.remove('isRefreshDealInfo');
				_this.$cookies.remove('tab_raise_list');
				_this.$router.replace('login');
				return;
			}
			_this.getUserInfo();
			/* if(_this.$cookies.get('isRefreshUserInfo')==1){
				_this.getUserInfo();
			} */
			/* if(_this.userInfo.isAgent==1){
				_this.getAssistAgentInfo4Province();
			}
			if(_this.userInfo.isAgent==2){
				_this.getAssistAgentInfo4City();
			} */
			/* if(_this.userInfo.manType==2){
				_this.getServiceDsPassword();
			} */
		},
		methods: {
			getCityName(cityInfo){
				if(cityInfo&&cityInfo.provinceName){
					return cityInfo.provinceName
				}else if(cityInfo&&cityInfo.cityName){
					return cityInfo.cityName
				}
				
			},
			waiting4Share(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				if(_this.$utils.getDateTime(new Date())>'2020/12/19 00:00:01'){
					_this.$router.push('myShare');
				}else{
					Dialog.alert({
					  title: '系统提示',
					  confirmButtonText:'加油',
					  message: "20年12月19号开始对接团队长，每个号可对接66个，正是推广功能将会在21年1月1号开放"
					}).then(() => {
					  // on confirm
					})
				}
			},
			waitingInnerRegister(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'加油',
				  message: "内排注册功能暂时关闭，如需开通，请联系客服"
				}).then(() => {
				  // on confirm
				})
			},
			close(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'好的',
				  message: "为了稳定市场，该通道暂时关闭，若要走定向，可通过挂卖单"
				}).then(() => {
				  // on confirm
				})
			},
			closeTCV(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'好的',
				  message: "为了规范市场，定向转让贡献值通道已经关闭，请大家统一用钻石交易"
				}).then(() => {
				  // on confirm
				})
			},
			waiting(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'加油',
				  message: "此功能即将开放，请等通知"
				}).then(() => {
				  // on confirm
				})
			},
			buyTicketBtn(){
				let _this = this;
				let url = `http://pay.8gesy.com/payment/fenqu.html?id=D7501BC7C9641EDE`;
				window.open(url,'_blank');
			},
			toBlcokSearchView(){
				let _this = this;
				if(_this.$utils.getTimeHMS(new Date())>_this.$api.restTimeStart&&_this.$utils.getTimeHMS(new Date())<_this.$api.restTimeEnd){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.tip4Rest
					}).then(() => {
					  // on close
					});
					return;
				}
				_this.$router.push('blockSearch');
			},
			toMyCheck(){
				let _this = this;
				/* if(_this.$utils.getTimeHMS(new Date())>_this.$api.restTimeStart&&_this.$utils.getTimeHMS(new Date())<_this.$api.restTimeEnd){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.tip4Rest
					}).then(() => {
					  // on close
					});
					return;
				} */
				_this.$router.push('myCheck');
			},
			toMyBook(){
				let _this = this;
				if(_this.$utils.getTimeHMS(new Date())>_this.$api.restTimeStart&&_this.$utils.getTimeHMS(new Date())<_this.$api.restTimeEnd){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.tip4Rest
					}).then(() => {
					  // on close
					});
					return;
				}
				_this.$router.push('myBook');
			},
			givePTRewardYesterday(){
				let _this = this;
				if(_this.userInfo.buyAmount<100){
					Dialog.alert({
					  title: '系统提示',
					  message: "领取该奖励需昨天收购钻石数达到100颗以上"
					}).then(() => {
					  // on close
					});
					return;
				}
				Dialog.confirm({
				  title: '系统提示',
				  confirmButtonText:'确认',
				  closeOnClickOverlay:true,
				  message: '领取该奖励需昨天收购钻石数达到100颗以上,若今天收购达到100颗以上，要等明天领取，您是否确认领取？'
				}).then(() => {
				  _this.giveBuyProfitLoading = true;
				  _this.$ajax.ajax(_this.$api.givePTRewardYesterday, 'POST', null, function(res){
				  	if(res.code == _this.$api.CODE_OK){
				  		if(res.data == 1){
				  			_this.$toast('领取成功');
				  			_this.$cookies.set("tab_name_book", 'ticket', _this.$api.cookiesTime)
				  			_this.$router.push('myBook');
				  		}
				  	}else{
				  		//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
						return;
				  	}
				  },function(){
				  	_this.giveBuyProfitLoading = false;
				  })
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
			giveCashProfit(){
				let _this = this;
				if(_this.userInfo.actived!=1){
					_this.$toast('请先去实名');
					return;
				}
				_this.$router.push('mill2');
			},
			giveLevelDealProfit(){
				let _this = this;
				/* if(_this.userInfo.level<1){
					Dialog.alert({
					  title: '系统提示',
					  message: "领取全球分红首先要青铜及以上级别"
					}).then(() => {
					  // on close
					});
					return;
				} */
				Dialog.confirm({
				  title: '系统提示',
				  confirmButtonText:'确认',
				  closeOnClickOverlay:true,
				  message: '是否领取工会会长的每天分红？'
				}).then(() => {
				  _this.giveLevelDealProfitLoading = true;
				  _this.$ajax.ajax(_this.$api.giveLevelDealProfit, 'POST', null, function(res){
				  	if(res.code == _this.$api.CODE_OK){
				  		if(res.data == 1){
				  			_this.$toast('领取成功');
				  			_this.$cookies.set("tab_name_book", 'mineral', _this.$api.cookiesTime)
				  			_this.$router.push('myBook');
				  		}
				  	}else{
				  		//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
						return;
				  	}
				  },function(){
				  	_this.giveLevelDealProfitLoading = false;
				  })
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
			toComplainView(userId){
				let _this = this;
				_this.$router.push({path:"lookComplainList",query:{targetUserId:userId}});
			},
			handleCopy(text, event) {
				let _this = this;
				_this.showSendSMSTipModel = false;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			handleCopy4BuyTicket(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.showToBuyTicketModel=true;
				});
			},
			getServiceDsPassword(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getServiceDsPassword, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.dsPassword = res.data.dsPassword;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getAssistAgentInfo4Province(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistAgentInfo4Province, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.cityInfo = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getAssistAgentInfo4City(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistAgentInfo4City, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.cityInfo = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getAddress(){
				let _this = this;
				let address = localStorage.getItem("address");
				let province = _this.$utils.getProvince(address);
				////console.log("province",province);
			},
			toScrollTop(){
				window.scrollTo(0,0);
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			deleteAccountBtn(){
				let _this = this; 
				_this.showDeleteAccountModel = true;
			},
			cancelAccountEvent(){
				let _this = this;
				Dialog.confirm({
				  title: '注销确认',
				  message: '你确定要注销/删除/重新注册这个账号？'
				}).then(() => {
				  // on confirm
				  if(_this.userInfo.teamateNum>0){
					  Dialog.alert({
					    title: '系统提示',
					    confirmButtonText:'好的',
					    message: "您已有直推，无法注销该账号"
					  }).then(() => {
					    // on confirm
					  })
					  return;
				  }
				  if(_this.userInfo.sellTimes>0||_this.userInfo.buyTimes>0){
					  Dialog.alert({
						title: '系统提示',
						confirmButtonText:'好的',
						message: "您已有交易记录，无法注销该账号"
					  }).then(() => {
						// on confirm
					  })
					  return;
				  }
				  _this.$ajax.ajax(_this.$api.cancelAccount, 'GET', null, function(res){
				  	if(res.code == _this.$api.CODE_OK){
						Dialog.alert({
						  title: '系统提示',
						  confirmButtonText:'好的',
						  message: "注销成功，可重新注册"
						}).then(() => {
						  // on confirm
						  _this.$router.replace('login');
						})
				  	}else{
				  		Dialog.alert({
				  		  title: '系统提示',
				  		  confirmButtonText:'好的',
				  		  message: res.message
				  		}).then(() => {
				  		  // on confirm
				  		})
				  	}
				  })
				}).catch(() => {
				  // on cancel
				});
			},
			showTip(val){
				//console.log(val);
				let message = '';
				if(val=='mineral'){
					message = '钻石：当前所能用来交易的钻石。获得途径：矿机产出、买入、钻石值释放、直推领取收益的奖励、全球分红。';
				}else if(val=='platformTicket'){
					message = '感恩券：可用于交易的时候当手续费。获取途径：购买。';
				}else if(val=='contribution'){
					message = '钻石值：由母币兑换而来，每天签到释放百分之一。';
				}else if(val=='credit'){
					message = '信誉分：交易时候的信用度，顺利完成交易增加10,交易被取消或交易超时确认减20，小于70则无法参与交易，小于60则自动被冻结账号。';
				}else if(val=='actived'){
					message = '激活账户：连续签到15天后即可激活账户。';
				}else if(val=='teamCalculationPower'){
					message = '团队算力：个人算力+近代下级的个人算力。它决定着您的用户等级，分别有：青铜、白银、黄金、铂金、钻石五个等级，具体请查看【个人中心--任务中心】。';
				}else if(val=='myCalculationPower'){
					message = '个人算力：由个人所拥有的矿机所决定。';
				}
				Dialog.alert({
				  title: '温馨提示',
				  confirmButtonText:'好的',
				  message: message
				}).then(() => {
					// on confirm
					//console.log('sure');
				})
			},
			toBookView(val){
				let _this = this;
				/* if(_this.$utils.getTimeHMS(new Date())>_this.$api.restTimeStart&&_this.$utils.getTimeHMS(new Date())<_this.$api.restTimeEnd){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.tip4Rest
					}).then(() => {
					  // on close
					});
					return;
				} */
				//console.log('toBookView');
				let name = 'mineral';
				if(val==1){
					name = 'calculation';
				}else if(val==2){
					name = 'ticket';
				}else if(val==3){
					name = 'contribution';
				}else if(val==4){
					name = 'mineral';
				}else if(val==5){
					name = 'loveValue';
				}else if(val==6){
					name = 'circulateValue';
				}
				_this.$cookies.set("tab_name_book", name, _this.$api.cookiesTime)
				_this.$router.push('/myBook');
			},
			toMyInfo(){
				this.$router.push('/myInfo');
			},
			logout(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.loginOut, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						localStorage.removeItem('_USERINFO_');
						_this.$cookies.remove('userId');
						_this.$cookies.remove('token');
						_this.$cookies.remove('isRefreshDealInfo');
						_this.$cookies.remove('tab_raise_list');
					}else{
						_this.$toast(res.message);
					}
				},function(){
					localStorage.removeItem('_USERINFO_');
					_this.$cookies.remove('userId');
					_this.$cookies.remove('token');
					_this.$cookies.remove('isRefreshDealInfo');
					_this.$cookies.remove('tab_raise_list');
					_this.$router.replace('login');
				})
			},
			confirmBtn(){
				let _this = this;
				_this.showTipModel = false;
				_this.$router.push('/myInfo');
			},
			getUserInfo() {
				let _this = this;
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistUserInfo, 'GET', null, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.userInfo = res.data;
						if(_this.userInfo.actived==-1){
							_this.showTipModel = true;
						}
						if(_this.userInfo.actived==2){
							_this.showTipModel2 = true;
						}
						_this.$cookies.set('isRefreshUserInfo',0,_this.$api.cookiesTime);
						//console.log(_this.userInfo,"userInfo");
						localStorage.setItem("_USERINFO_", JSON.stringify(_this.userInfo));
						// if(_this.userInfo.manType==2){
						// 	_this.getServiceDsPassword();
						// }
						if(_this.userInfo.accountStatus==1){
							//退出登录
							_this.logout();
						}
					}else{
						if(res.code == 4003){
							_this.logout();
						}
						_this.$toast(res.message);
						if(res.message=='登录已过期，请重新登录'){
							_this.logout();
						}
						
					}
				},function(){
					_this.loading = false;
				})
			},
			refreshEvent() {
				//console.log("refresh")
				let _this = this;
				_this.getUserInfo();
			},
		}
	}
</script>
