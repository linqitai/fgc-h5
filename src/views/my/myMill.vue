<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.myMillPage{
		@include pageHaveHeight4Scroll();
		.van-sticky--fixed{
			top: 47px !important;
		}
		.van-sticky{
			border-bottom: 1px solid $bottomLineColor;
		}
		.isShowMineralNum{
			color: $grayDarker;
		}
		[class*=van-hairline]::after {
		    border: 1px solid #c7c7c7 !important;
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
		.millContent{
			color: $main-box-fh-text-color;
			//min-height: 100%;
			min-height: 1600px;
			position: absolute;
			top:0;
			width: 100%;
			background-color: $main-box-fh-bg-color;
			.van-list__finished-text{
				color: inherit !important;
			}
			.tabTitle{
				display: flex;
				align-items: center;
				align-content: center;
				justify-content: center;
			}
			// [class*=van-hairline]::after{
			// 	border: 0 solid transparent;
			// }
			.getMineral{
				//margin-top: $marginTop2;
			}
			.statistics{
				background-color: $main-box-fh-bg-color;
				color: $main-box-fh-text-color;
				padding: $boxPadding2;
				// border-top: 1px solid $bottomLineColor;
				border-bottom: 1px solid $bottomLineColor;
				font-size: 0.75rem;
				.line{
					margin-top: 0.25rem;
					overflow: hidden;
				}
			}
			.millList{
				// background-color: $main-box-fh-bg-color;
				//margin-top: $marginTop2;
				overflow: hidden;
				height: 100%;
				.item{
					position: relative;
					display: flex;
					padding: $boxPadding2;
					border-bottom:1px solid $bottomLineColor;
					align-items: center;
					align-content: center;
					justify-content: center;
					&::last-child{
						border-bottom:1px solid transparent;
					}
					.tagIcon{
						position: absolute;
						right: 0;
						top: 0;
						height: 20px;
						width: 38px;
						font-size: 20px;
					}
					.tagIconText{
						position: absolute;
						right: 10px;
						top: 4px;
						font-size: 11px;
						color: $main-box-fh-text-color;
					}
					.tag0{
						color: $main-blue-color;
					}
					.tag1{
						color: $main-adorn-color;
					}
					.tag2{
						color: $warnColor;
					}
					.flex1{
						flex: 0 0 50px;
						display:flex;
						align-items: center;
						.machingBox{
							height: 90px;
							line-height: 90px;
							width: 70px;
							background-color: $main-blue-color;
							text-align: center;align-items: center;
							position: relative;
							$heightwidht:40px;
							.name{
								width: $heightwidht;
								height: $heightwidht;
								// border-radius: $heightwidht;
								background-color: $main-box-color;
								color: $main-box-fh-text-color;
								color: $main-adorn-color;
								text-align: center;
								line-height: $heightwidht;
								font-size: 20px;
								font-weight: bolder;
								margin-left: 15px;
								margin-top: 25px;
							}
						}
					}
					.flex2{
						padding-left: 8px;
						flex: 1;
						.line1{
							.millName{
								font-weight: bold;
								font-size: 1rem;
							}
							.calcullatePower{
								font-size: 0.687rem;
								margin-left: 4px;
							}
							.status{
								font-size: 0.75rem;
								margin-left: 4px;
							}
							.isGet{
								height: 14px;
								line-height: 14px;
								font-size: 12px;
								border-radius: 0 10px 10px 0;
								padding: 0 6px 0 4px;
								margin-left: 10px;
							}
							.isGetBgColor{
								background-color: $main-adorn-color;
							}
							.notGetBgColor{
								background-color: $warnColor;
							}
						}
						.line,.line2,.line3,.line4,.line5{
							font-size: 0.75rem;
							margin-top: 3px;
						}

					}
					.flex3{
						flex: 0 0 60px;
						.line{
							font-size: 0.75rem;
							text-align: center;
						}
					}
					.tag {
						font-size: 11px;
						border-radius: 10px 10px 10px 10px;
						padding: 2px 8px;
						&.tag0{
							background-color: $main-blue-color;
						}
						&.tag1{
							background-color: $main-purple-color;
						}
						&.tag2{
							background-color: $warnColor;
						}
					}
				}
			}
		}
	}
</style>
<template>
	<div class="myMillPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				我的矿机
			</div>
			<i class="iconfont rightBox icon"></i>
		</m-header>
		<canvas class="matrix" id="matrix"></canvas>
		<div class="millContent" id="millContent">
			<!-- <div class="tip4model3 tip">若遇到网址打不开的情况，请切换一个网址或者切换一下网络试试，若还是不行，就耐心等会儿再试</div> -->
			<van-notice-bar
			  mode = "closeable"
			  left-icon="volume-o"
			  text="每次领取收益需和上次领取收益时间间隔24小时以上,允许多天甚至一年领取一次收益"
			/>
			<div class="statistics" v-if="remainCount">
				<div class="line clearBoth flexCenter f-14">
					<div class="right">待产出钻石 ≈ {{(parseFloat(remainCount)).toFixed(3)}} 个</div>
				</div>
			</div>
			<!-- <div class="statistics">
				<div class="line clearBoth flexCenter f-14">
					<div>系统提示:由于总资产的统计是根据矿机所产来计算的，而每台矿机所产都四舍五入保留了几位小数，所以每次领取矿机后，总资产会在近似值内上下浮动。只有矿机到期后，才会产生最准确的钻石数据。</div>
				</div>
			</div>
			<div class="statistics" v-if="remainCount">
				<div class="line clearBoth flexCenter f-14">
					<div class="left title">智能统计小助手</div>
					<div class="right">总资产 ≈ {{parseFloat(Number(userInfo.thisWeekMineral)+Number(remainCount)).toFixed(3)}}个</div>
				</div>
				<div class="line clearBoth">
					<div class="left">背包中钻石 {{userInfo.thisWeekMineral.toFixed(3)}}个</div>
					<div class="right">待产出钻石 ≈ {{(parseFloat(remainCount)).toFixed(3)}}个</div>
				</div>
			</div> -->
			<van-pull-refresh v-model="loadingMyMill" @refresh="refreshEvent">
				<van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
				 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
					<van-tab name="myMill">
						<div slot="title" class="tabTitle">
							 我的矿机 {{myMillList.length}}
						</div>
						<div class="getMineral" v-if="isShowOneReciept">
							<!-- <div class="tip4model3 textCenter">每次矿机收益需要在24~168小时之间领取</div> -->
							<van-button type="info" size="normal" @click="getReceipt" color="linear-gradient(to right, #ffae00, #ff8400)" :disabled="getRecieptLoading" :loading="getRecieptLoading" :block="true"><span class="letterSpacing">一键领取收益</span></van-button>
						</div>
						<van-list v-model="loadingMyMill" :finished="finished1" :finished-text="finishedMyMillText" @load="onLoadMyMill">
							<div class="millList">
								<div class="item" v-for="item in myMillList" :key="item.id">
									<!-- <div class="flex flex1">
										<div class="machingBox">
											<div class="name">{{item.type | machineType4Pic}}</div>
										</div>
									</div> -->
									<div class="flex flex2">
										<div class="line1">
											<div class="millName inline">{{item.type | machineTypeType}}</div>
											<!-- <div class="inline"><span class="tag" :class="tagColor(item.tag)">{{item.tag | machineTagType}}</span></div> -->
											<div class="inline calcullatePower">算力 {{item.calculationPower}}GH/s</div>
											<!-- <div class="inline f-12 status">{{item.status | machineStatus}}</div> -->
										</div>
										<div class="line" v-if="item.turnOnTime">{{item.turnOnTime.substring(0,19)}} 启动</div>
										<div class="line" v-if="item.turnOffTime">{{item.turnOffTime}} 到期</div>
										<div class="line">租金 <b class="yellow">{{item.price}}</b> 个钻石</div>
										<div class="line">总产 <b class="yellow">{{item.totalOutput}}</b> 个钻石</div>
										<div class="line">已产 <b class="yellow">{{item.alreadyGet}}</b> 个钻石</div>
										<div class="line">日产 <b class="yellow">{{(parseFloat(item.totalOutput)/parseFloat(item.allRuntime)*24).toFixed(2)}}</b> 个钻石</div>
										<!-- <div class="line">总运行时长 {{item.allRuntime}}小时</div> -->
										<!-- <div class="line" v-if="item.turnOnTime">开机 {{item.turnOnTime}}</div> -->
										<div class="line" v-if="item.alreadyGet">上次操作矿机时间 {{item.beforeReceipt.substring(0,19) || '--'}}</div>
										<!-- <div class="line" v-if="item.beforeReceipt">下次领取 {{ nextReceipt(item.beforeReceipt) }} 之后</div>
										<div class="line" v-if="!item.beforeReceipt"><span v-if="item.turnOnTime">下次领取 {{ nextReceipt(item.turnOnTime) }} 之后</span></div> -->
									</div>
									<div class="flex flex3">
										<div class="status line">{{item.status | machineStatus}}</div>
										<div class="line margT3">
											<van-button round type="info" v-if="item.status==1" size="small" @click="toMillDetailPage(item)" color="linear-gradient(to right, #099eee, #0b6fcc)" :block="true">详情</van-button>
											<van-button round type="info" v-if="item.status==0" :loading="isRunMillBtnLoading" @click="runMillEvent(item.id)" size="small" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">运行</van-button>
										</div>
									</div>
									<i class="tagIcon iconfont iconfont-tag" :class="tagColor(item.tag)"></i>
									<i class="tagIconText">{{item.tag | machineTagIconTextType}}</i>
								</div>
							</div>
						</van-list>
					</van-tab>
					<van-tab name="pastMill">
						<div slot="title" class="tabTitle">
							 过期矿机 {{pastMillList?pastMillList.length:''}}
						</div>
						<van-list :offset="100" v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoadPastMill">
							<div class="millList">
								<div class="item" v-for="item in pastMillList" :key="item.id">
									<!-- <div class="flex flex1">
										<div class="machingBox">
											<div class="name">{{item.type | machineType4Pic}}</div>
										</div>
									</div> -->
									<div class="flex flex2">
										<div class="line1">
											<div class="millName inline">{{item.type | machineTypeType}}</div>
											<div class="status inline">总运行 {{item.allRuntime}}小时</div>
											<!-- <div class="status inline">{{item.status | machineStatus}}</div>
											<div class="calcullatePower inline">算力 {{item.calculationPower}}GH/s</div> -->
										</div>
										<div class="line">租金{{item.price}} 个钻石 总产{{item.totalOutput}} 个钻石 已产{{item.alreadyGet}} 个钻石</div>
										<!-- <div class="line">总运行时长 {{item.allRuntime}}小时</div> -->
										<!-- <div class="line" v-if="item.turnOnTime">开机时间 {{item.turnOnTime}}</div> -->
										<div class="line" v-if="item.turnOffTime">到期时间 {{item.turnOffTime}}</div>
										<!-- <div class="line" v-if="item.beforeReceipt">上次领取 {{item.beforeReceipt}}</div> -->
									</div>
									<!-- <div class="flex flex3">
										<div class="line">算力 {{item.calculationPower}}</div>
									</div> -->
									<i class="tagIcon iconfont iconfont-tag" :class="tagColor(item.tag)"></i>
									<i class="tagIconText">{{item.tag | machineTagIconTextType}}</i>
								</div>
							</div>
						</van-list>
					</van-tab>
				</van-tabs>
			</van-pull-refresh>
		</div>
		<van-dialog v-model="model4GetRecipt" title="安全密码验证" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
			<div class="paddingWing">
				<!-- <b class="textBold">领取收益需验证安全密码</b> -->
				<div class="placeholderLine20"></div>
				<van-field v-model="safePassword" label="安全密码" required type="password" clearable placeholder="请填写安全密码"/>
				<div class="placeholderLine10"></div>
				<!-- <div class="tip4model3RedText">安全密码是实名的时候所设置的</div> -->
				<div class="placeholderLine10"></div>
			</div>
			<!-- <van-button type="info" @click="buyMillLoading=true;" :disabled="buyMillLoading" :block="true">租赁</van-button> -->
			<van-button type="info" size="large" @click="getReceipt" :loading="getRecieptLoading" :disabled="getRecieptLoading" color="linear-gradient(to right, #1989fa, #1785f3)" :block="true">确认</van-button>
		</van-dialog>
		<!-- <van-button type="primary" @click="testLoginUrl()">登录</van-button>
	  <van-button type="primary" @click="testUrl()">获取信息</van-button>  :confirm="confirmEvent"-->
	  <van-dialog v-model="showReceiptTip" :title="receiptModelTile" :show-confirm-button="isShowConfirmButton">
		<div class="placeholderLine20"></div>
	    <div class="paddingWing textCenter">
			<van-loading type="spinner" color="#1989fa" v-if="isShowReceiptLoading"/>
			<div class="margT10 isShowMineralNum" v-if="isShowMineralNum">{{mineralNumTip}}</div>
		</div>
		<div class="placeholderLine20"></div>
		<div class="placeholderLine20"></div>
	  </van-dialog>
	  <van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="好的">
	  	<div class="paddingWing f-12 lineHeight tip4model2">
	  		<div class="textIndent">
	  			每次领取收益需和上次领取收益时间间隔24小时以上,允许多天甚至一年领取一次收益
	  		</div>
	  	</div>
	  </van-dialog>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	// import { ajax } from "@/api/ajax";
	import mHeader from '@/components/Header.vue';
	import { Dialog } from 'vant';
	import { Toast } from 'vant';
	export default {
		data() {
			return {
				safePassword:'',
				model4GetRecipt:false,
				isRunMillBtnLoading: false,
				showTipModel:false,
				activeName: "myMill",
				loadingMyMill: false,
				finished1: false,
				finishedMyMillText:'',
				myMillList:[],
				loadingMillShop: false,
				finishedMillShop: false,
				millShopList: [],
				loading2: false,
				finished2: false,
				pastMillList:[],
				miningMachine: [{
					miningMachineType: '小型矿机',
					price: 100,
					totalOutput: 12,
					allRuntime: 720,
					turnOnTime: '2019-12-12 12:12:12',
					afterReceipt: '2019-12-13 12:12:12',
				}],
				userInfo:'',
				showReceiptTip:false,
				isShowOneReciept:true,
				isShowReceiptLoading: true,
				mineralNumTip:'',
				isShowMineralNum:false,
				receiptModelTile:"领取结果计算中",
				isShowConfirmButton:false,
				getRecieptLoading:false,
				remainCount:0,
				totalCount:0
			}
		},
		components: {
			mHeader
		},
		// computed:{
		// 	nextReceipt:function(value){
		// 		let _this = this;
		// 		let dateTime = new Date(value).getTime() + 24*60*60;
		// 		_this.$nextTick(()=>{
		// 			return _this.$utils.getDateTime(dateTime);
		// 		})
		// 	}
		// },
		mounted() {
			let _this = this;
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
			if(_this.userInfo.realnameNum>0){
				_this.updateRealNameNumByUserId();
			}
			//console.log(_this.$cookies.get('isRefreshUserInfo'),'isRefreshUserInfo');
		},
		methods: {
			back() {
				this.$router.push('my');
			},
			showTip(){
				this.showTipModel = true;
			},
			startCodeRain(){
				let matrix = document.getElementById("matrix");
				let context = matrix.getContext("2d");
				let matrixHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
				matrix.height = matrixHeight - 50;
				//console.log("matrix.height",matrix.height);
				matrix.width = window.innerWidth;
				let drop = [];
				let fontSize = 12; //字体
				let columns = matrix.width / fontSize;
				for (let i = 0; i < columns; i++) {
				    drop[i] = 1;
				}
				function drawMatrix() {
				    context.fillStyle = "#277d1f";
				    context.fillRect(0, 0, matrix.width, matrix.height);
				    context.fillStyle = "#ffae00";
				    context.font = fontSize + "px";
				    for (let i = 0; i < columns; i++) {
				        context.fillText(Math.floor(Math.random() * 2), i * fontSize, drop[i] * fontSize);
				        if (drop[i] * fontSize > (matrix.height * 2 / 3) && Math.random() > 0.85){
							drop[i] = 0;
						}
				        drop[i]++;
				    }
				}
				setInterval(drawMatrix, 50);//按照指定间隔一直执行方法
			},
			tagColor(tag){
				if(tag==0){
					return 'tag0'
				}else if(tag==1){
					return 'tag1'
				}else if(tag==2){
					return 'tag2'
				}else if(tag==3){
					return 'tag2'
				}else if(tag==4){
					return 'tag2'
				}else if(tag==5){
					return 'tag2'
				}else if(tag==6){
					return 'tag2'
				}else if(tag==7){
					return 'tag2'
				}else{
					return 'tag2'
				}
			},
			nextReceipt(value){
				let _this = this;
				let dateTime = Date.parse(new Date(value)) + 24*60*60*1000;
				// console.log("dateTime",dateTime);
				let result = _this.$utils.getDateTime(dateTime);
				// console.log("result",result);
				return result;
				// _this.$nextTick(()=>{
					
				// })
			},
			confirmEvent(){
				console.log("confirm");
			},
			updateRealNameNumByUserId(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.updateRealNameNumByUserId, 'GET', null, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						//_this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getReceiptSure(){
				let _this = this;
				_this.model4GetRecipt = true;
			},
			getReceipt(){
				let _this = this;
				Dialog.confirm({
				  title: '系统提示',
				  confirmButtonText:'确认',
				  closeOnClickOverlay:true,
				  message: '请问是否领取矿机收益？'
				}).then(() => {
				  let nowTimestamp = Number(new Date().getTime());
				  let lastReceiptTimestamp = Number(new Date(_this.userInfo.lastReceiptTime).getTime());
				  let timestamp = (nowTimestamp - lastReceiptTimestamp)/1000;
				  /* if(_this.safePassword==''||_this.safePassword==null){
				  	_this.$toast("安全密码不能为空");
				  	return;
				  }
				  let params = {
				  	safePassword:_this.safePassword
				  }
				  params.safePassword = _this.$JsEncrypt.encrypt(params.safePassword); */
				  _this.getRecieptLoading = true;
				  _this.$ajax.ajax(_this.$api.getMyMachinesReceipt,'POST',null,function(res) {
				  	if(res.code == _this.$api.CODE_OK) {
				  		if(res.data){
				  			_this.mineralNumTip = `此次领取收益为${res.data}个钻石`;
				  			_this.isShowMineralNum = true;
				  			//_this.$toast(`此次领取收益为${res.data}个钻石`);
				  			_this.onLoadMyMill();
				  			_this.$cookies.set('isRefreshUserInfo', 1, _this.$api.cookiesTime);
				  			_this.$cookies.set("tab_name_book", 'mineral', _this.$api.cookiesTime)
				  			//_this.$router.push('/myBook');
				  		}else{
				  			if(res.data == 0.0){
				  				_this.mineralNumTip = `请过24小时后再来领取`;
				  				_this.onLoadMyMill();
				  			}else{
				  				_this.mineralNumTip = `未到领取收益的时间`;
				  			}
				  		}
				  		_this.showReceiptTip = true;
				  	}else{
				  		_this.$toast(res.message);
				  	}
				  },function(){
				  	_this.receiptModelTile = "系统提示";
				  	_this.isShowConfirmButton = true;
				  	_this.isShowReceiptLoading = false;
				  	_this.getRecieptLoading = false;
				  	_this.isShowMineralNum = true;
				  	_this.model4GetRecipt = false;
				  });
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
			getMyPastMachinesReceipt(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getMyPastMachinesReceipt, 'POST', null, function(res) {
					console.log("res.code",res.code);
				})
			},
			getThisMachineReceipt(item){
				if(item.beforeReceipt){
					
				}else{//第一次领取收益的时候
					let beforeReceipt = new Date();
				}
			},
			toMillDetailPage(item){
				let _this = this;
				_this.$router.push('myMillDetail');
				localStorage.setItem("thisMillInfo",JSON.stringify(item));
			},
			runMillEvent(id){
				let _this = this;
				// let params = {
				// 	id:id
				// }
				//运行之前先判断该用户是否是已经升级了的用户
				/* if(_this.userInfo.isAgent<=0){
					Dialog.alert({
						title: "系统提示",
						message: "用户等级提升后即可启动该矿机（至少要是青铜级工会会长），是否前去查看升级条件？"
					}).then(() => {
					  // on confirm
					  _this.$router.push("task");
					})
					return;
				} */
				_this.isRunMillBtnLoading = true;
				_this.$ajax.ajax(_this.$api.runMyMachineById + id, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.onLoadMyMill();
					}else{
						Dialog.alert({
							title: "系统提示",
							message: res.message
						}).then(() => {
						  // on confirm
						  // _this.$router.push("task");
						})
					}
				},function(){
					_this.isRunMillBtnLoading = false;
				})
			},
			onLoadMyMill() {
				let _this = this;
				/* let params = {
					status:machineId
				} */
				_this.loadingMyMill = true;
				_this.$ajax.ajax(_this.$api.getAssistMyMachineByStatus01, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						let myMill = res.data;
						_this.myMillList = myMill.filter(item=>item.status!=2);
						//_this.pastMillList = myMill.filter(item=>item.status==2);
						if(_this.myMillList.length>0){
							_this.finishedMyMillText = '没有更多了';
						}else{
							_this.isShowOneReciept = false;
							_this.finishedMyMillText = '亲，您目前没有矿机';
						}
						let remainCount = 0;
						_this.myMillList.forEach((item,index)=>{
							remainCount = remainCount + (item.totalOutput - (item.alreadyGet||0));
						})
						_this.remainCount = remainCount;
						
						/* let totalCount = 0;
						_this.myMillList.forEach((item,index)=>{
							totalCount = totalCount + Number(item.totalOutput);
						})
						_this.totalCount = totalCount; */
						//console.log("remainCount" + _this.remainCount);
						
						_this.$nextTick(function(){
							_this.startCodeRain();
						},300)
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.loadingMyMill = false;
					_this.finished1 = true;
				})
			},
			onLoadPastMill() {
				let _this = this;
				let params = {
					status:2
				}
				_this.loadingMyMill = true;
				_this.$ajax.ajax(_this.$api.getAssistMyMachineByStatus, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.pastMillList = res.data;
						if(_this.myMillList.length>0){
							_this.finishedMyMillText = '没有更多了';
						}else{
							_this.isShowOneReciept = false;
							_this.finishedMyMillText = '亲，您目前没有该矿机';
						}
						
						/* let totalCount = 0;
						_this.myMillList.forEach((item,index)=>{
							totalCount = totalCount + Number(item.totalOutput);
						})
						_this.totalCount = totalCount; */
						//console.log("remainCount" + _this.remainCount);
						
						/* _this.$nextTick(function(){
							_this.startCodeRain();
						},300) */
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.loadingMyMill = false;
					_this.finished2 = true;
				})
			},
			initializeTabActiveName() {
				let _this = this;
				if (_this.$cookies.isKey("mill_tab_name")) {
					_this.activeName = _this.$cookies.get("mill_tab_name");
				}
			},
			/* refreshEvent() {
				let _this = this;
				_this.onLoadMyMill();
			}, */
			refreshEvent() {
				// console.log("refresh1")
				let _this = this;
				if(_this.activeName == 'myMill'){
					_this.currentPage1 = 0;
					_this.offset1=0;
					_this.myMillList = [];
					_this.finished1 = false;
					_this.onLoadMyMill();
				}else if(_this.activeName == 'pastMill'){
					_this.currentPage2 = 0;
					_this.offset2=0;
					_this.pastMillList = [];
					_this.finished1 = false;
					_this.onLoadPastMill();
				}
			},
			tabChange(name, title) {
				let _this = this;
				_this.type = 0;
				// console.log('name', name)
				_this.activeName = name;
				_this.$cookies.set("mill_tab_name", name, _this.$api.cookiesTime);
				//_this.refreshEvent();
			},
			/* tabChange(name, title) {
				//console.log(name, title);
				this.$cookies.set("mill_tab_name", name, 60 * 60 * 1)
				
			} */
		}
	}
</script>
