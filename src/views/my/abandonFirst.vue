<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.abandonFirst{
		font-size: 0.75rem;
		@include pageNoHeight4Scroll();
		background-color: $main-box-color;
		z-index: 2;
		.unFreezePage{
			min-height: 300px;
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
	<div class="abandonFirst">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				转移到帮扶链上级下面
			</div>
			<i class="iconfont rightBox icon"></i>
		</m-header>
		<div class="unFreezePage">
			<div class="paddingWing f-12 lineHeight tip4model1">
				转移的条件：团队算力为0。<br>
				转移后上级会变回帮扶链里的上级。
			</div>
			<van-cell-group>
				<van-field v-model="idCard" clearable label="身份证号校验" placeholder="请填写自己的身份证号" maxlength="18"/>
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
			<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit">确认转移</van-button>
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
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				////console.log("userInfo_localStorage");
				_this.userInfo = JSON.parse(userInfo);
			}else{
				/*
				_this.$cookies.remove('userId');
				_this.$cookies.remove('token'); */
				_this.$toast(_this.$api.loginAgainTipText);
				 localStorage.removeItem('_USERINFO_');
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
				  title: '确认信息',
				  message: '请问是否要转移到原来帮扶链的上级下面？'
				}).then(() => {
				  // on confirm
				  if(_this.userInfo.teamCalculationPower>0){
					  Dialog.alert({
					    title: '系统提示',
					    confirmButtonText:'好的',
					    message: "您已有团队算力，无法转移"
					  }).then(() => {
					    // on confirm
					  });
					  return;
				  }
				  if(_this.idCard==null||_this.idCard==''){
					  Dialog.alert({
						title: '系统提示',
						confirmButtonText:'好的',
						message: "请填写身份证号校验"
					  }).then(() => {
						// on confirm
					  });
					  return;
				  }
				  let params = {
					  idCard:_this.idCard
				  }
				  _this.$ajax.ajax(_this.$api.abandonFirst, 'POST', params, function(res){
				  	if(res.code == _this.$api.CODE_OK){
						Dialog.alert({
						  title: '系统提示',
						  confirmButtonText:'好的',
						  message: "操作成功，请查看我的工会里的上级"
						}).then(() => {
						  // on confirm
						  //_this.$router.replace('login');
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
