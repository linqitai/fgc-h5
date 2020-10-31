<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.myMillDetailPage{
		@include newPage();
		.millDetailContent{
			overflow: hidden;
			position: relative;
			color: $main-box-fh-text-color;
			.isShowMineralNum{
				color: $grayDarker;
			}
			.matrix{
				position: relative;
			}
			// .millType{
			// 	position: absolute;
			// 	left: 0;
			// 	top: 48px;
			// 	z-index: 1;
			// 	padding: $boxPadding2;
			// 	font-size: 0.9375rem;
			// }
			.loading{
				position:absolute;
				top:50%;
				left:50%;
				transform: translate(-50%,-50%);//通过变形来搞定
				z-index: 2;
				text-align: center;
			}
			.info{
				position: absolute;
				top:0;
				bottom: 0;
				left: 0;
				z-index: 1;
				padding: $boxPadding2;
				.millType{
					font-size: 0.9375rem;
				}
				div{
					line-height: 1.4em;
				}
			}
		}
	}
</style>
<template>
	<div class="myMillDetailPage">
		<m-header>
			<i class="leftBox iconfont"></i>
			<div class="text">
				矿场
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="millDetailContent">
			<canvas class="matrix" id="matrix"></canvas>
			<!-- <div class="millType">
				{{millInfo.type | machineTypeType}}
			</div> -->
			<div class="loading">
				<van-loading color="#ff8400" type="spinner" size="36px"/>
				<div class="placeholderLine10"></div>
				<van-button type="info" size="normal" @click="getReceiptSure" :loading="getRecieptLoading">领取持币挖矿收益</van-button>
			</div>
			<div class="info">
				<!-- <div class="">全网已实名会员量 {{millInfo.userNum}}</div>
				<div class="placeholderLine10"></div> -->
				<div class="">个人拥有FGC {{userInfo.thisWeekMineral}}</div>
				<div class="">全网拥有FGC {{millInfo.totalFGC}}</div>
				<div class="">周期内全网可挖FGC总量 {{millInfo.nowCBDN}}</div>
				<div class="placeholderLine20"></div>
				<!-- <div class="">当前可领取收益 {{millInfo.nowCBDN}}</div> -->
			</div>
			<!-- <div class="info">
				<div class="millType">{{millInfo.type | machineTypeType}}</div>
				<div class="">状态 {{millInfo.status | machineStatus}}</div>
				<div class="">算力 {{millInfo.calculationPower}}GH/s</div>
				<div class="">租金 {{millInfo.price}}矿石</div>
				<div class="">总产 {{millInfo.totalOutput}}矿石</div>
				<div class="">已产 {{millInfo.alreadyGet}}矿石</div>
				<div class="">总运行时长 {{millInfo.allRuntime}}小时</div>
				<div class="">开机时间 {{millInfo.turnOnTime}}</div>
				<div class="">到期时间 {{millInfo.turnOffTime}}</div>
				<div class="" v-if="millInfo.beforeReceipt">上次领取 {{millInfo.beforeReceipt}}</div>
			</div> -->
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
					完成【我的--任务中心】里的任务后所奖励(赠送)的矿机不加算力，只有从矿机商城中所租赁的矿机才加算力。
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
	import { Dialog,Toast } from 'vant';
	export default {
		data() {
			return {
				safePassword:'',
				model4GetRecipt:false,
				millInfo:'',
				userInfo:'',
				showReceiptTip:false,
				isShowOneReciept:true,
				isShowReceiptLoading: true,
				mineralNumTip:'',
				isShowMineralNum:false,
				receiptModelTile:"领取结果计算中",
				isShowConfirmButton:false,
				getRecieptLoading:false
			}
		},
		components: {
			mHeader
		},
		created() {
			let _this = this;
			_this.getMillPageInfo();
		},
		mounted() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
				if(_this.userInfo.accountStatus==1){
					//退出登录
					_this.logout();
				}
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$cookies.remove('token');
				_this.$router.replace('login');
				return;
			}
			_this.startCodeRain();
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			logout(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.loginOut, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.$toast('账户异常且退出登录');
						// localStorage.clear();//若不允许多账号登录，请把这个给去掉
						// //console.log("_this.$cookies.keys()",_this.$cookies.keys());
						// _this.$cookies.remove('_USERINFO_');
						// _this.$cookies.remove('buyAndSellInfo');
						_this.$cookies.remove('userId');
						_this.$cookies.remove('token');
						// //console.log("_this.$cookies.keys()",_this.$cookies.keys());
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.$router.replace('login');
				})
			},
			getMillPageInfo(){
				let _this = this;
				Toast.loading({
				  message: '加载中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				_this.$ajax.ajax(_this.$api.getMillPageInfo, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.millInfo = res.data;
					}
				},function(){
					Toast.clear();
				})
			},
			getReceiptSure(){
				let _this = this;
				_this.model4GetRecipt = true;
			},
			getReceipt(){
				let _this = this;
				let nowTimestamp = new Date().getTime(); 
				if(_this.safePassword==''||_this.safePassword==null){
					_this.$toast("安全密码不能为空");
					return;
				}
				let params = {
					safePassword:_this.safePassword
				}
				params.safePassword = _this.$JsEncrypt.encrypt(params.safePassword);
				_this.getRecieptLoading = true;
				_this.$ajax.ajax(_this.$api.getHoldFGCReceipt, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						if(res.data){
							Dialog.alert({
							  title: '系统提示',
							  message: `此次领取收益为${res.data}个FGC`
							}).then(() => {
							  // on close
							  _this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
							  _this.$cookies.set("tab_name_book", 'mineral', _this.$api.cookiesTime)
							  _this.$router.push('/myBook');
							});
						}
					}else{
						//_this.mineralNumTip = res.message;
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
					}
				},function(){
					_this.getRecieptLoading = false;
					_this.model4GetRecipt = false;
				})
			},
			startCodeRain(){
				var matrix = document.getElementById("matrix");
				var context = matrix.getContext("2d");
				matrix.height = window.innerHeight;
				matrix.width = window.innerWidth;
				var drop = [];
				var fontSize = 12; //字体
				var columns = matrix.width / fontSize;
				for (var i = 0; i < columns; i++) {
				    drop[i] = 1;
				}
				function drawMatrix() {
				    context.fillStyle = "rgba(0, 0, 0, 0.1)";
				    context.fillRect(0, 0, matrix.width, matrix.height);
				    context.fillStyle = "green";
				    context.font = fontSize + "px";
				    for (var i = 0; i < columns; i++) {
				        context.fillText(Math.floor(Math.random() * 2), i * fontSize, drop[i] * fontSize);
				        if (drop[i] * fontSize > (matrix.height * 2 / 3) && Math.random() > 0.85){
							drop[i] = 0;
						}
				        drop[i]++;
				    }
				}
				setInterval(drawMatrix, 50);//按照指定间隔一直执行方法
			}
		}
	}
</script>
