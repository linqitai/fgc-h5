<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	$cellHeight:50px;
	.transferL{
		font-size: 0.75rem;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		min-height: 100%;
		background-color: $main-bg-color;
		color: $main-box-text-color;
		z-index: 2;
		overflow-y:scroll;
		.van-field__error-message {
		    color: #ee0a22 !important;
		}
		.van-dropdown-menu{
			height: $cellHeight !important;
			background-color: inherit !important;
		}
		.van-dropdown-menu__title{
			color: $main-box-text-color;
			font-size: 0.75rem !important;
		}
		[class*=van-hairline]::after{
			border: none !important;
		}
		/* .van-field__control{
			color: $mainTextColor;
		}
		.van-cell,.van-cell-group{
			background-color: inherit !important;
		} */
		.transferPageL{
			.van-field__label{
				width: 70px !important;
			}
			// .van-cell__value, .van-cell__value--alone, .van-field__control,.van-cell {
			//     color: #FFFFFF !important;
			// }
			.myCell{
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid $main-bg-color;
				// .van-cell__value, .van-cell__value--alone, .van-field__control {
				//     color: #FFFFFF !important;
				// }
				.flex{
					flex: 1;
					padding-left: 16px;
				}
				.align-right{
					text-align: right;
					align-self: right;
					align-items: right;
					justify-content: right;
				}
			}
			.myCell2{
				height: 200px;
				border-bottom: 1px solid $main-bg-color;
			}
			.sureBtn{
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;
			}
		}
		.textAdornColor{
			color: $main-adorn-color !important;
		}
	}
	
</style>
<template>
	<div class="transferL">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				转让钻石(会长)
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="transferPageL">
			<div class="placeholderLine10"></div>
			<!-- 贡献值:{{userInfo.contributionValue.toFixed(2)}}点 -->
			<div class="paddingWing tip4model3">当前拥有<br>钻石:{{userInfo.thisWeekMineral.toFixed(2)}}个  感恩券:{{userInfo.platformTicket.toFixed(2)}}个</div>
			<van-cell-group>
				<van-field v-model="form4AppointDeal.transferAmount" required clearable label="转让数量" placeholder="请填写转让数量" @blur="validate4AppointDeal('transferAmount')" :error-message="errorInfo4AppointDeal.transferAmount"/>
				<van-field v-model="curerntPlatformPrice" required disabled label="指导单价"/>
				<!-- <van-field v-model="getGuidancePrice" required disabled label="指导总价"/> -->
				<van-field v-model="form4AppointDeal.price" required clearable label="转让单价" placeholder="请填写协商好的卖出单价" @blur="validate4AppointDeal('price')" :error-message="errorInfo4AppointDeal.price"/>
				<van-field v-model="getAssurePrice" required clearable label="转让总价" placeholder="请先填写转让单价"/>
				<van-field v-model="form4AppointDeal.blockAddress" required clearable label="区块地址" placeholder="请填写直推的区块地址" maxlength="36" @blur="validate4AppointDeal('blockAddress')" :error-message="errorInfo4AppointDeal.blockAddress"/>
				<!-- <van-field v-model="form4AppointDeal.agentPhone" required clearable label="担保代理" placeholder="请填写代理手机号" maxlength="11" @blur="validate4AppointDeal('agentPhone')" :error-message="errorInfo4AppointDeal.agentPhone"> -->
					<!-- <van-button slot="button" size="small" type="primary">自动分配</van-button> -->
				</van-field>
				<!-- <van-field required v-model="form4AppointDeal.dsPassword" type="password" clearable label="动态密码" @blur="validate4AppointDeal('dsPassword')" :error-message="errorInfo4AppointDeal.dsPassword" placeholder="请填写服务商给的动态密码"/> -->
				<van-field v-model="form4AppointDeal.idCard" required clearable label="身份证号" placeholder="请填写自己的身份证号" maxlength="18" @blur="validate4AppointDeal('idCard')" :error-message="errorInfo4AppointDeal.idCard"/>
				<van-field required v-model="form4AppointDeal.safePassword" type="password" clearable label="安全密码" @blur="validate4AppointDeal('safePassword')" :error-message="errorInfo4AppointDeal.safePassword" placeholder="请填写自己的安全密码"/>
			</van-cell-group>
			<div class="placeholderLine10"></div>
			<!-- <div class="paddingWing tip4model3" v-html="$api.tipText4Safe"></div> -->
			<div class="placeholderLine10"></div>
			<div class="paddingWing tip4model3">
				<b class="textBold">定向转让钻石(会长)交易规则：</b><br>
				1.青铜及以上级别的工会会长才有权限给自己的3代伞下会员单向转让钻石。<br>
				2.转让手续费只收交易总金额10%的感恩券。比如：交易总金额是200CNY，收20CNY价值的感恩券作为手续费。<br>
			</div>
			<!-- <div class="margT10 paddingWing tip4model3" v-html="tipText4AppointDeal"></div> -->
			<div class="placeholderLine40"></div>
			<div class="placeholderLine40"></div>
			<div class="sureBtn">
				<div class="placeholderLine4"></div>
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit">提 交</van-button>
			</div>
		</div>
	</div>
</template>
<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog } from 'vant';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				showTipModel:false,
				//定向交易
				form4AppointDeal:{
					transferAmount:'',
					price:'',
					assurePrice:'',
					blockAddress:'',
					idCard:'',
					safePassword:''
				},
				errorInfo4AppointDeal:{
					transferAmount:'',
					price:'',
					assurePrice:'',
					blockAddress:'',
					idCard:'',
					safePassword:''
				},
				option1: [
					{ text: '问题反馈', value: 0 },
					{ text: '意见建议', value: 1 },
					{ text: '我要告状', value: 2 },
					{ text: '其他类型', value: 3 }
				],
				currentPage: 1,
				pageCount: 1000,
				totalItems: 10000,
				userId:"",
				loading:false,
				maxPrice:0,
				maxAddPrice:0,
				userInfo:'',
				curerntPlatformPrice:'',
				tipText4AppointDeal:'',
				guidancePrice:'',
				dealPageInfo:''
			}
		},
		components: {
			mHeader
		},
		computed:{
			getGuidancePrice() {
				let _this = this;
				let guidancePrice = _this.form4AppointDeal.transferAmount * _this.curerntPlatformPrice;
				_this.guidancePrice = guidancePrice.toFixed(2);
				return _this.guidancePrice;
			},
			getAssurePrice () {
				let _this = this;
				let assurePrice = Number(_this.form4AppointDeal.transferAmount) * Number(_this.form4AppointDeal.price);
				_this.form4AppointDeal.assurePrice = assurePrice.toFixed(2);
				return _this.form4AppointDeal.assurePrice;
			},
		},
		created() {
			let _this = this;
			//console.log("number:",(Number(7.12) - Number(6.11)).toFixed(2));
			_this.tipText4AppointDeal = _this.$api.tipText4AppointDeal;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
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
			_this.getDealPageInfo();
			/* if(_this.$cookies.get('haveDealPageInfo')){
				_this.dealPageInfo = JSON.parse(localStorage.getItem('dealPageInfo'));
				_this.curerntPlatformPrice = parseFloat(_this.dealPageInfo.currentPlatformPrice);
				_this.maxAddPrice = (parseFloat((_this.dealPageInfo.maxPrice))*1.1).toFixed(2);
				_this.maxPrice = (parseFloat((_this.dealPageInfo.maxPrice))*1.2).toFixed(2);
			}else{
				_this.getDealPageInfo();
			} */
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			getDealPageInfo(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getBuyBillInfo, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.dealPageInfo = res.data;
						_this.curerntPlatformPrice = parseFloat(_this.dealPageInfo.maxPrice).toFixed(2);
						_this.maxAddPrice = (parseFloat((_this.dealPageInfo.maxPrice))).toFixed(2);
						_this.maxPrice = (parseFloat((_this.dealPageInfo.maxPrice))*1.1).toFixed(2);
					}
				})
			},
			validate4AppointDeal(key){
				let _this = this;
				if(key == 'transferAmount') {
					if(_this.form4AppointDeal[key]>=0.1&&_this.form4AppointDeal[key]<=10000){
						_this.form4AppointDeal[key] = parseFloat(_this.form4AppointDeal[key]).toFixed(2);
						_this.errorInfo4AppointDeal.transferAmount = '';
					}else{
						_this.errorInfo4AppointDeal.transferAmount = "单次转让数量在0.1~10000之间";
					}
				}else if(key == 'price') {
					_this.form4AppointDeal[key] = parseFloat(_this.form4AppointDeal[key]).toFixed(2);
					let price = parseFloat(_this.form4AppointDeal[key]);
					let maxAddPrice = parseFloat(_this.maxAddPrice).toFixed(2);
					let maxPrice = parseFloat(_this.maxPrice).toFixed(2);
					let curerntPlatformPrice = parseFloat(_this.curerntPlatformPrice);
					//alert(maxAddPrice);
					//console.log("parseFloat(price)："+parseFloat(price)+",parseFloat(maxAddPrice):" + parseFloat(maxAddPrice) + ",parseFloat(maxPrice):" + parseFloat(maxPrice));
					if(parseFloat(price)>=parseFloat(maxAddPrice)&&parseFloat(price)<=parseFloat(maxPrice)){
						_this.errorInfo4AppointDeal.price = '';
					}else{
						_this.errorInfo4AppointDeal.price = `今日定向交易价格暂时控制在${maxAddPrice}~${maxPrice}CNY`;
					}
				}else if(key == 'assurePrice') {
					let totalPrice = parseFloat(_this.form4AppointDeal[key]);
					if(totalPrice>=0.1&&totalPrice<=1000000){
						_this.errorInfo4AppointDeal.assurePrice = '';
					}else{
						_this.errorInfo4AppointDeal.assurePrice = `单次交易金额暂时控制在0.1~1000000`;
					}
				}else if(key == 'blockAddress'){
					if(_this.$reg.block_address.test(_this.form4AppointDeal[key])){
						_this.errorInfo4AppointDeal.blockAddress = '';
					}else{
						_this.errorInfo4AppointDeal.blockAddress = "请正确粘贴对方的区块地址";
					}
				}else if(key == 'idCard'){
					if(_this.$reg.idCard.test(_this.form4AppointDeal[key])){
						_this.errorInfo4AppointDeal.idCard = '';
					}else{
						_this.errorInfo4AppointDeal.idCard = "请正确填写身份证号";
					}
				}else if(key == 'safePassword') {
					if(_this.$reg.safePassword.test(_this.form4AppointDeal[key])){
						_this.errorInfo4AppointDeal.safePassword = '';
					}else{
						_this.errorInfo4AppointDeal.safePassword = "安全密码不超过20位，由'字母或数字或._'组成";
					}
				}else if(key == 'dsPassword') {
					if(_this.$reg.dsPassword.test(_this.form4AppointDeal[key].replace(/ /g,""))){
						_this.errorInfo4AppointDeal.dsPassword = '';
					}else{
						_this.errorInfo4AppointDeal.dsPassword = "请填写正确的动态密码";
					}
				}
			},
			submit(){
				let _this = this;
				/* if(_this.$utils.getTimeHMS(new Date())>'21:00:00'){
					Dialog.alert({
					  title: '系统提示',
					  message: '定向交易时间是9~21点，请明天再来'
					}).then(() => {
					  // on close
					});
					return;
				} */
				/* if(_this.$utils.getTimeHMS(new Date())>'00:00:00'&&_this.$utils.getTimeHMS(new Date())<'09:00:00'){
					Dialog.alert({
					  title: '系统提示',
					  message: '定向交易时间是9~21点，请到点再来'
					}).then(() => {
					  // on close
					});
					return;
				} */
				let leaveNum = (Number(_this.userInfo.thisWeekMineral) - Number(_this.form4AppointDeal.transferAmount)).toFixed(2);
				
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确定',
				  message: `请确定是否要给对方转${_this.form4AppointDeal.transferAmount}个钻石？`
				}).then(() => {
				  // on confirm
					let params = {
						/* userId: _this.userId, */
						num: _this.form4AppointDeal.transferAmount,
						curerntPlatformPrice:_this.curerntPlatformPrice,
						price: _this.form4AppointDeal.price,
						assurePrice: _this.form4AppointDeal.assurePrice,
						blockAddress: _this.form4AppointDeal.blockAddress,
						idCard: _this.form4AppointDeal.idCard,
						safePassword: _this.form4AppointDeal.safePassword.replace(/ /g,""),
						// createTime:_this.$utils.getDateTime(new Date())
					}
					
					if(Number(params.price)>Number(_this.maxPrice)){
						//_this.$toast(`交易最高价暂时为${_this.maxPrice}元`);
						Dialog.alert({
						  title: '系统提示',
						  message: `交易最高价暂时为${_this.maxPrice}元`
						}).then(() => {
						  // on close
						});
						return;
					}
					if(Number(_this.userInfo.thisWeekMineral)<Number(params.num)){
						_this.$toast('您的钻石不够');
						return;
					}
					/* if(_this.userInfo.contributionValue<params.num){
						_this.$toast('您的贡献值不够');
						return;
					} */
					/* if(_this.userInfo.platformTicket<1){
						_this.$toast('您的感恩券不够');
						return;
					} */
					if(_this.$utils.hasNull(params)){
						_this.$toast('请填写完整信息');
						return;
					}
					if(_this.$utils.hasVal(_this.errorInfo4AppointDeal)){
						_this.$toast('请按要求填写信息');
						return;
					}
					params.safePassword = _this.$JsEncrypt.encrypt(_this.form4AppointDeal.safePassword);
					_this.loading = true;
					_this.$ajax.ajax(_this.$api.insertTransaction4LevelTeamBill, 'POST', params, function(res) {
						if (res.code == _this.$api.CODE_OK) {
							// _this.$toast('转让成功');
							_this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
							/* _this.$cookies.set("tab_name_book","mineral",_this.$api.cookiesTime); */
							_this.$cookies.set("tabName4MyDeal", "get", _this.$api.cookiesTime);
							// _this.$router.push('myDeal');
							if(params.agentPhone == localStorage.getItem('mobilePhone')) {
								_this.$router.push({path:'myDeal',query:{dealType:1,isSelf:1,mobilePhone:res.data.mobilePhone,num:params.num}});
							}else{
								_this.$router.push({path:'myDeal',query:{dealType:1,mobilePhone:params.agentPhone,num:params.num}});
							}
							//_this.$router.push({path:'myDeal',query:{dealType:1,mobilePhone:params.agentPhone,num:params.num}});
							//_this.$router.push({path:'myDeal',query:{mobilePhone:res.data.mobilePhone,num:params.num}});
							_this.$utils.formClear(_this.form4AppointDeal);
						}else{
							// _this.$toast(res.message);
							Dialog.alert({
							  title: '系统提示',
							  message: res.message
							}).then(() => {
							  // on close
							});
						}
					},function(){
						_this.loading = false;
					})
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
		}
	}
</script>
