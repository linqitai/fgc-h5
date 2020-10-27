<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.destroyAccount{
		font-size: 0.75rem;
		@include pageNoHeight4Scroll();
		background-color: $main-box-color;
		z-index: 2;
		.unFreezePage{
			min-height: 600px;
			color: $mainTextColor;
			background-color: $main-box-color;
			.formBox{
				.labelText{
					margin-top: 10px;
					font-weight: bold;
					font-size: 14px;
				}
				.van-cell-group,.van-cell{
					background-color: inherit !important;
				}
				.van-cell{
					color: $mainTextColor !important;
					padding: 10px 0 !important;
					border-bottom: 1px solid $main-blue-black-color !important;
					/* &::last-child{
						border-bottom: 1px solid #BABABA !important;
					} */
				}
				.van-cell__value,.van-cell__value--alone,.van-field__control{
					color: $mainTextColor !important;
				}
				.van-cell:not(:last-child)::after{
					left: 0 !important;
				}
				.van-button__text{
					font-size: 15px;
					font-weight: bold;
					letter-spacing: 2px;
				}
			}
		}
		.sureBtn{
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
		}
		.textAdornColor{
			color: $main-adorn-color !important;
		}
	}
	
</style>
<template>
	<div class="destroyAccount">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				销毁账户
			</div>
			<i class="iconfont iconfont-question rightBox icon" @click="showTipModel=true"></i>
		</m-header>
		<div class="unFreezePage">
			<van-cell-group>
				<van-field v-model="idCard" clearable label="身份证号校验" placeholder="请填写身份证号" maxlength="18"/>
			</van-cell-group>
			<div class="placeholderLine10"></div>
			<!-- <div class="formBox paddingWing">
				<van-cell-group>
					<div class="labelText">身份证号</div>
					<van-field v-model="idCard" clearable :placeholder="请填写身份证号" maxlength="18"/>
				</van-cell-group>
			</div> -->
		</div>
		<div class="sureBtn">
			<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit">确认销毁</van-button>
		</div>
		<van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="知道了">
			<div class="paddingWing f-12 lineHeight tip4model2">
				<div class="line text margT10 textCenter">
					只有未激活、还没推广、没有交易记录的账户可销毁(注销)。
				</div>
			</div>
		</van-dialog>
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
				idCard:'',
				currentPage: 1,
				pageCount: 1000,
				totalItems: 10000,
				userId:"",
				loading:false,
				thisUserInfo:"",
				userFreezeInfo:"",
				userInfo:''
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			_this.userId = _this.$cookies.get('userId');
			if(_this.$utils.isNUll(_this.userId)){
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
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
				/* localStorage.removeItem('_USERINFO_');
				_this.$cookies.remove('userId');
				_this.$cookies.remove('token'); */
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$cookies.remove('token');
				_this.$router.replace('login');
				return;
			}
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			toListView(){
				let _this = this;
				_this.$router.push({
					path: `/myWordList`
				});
			},
			submit(){
				let _this = this;
				Dialog.confirm({
				  title: '销毁确认',
				  message: '你确定要销毁/注销/删除这个账号？'
				}).then(() => {
				  // on confirm
				  console.log("sure");
				  if(_this.userInfo.teamateNum>0){
					  Dialog.alert({
					    title: '系统提示',
					    confirmButtonText:'好的',
					    message: "您已有直推，无法销毁该账号"
					  }).then(() => {
					    // on confirm
					  })
					  return;
				  }
				  if(_this.userInfo.sellTimes>0||_this.userInfo.buyTimes>0){
					  Dialog.alert({
						title: '系统提示',
						confirmButtonText:'好的',
						message: "您已有交易记录，无法销毁该账号"
					  }).then(() => {
						// on confirm
					  })
					  return;
				  }
				  let params = {
					  idCard:_this.idCard
				  }
				  _this.$ajax.ajax(_this.$api.cancelAccount, 'GET', params, function(res){
				  	if(res.code == _this.$api.CODE_OK){
						Dialog.alert({
						  title: '系统提示',
						  confirmButtonText:'好的',
						  message: "销毁成功，可重新注册"
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
		}
	}
</script>
