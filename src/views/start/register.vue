<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.register{
		color: $main-box-fh-text-color;
		@include pageNoHeight4Scroll();
		width: 100%;
		box-sizing: border-box;
		background-color: $main-box-fh-bg-color;
		/* background:url(../../assets/image/bg.jpg) no-repeat; */
		.logoBox{
			position: relative;
			img{
				width: 100%;
			}
		}
		.title{
			padding: $boxPadding1;
			font-size: 1.5rem;
			font-weight: bolder;
		}
		.formHeader{
			padding: 6px $boxPadding1;
			text-align: center;
			// background-color: $main-box-fh-bg-color;
			color: $mainTextColor;
			.logoBox{
				position: relative;
				img{
					width: 100%;
				}
			}
		}
		.van-field__error-message{
			color: $main-adorn-color !important;
		}
		.formBox{
			padding:0 $boxPadding1;
			.van-cell__value,.van-cell__value--alone,.van-field__control{
				color: white !important;
			}
			.van-cell-group,.van-cell{
				background-color: inherit !important;
			}
			.van-cell{
				color: white !important;
				padding: 10px 0 !important;
				border-bottom: 1px solid $bottomLineColor !important;
				/* &::last-child{
					border-bottom: 1px solid $main-adorn-color !important;
				} */
			}
			.van-cell::after{
				border: none;
			}
			.labelText{
				margin-top: 10px;
				font-weight: bold;
				font-size: 14px;
			}
			.vanCountDown{
				.van-count-down{
					color: $mainTextColor !important;
				}
			}
			.van-button__text{
				font-size: 16px;
				font-weight: bold;
				letter-spacing: 2px;
			}
		}
		.sureBox{
			padding: $boxPadding1;
			.tip{
				margin: 1.25rem 0;
				font-size: 0.812rem
			}
			.agreement{color: $main-adorn-color;}
		}
		.securityCodeBox{
			.van-cell__value, .van-cell__value--alone, .van-field__control {
			    color: #323232 !important;
			}
			.van-field__label{
				width: 66px !important;
			}
			.van-button__text{
				font-size: 15px;
				font-weight: bold;
				letter-spacing: 2px;
			}
		}
		.van-dialog__header{
			color: #323232 !important;
		}
		.shadeMaster{
			position: fixed;
			top: 0;
			left: 0;
			/*水平居中*/
			text-align: center;
			width: 100%;
			height: 100%;
			background-color:rgba(0,0,0,0.5);
			p{
				position: absolute;
				color: white;
				font-size: 30px;
				text-align: center;
				top:50%;
				width: 100%;
				transform: translateY(-50%);
				-webkit-transform: translateY(-50%);
				span{
					color:#5FD6FF;
				}
			}
			.img{
				position: absolute;
				display: block;
				right: 20px;
				top:10px;
			}
		}
	}
</style>

<template>
	<div class="register">
		<div class="logoBox">
			<!-- <van-swipe :autoplay="2000" style="height: 190px;" :lazy-render="true">
			  <van-swipe-item v-for="(image, index) in images" :key="index">
				<img v-lazy="image" />
			  </van-swipe-item>
			</van-swipe> -->
			<!-- <img src="https://www.assist-china.co.ax/image/banner/banner0058.jpg" alt=""> -->
			<!-- <img src="https://www.assist-china.co.ax/image/banner/banner0055.jpg" alt=""> -->
		</div>
		<!-- <div class="formHeader">
			<div class="welcomeText green_text">{{welcomeText}}</div>
		</div> -->
		<div class="placeholderLine10"></div>
		<div class="title">
			感恩链注册页面
		</div>
		<div class="formBox">
			<van-cell-group :border="isNo">
				<div class="labelText">账号</div>
				<van-field v-model="form.phone" type="text" clearable :placeholder="placeholder.phone" @blur="validate('phone')" :error-message="errorHint.phone" maxlength="11"/>
				<div class="labelText">确认账号</div>
				<van-field v-model="form.phone2" type="password" clearable :placeholder="placeholder.phone2" @blur="validate('phone2')" :error-message="errorHint.phone2" maxlength="11"/>
				<div class="tip4model5 margT6">
					温馨提示：注册账号需填写本人的手机号，需填写绑定了自己【微信和支付宝】的手机号。若是港澳台及海外用户，只要有自己的支付宝和微信号即可注册并实名。
					<!-- 2.若不是看好帮扶的理念，而是单纯想撸羊毛的用户请不要注册，因为每次交易的数据都公开透明，纯撸者会被会员控告并冻结账号。 -->
				</div>
				<div class="labelText">登录密码</div>
				<van-field v-model="form.password" type="password" clearable :placeholder="placeholder.password" @blur="validate('password')" :error-message="errorHint.password" />
				<div class="labelText">确认登录密码</div>
				<van-field v-model="form.password2" type="password" clearable :placeholder="placeholder.password2" @blur="validate('password2')" :error-message="errorHint.password2"/>
				<!-- <van-field v-model="form.realName" clearable label="真实姓名" placeholder="请填写真实姓名" maxlength="15" @blur="validate('realName')"/> -->
				<div class="labelText">真实姓名</div>
				<van-field v-model="form.realName" clearable placeholder="请填写真实姓名" maxlength="15" @blur="validate('realName')" :error-message="errorHint.realName"/>
				<div class="labelText">身份证号</div>
				<van-field v-model="form.idCard" clearable maxlength="18" type="text" placeholder="请填写身份证号" @blur="validate('idCard')" :error-message="errorHint.idCard"/>
				<div class="labelText">确认身份证号</div>
				<van-field v-model="form.idCardSure" clearable maxlength="18" type="password" placeholder="请再次填写身份证号" @blur="validate('idCardSure')" :error-message="errorHint.idCardSure"/>
				
				
				<div class="labelText">验证码</div>
				 <!-- @blur="validate('securityCode')" -->
				<van-field v-model="form.securityCode" center clearable placeholder="请输入右边的图形验证码" :error-message="errorHint.securityCode">
					<van-button slot="button" size="small" type="primary" :loading="getSCLoading" @click="getSecurityCode">{{securityCode}}</van-button>
				</van-field>
				<!-- <div class="labelText">短信验证码</div>
				<van-field v-model="form.validateCode" clearable :placeholder="placeholder.validateCode" @blur="validate('validateCode')" :error-message="errorHint.validateCode">
					<van-button slot="button" size="small" color="#ffae00" :disabled="isShortMessageDisabled" @click="shortMessageBtn">
						<span v-if="isShortMessageDisabled==false">发送验证码</span>
						<span v-if="isShortMessageDisabled==true">
							{{time}}
						</span>
					</van-button>
				</van-field> -->
				<div class="labelText">推荐码</div>
				<van-field v-model="form.shareCode" clearable :disabled="false" :placeholder="placeholder.shareCode" @blur="validate('shareCode')" :error-message="errorHint.shareCode" />
			</van-cell-group>
		</div>
		<div class="sureBox">
			<div class="tip4model5">
				 <div class="read margT6">
					 <van-radio-group v-model="isRead" @change="isReadChange">
					   <van-radio name="1">
						    <b class="textBold white" @click="openRule">我已阅读并同意《注册协议》</b>
						</van-radio>
					 </van-radio-group>
				 </div>
			</div>
			<div class="placeholderLine10"></div>
			<!-- <div class="tip">点击注册即表示您同意<span class="agreement" @click="$router.push('agreement')">《用户协议》</span></div> -->
			<van-button color="linear-gradient(to right, #ffae00 , #ffae00)" size="normal" :block="true" @click="registerBtn" :loading="isLoading" loading-type="spinner">注  册</van-button>
			<div class="placeholderLine10"></div>
			<van-button size="normal" :block="true" @click="loginBtn">已有账号，去登录</van-button>
			<div class="placeholderLine10"></div>
		</div>
		<div class="helpList">
			<div class="item" v-for="item in helpList">
				<div class="textBox">
					<div class="line">
						<div class="left title">{{item.title}}</div>
						<!-- <div class="freeGet right">2020/08/01 12:12:12</div> -->
					</div>
					<!-- <div class="line content margT3 justify">平台小店预热优惠活动：订购此产品需交￥299押金，下单成功且经过商家审核后，奖励299张平台券，每人最多拍1件(备注：激活POS机需要刷卡满￥299，激活成功后再找商家审核，审核确实激活后，您所交的￥299押金可退回)</div> -->
					<div class="line content margT3"><div class="left">{{item.time}}</div><div class="right underline"><a :href="item.url" target="_self">查看详情</a></div></div>
				</div>
			</div>
		</div>
		<van-dialog v-model="showPickRealNameModel" title="注册协议" :showConfirmButton="false">
			<div class="paddingWing f-12 lineHeight tip4model2">
				<div class="tip4modelNew">
					<b class="textBold">尊敬的原始矿工注册前请认真阅读以下协议：</b><br>
					<div class="placeholderLine4"></div>
					会员的注册实名信息是矿工之间交换钻石时的重要凭据，<b class="textBold blue">一旦提交则无法修改</b>，若所填信息有误，只能注销自己的账号然后重新注册实名。<br>
				</div>
				<div class="placeholderLine20"></div>
				<van-button color="linear-gradient(to right, #0e7de5, #0b6cc7)" @click="showPickRealNameModel=false" size="normal" :block="true" :disabled="isDealDisabled" loading-type="spinner">{{timeRead}}</van-button>
				<div class="placeholderLine10"></div>
			</div>
		</van-dialog>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				showPickRealNameModel:false,
				images: [
					this.$api.domainName + '/image/banner/banner0058.jpg'
				],
				getSCLoading:false,
				interval:180,
				time:180,
				welcomeText:"",
				isNo:false,
				securityCode:'点击刷新',
				form:{
					phone:'',
					phone2:'',
					password:'',
					password2:'',
					validateCode:'',
					securityCode:'',
					shareCode:'',
					realName:'',
					idCard:'',
				},
				placeholder:{
					phone:'请填写绑定了[微信和支付宝]的手机号',
					phone2:'请填写与上面一致的注册手机号',
					password:'请填写6~16位登录密码',
					password2:'请填写与上面一致的登录密码',
					validateCode:'请输入短信验证码',
					securityCode:'请输入右边的图形验证码',
					shareCode:'请填写推荐码(选填)',
					realName:'请填写真实姓名',
					idCard:'请填写身份证号码'
				},
				errorHint:{
					phone:'',
					phone2:'',
					password:'',
					password2:'',
					validateCode:'',
					shareCode:'',
					securityCode:'',
					realName:'',
					idCard:''
				},
				registerValidate:true,
				isLoading:false,
				showTipModel:false,
				isShortMessageDisabled:false,
				isWeixin:false,
				helpList:[],
				securityp:'',
				isRead:0,
				timeRead:10,
				isDealDisabled:true
			}
		},
		/* watch:{
			'time'(now,old){
				let _this = this;
				console.log(now,old);
			},
		}, */
		created() {
			let _this = this;
			_this.welcomeText = _this.$api.welcomeText;
			_this.form.shareCode = _this.$route.query.id;
			_this.isWeixin = _this.$utils.isWeixin();
			_this.helpList = _this.$config.helpList;
			/* console.log("returnCitySN",returnCitySN);
			let citySN = returnCitySN; */
			/* let cip = localStorage.getItem('cip');
			console.log("cip2",cip) */
			let citySN = returnCitySN;
			//console.log("citySN.cip",citySN.cip);
			_this.securityp = _this.$JsEncrypt.encrypt(citySN.cip);
		
		},
		//倒计时方法
		countDown4Time(){
			let lastGetShortMessageCode = _this.$cookies.get('lastGetShortMessageCode');
			if(!_this.$utils.isNUll(lastGetShortMessageCode)){
				let lastTime = parseInt(_this.$utils.getTime(lastGetShortMessageCode)/1000);
				let nowTime = parseInt(_this.$utils.getTime(new Date())/1000);
				let thisStartTime = nowTime - lastTime;
				if(thisStartTime>0){
					_this.time = (_this.interval - thisStartTime);
					_this.isShortMessageDisabled = true;
					_this.setTimeInterval();
				}else{
					_this.isShortMessageDisabled = false;
				}
			}
		},
		methods:{
			loginBtn(){
				this.$router.push('login');
			},
			bsTip(){
				let _this = this;
				//_this.isWeixin = _this.$utils.isWeixin();
			},
			shortMessageBtn(){
				let _this = this;
				if(_this.$utils.isNUll(_this.form.phone)){
					_this.$toast('请先填写注册手机号');
				}else{
					_this.showTipModel = true;
					_this.getSecurityCode();
				}
			},
			openRule(){
				let _this = this;
				_this.timeRead = 10;
				_this.showPickRealNameModel=true;
				_this.timeReadEvent();
			},
			timeReadEvent(){
				let _this = this;
				let result = setInterval(function(){
					if(_this.timeRead==0){
						_this.isDealDisabled = false;
						_this.timeRead = "确认";
						clearInterval(result);
					}else{
						_this.timeRead = _this.timeRead - 1;
					}
				},1000);
			},
			isReadChange(val){
				let _this = this;
				_this.isRead = val;
			},
			getSecurityCode(){
				let _this = this;
				let params = {
					mobilePhone:_this.form.phone
				}
				console.log('params',params);
				if(_this.$utils.hasNull(params)){
					Dialog.alert({
					  title: '系统提示',
					  message: '请先填写注册手机号'
					}).then(() => {
					  // on close
					});
					return;
				}
				_this.getSCLoading = true;
				_this.$ajax.ajax(_this.$api.getSecurityCode, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						// console.log('securityCode4Web',res.data);
						_this.getInitCode = res.data;
						let initCode = _this.$JsEncrypt.decrypt(_this.getInitCode.initCode);
						_this.securityCode = initCode;
						//_this.securityCode = _this.$utils.getSC(initCode);
					}else{
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
					}
				},function(res){
					_this.getSCLoading = false;
				})
			},
			setTimeInterval(){
				let _this = this;
				let tv = setInterval(function(){
					_this.time = _this.time - 1;
					if(_this.time<=0){
						clearInterval(tv);
						_this.isShortMessageDisabled = false;
					}
				},1000)
			},
			verifySecurityCodeBtn(){
				let _this = this;
				let params = {
					securityCode: _this.form.securityCode
				}
				if(params.securityCode.length!=4){
					_this.$toast('请正确填写图形验证码');
					return;
				}
				//console.log('params',params);
				_this.$ajax.ajax(_this.$api.verifySecurityCode, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						console.log("OK");
						_this.isShortMessageDisabled = true;
						//要缓存上次请求的时间，然后设置time的值，避免刷新后可以立马请求
						_this.time = 180;
						_this.setTimeInterval();
						let now = _this.$utils.getDateTime(new Date());
						_this.$cookies.set('lastGetShortMessageCode',now,60*3);
						//console.log('lastGetShortMessageCode',_this.$cookies.get('lastGetShortMessageCode'));
						//这里请求短信验证码
					}else{
						_this.$toast(res.message);
					}
				},function(res){
					_this.showTipModel = false;
				})
			},
			registerBtn(){
				let _this = this;
				//console.log('form',this.form);
				let phone = localStorage.getItem("mobilePhone");
				if(!_this.$utils.isNUll(phone)){
					if(_this.form.phone != phone){
						// _this.$toast("一机一号，切勿违规操作");
						Dialog.alert({
						  title: '系统提示',
						  message: _this.$api.oneAccount,
						}).then(() => {
						  // on close
						});
						return;
					}
				}
				if(_this.isRead == 0){
					Dialog.alert({
					  title: '系统提示',
					  message: '尊敬的矿工，请先认真阅读以上注册规则'
					}).then(() => {
					  // on close
					});
					return;
				}
				let params = {
					telephone:_this.form.phone.replace(/ /g,""),
					password:_this.form.password.replace(/ /g,""),
					confirmPassword:_this.form.password2.replace(/ /g,""),
					securityCode: _this.form.securityCode.toLowerCase().replace(/ /g,""),
					shareCode:_this.form.shareCode||'xxxx',
					realName:_this.form.realName,
					idCard:_this.form.idCard,
					securityp: _this.securityp
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				if(_this.$utils.hasVal(_this.errorHint)){
					_this.$toast('请按要求填写信息');
					return;
				}
				if(params.password != params.confirmPassword){
					_this.$toast('2次密码不一致');
					return;
				}
				delete params.confirmPassword;
				params.password = _this.$JsEncrypt.encrypt(_this.form.password);
				// console.log('params',params);
				_this.isLoading = true;
				_this.$ajax.ajax(_this.$api.register, 'POST', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						localStorage.setItem("mobilePhone",_this.form.phone);
						_this.$toast('注册成功,请登录');
						//_this.securitypInsert();
						_this.$router.push('/login');
					}else{
						//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message,
						}).then(() => {
						  // on close
						  
						});
					}
				},function(){
					_this.isLoading = false;
				})
			},
			securitypInsert(){
				let _this = this;
				let params = {
					phone:_this.form.phone.replace(/ /g,""),
					securityp:_this.securityp,
				}
				_this.$ajax.ajax(_this.$api.securitypInsert, 'POST', params, function(res) {
					console.log('securitypInsert:',res.data);
				},function(){
					_this.isLoading = false;
				})
			},
			validate(key){
				let _this = this;
				//TSBK1taWQTpNjOkisQDHio8Vdiv94nvYRCE2JgEKbck=
				//Wu8v/5SEYcEBR/YGGLYAwGR4HkBmXB5P+Tf4W7CzXeA=
				if(key == 'phone') {
					//console.log('_this.form.phone',_this.form.phone)
					if(_this.$reg.phone2.test(_this.form.phone)){
						_this.errorHint.phone = '';
						// _this.getSecurityCode();
					}else{
						_this.errorHint.phone = _this.$reg.phoneHint;
					}
				}else if(key == 'phone2') {
					//console.log('_this.form.phone',_this.form.phone)
					if(_this.form.phone==_this.form.phone2){
						_this.errorHint.phone2 = '';
						// _this.getSecurityCode();
					}else{
						_this.errorHint.phone2 = _this.placeholder.phone2;
					}
				}else if(key == 'password'){
					if(_this.$reg.password.test(_this.form.password.replace(/ /g,""))){
						_this.errorHint.password = '';
						/* if(_this.form.password.replace(/ /g,"").length>16){
							_this.errorHint.password = _this.$reg.passwordHint;
						} */
					}else{
						_this.errorHint.password = _this.$reg.passwordHint;
					}
				}else if(key == 'password2'){
					if(_this.form.password2 == _this.form.password.replace(/ /g,"")){
						_this.errorHint.password2 = '';
					}else{
						_this.errorHint.password2 = _this.placeholder.password2;
					}
				}else if(key == 'validateCode'){
					if(_this.$reg.validateCode.test(_this.form.validateCode.replace(/ /g,""))){
						_this.errorHint.validateCode = '';
					}else{
						_this.errorHint.validateCode = _this.$reg.validateCodeHint;
					}
				}else if(key == 'shareCode') {
					if(_this.$reg.shareCode.test(_this.form.shareCode)){
						_this.errorHint.shareCode = '';
					}else{
						_this.errorHint.shareCode = _this.$reg.shareCodeHint;
					}
				}else if(key == 'securityCode'){
					if(_this.$reg.securityCode.test(_this.form.securityCode.replace(/ /g,""))){
						_this.errorHint.securityCode = '';
					}else{
						_this.errorHint.securityCode = _this.$reg.securityCodeHint;
					}
				}else if(key == 'realName'){
					if((_this.form.realName.length)>1&&(_this.form.realName.length)<=15){
						_this.errorHint.realName = '';
					}else{
						_this.errorHint.realName = '请正确填写真实姓名';
					}
				}else if(key == 'idCard'){
					if(_this.$reg.idCard.test(_this.form.idCard)){
						_this.errorHint.idCard = '';
					}else{
						_this.errorHint.idCard = _this.$reg.idCardHint;
					}
				}else if(key == 'idCardSure'){
					if(_this.form.idCard == _this.form.idCardSure){
						_this.errorHint.idCardSure = '';
					}else{
						_this.errorHint.idCardSure = "2次证件号不一致";
					}
				}
			},
		}
	}
</script>