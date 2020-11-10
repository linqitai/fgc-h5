<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.raise4Other{
		@include pageHaveHeight4Scroll();
		color: $main-box-fh-text-color !important;
		background-color: $main-box-fh-bg-color !important;
		.van-list__finished-text{
			color:$main-box-fh-text-color;
		}
		.van-field__label{
			width: 66px !important;
		}
		.story,.materialProve{
			padding: $boxPadding2;
			.title{
				font-size: 0.875rem;
				font-weight: bold;
			}
			.textRight{
				text-align: right;
				color: $main-adorn-color;
			}
			.content{
				font-size: 12px;
				letter-spacing: 1px;
				line-height: 1.2em;
			}
			.imageList{
				flex-wrap: wrap;
				flex-direction: row;
				align-content: left;
				align-items: center;
				justify-content: left;
				
				.van-image{
					margin-right: 3px;
					margin-top: 3px;
				}
			}
			.dianzan{
				clear: both;
				padding-top: 12px;
				padding-bottom: 12px;
			}
		}
		
		.replyList{
			padding-left: $boxPadding2;
			padding-right: $boxPadding2;
			padding-bottom: $boxPadding2;
			.title{
				font-size: 0.875rem;
				font-weight: bold;
			}
			.textRight{
				text-align: right;
				color: $main-adorn-color;
			}
			.content{
				letter-spacing: 1px;
				line-height: 1.2em;
			}
			.imageList{
				flex-wrap: wrap;
				flex-direction: row;
				align-content: left;
				align-items: center;
				justify-content: left;
				
				.van-image{
					margin-right: 3px;
					margin-top: 3px;
				}
			}
			.dianzan{
				clear: both;
				padding-top: 6px;
				padding-bottom: 12px;
			}
			.item{
				padding-top: 10px;
				padding-bottom: 10px;
				/* border-bottom: 1px solid $main-blue-black-color; */
			}
		}
		
		.records{
			padding: $boxPadding2;
			padding-top: 3px;
			.title{
				font-size: 0.937rem;
			}
			.flexsBox{
				display: flex;
				box-sizing:border-box !important;
				color:$main-box-fh-text-color;
				border-bottom: 1px solid $bottomLineColor;
				&.row{
					flex-direction: row;
					align-items: center;
				}
				.flexLeft1{
					flex: 0 0 44px;
				}
				.flexThis{
					flex:1;
					text-align: left;
					margin-top: 6px;
					padding-bottom: 6px;
					&.column{
						flex-direction: column;
					}
					.line1{
						overflow: hidden;
						clear: both;
						width: 100%;
						font-size: 13px;
						span{color: $main-adorn-color;}
					}
					.line2{
						overflow: hidden;
						clear: both;
						width: 100%;
						margin-top: 3px;
						font-size: 12px;
						text-align: justify;
						line-height: 1.2em;
					}
					.line3{
						overflow: hidden;
						clear: both;
						width: 100%;
						font-size: 11px;
						span{color: $main-adorn-color;}
						margin-top: 3px;
					}
				}
			}
		}
		.van-popup--bottom.van-popup--round{
			background-color: $main-box-fh-bg-color !important;
		}
		.van-action-sheet__header{
			color: white !important;
		}
		.raiseBtn{
			position: fixed;
			bottom: 0px;
			right: 0px;
			background-color: linear-gradient(to right, #ffae00 , #ff8400);
			color: $main-box-fh-text-color;
			width:100%;
			height:50px;
			line-height:50px;
			/* border-radius:$fixed-btn-width2; */
			text-align: center;
			z-index:2001;
			font-size: 14px;
			user-select:none;
		}
	}
</style>

<template>
	<div class="raise4Other">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				帖子详情
			</div>
			<i class="iconfont rightBox icon"></i>
		</m-header>
		<div>
			<div v-if="list1">
				<div class="story borderBottom">
					<div class="content justify f-14 textBold" v-html="list1.story"/>
					<div class="dianzan">
						<i class="left">{{list1.createTime}}</i>
						<i class="iconfont iconfont-oppose f-14 right margL10"  @click="showAttitudeBtn(1,'oppose',null,null)">{{list1.opposeTimes || 0}}</i>
						<i class="iconfont iconfont-support f-14 right margL10" @click="showAttitudeBtn(1,'support',null,null)">{{list1.supportTimes || 0}}</i>
						<i class="iconfont iconfont-word f-14 right" @click="showRaiseModel=true"></i>
					</div>
				</div>
				<div class="replyList" v-if="list1.replyList">
					<div class="item borderBottom" v-for="(item,index) in list1.replyList" :key="item.id">
						<div class="content justify f-12">{{item.nickName}}:{{item.content}}</div>
						<div class="dianzan">
							<i class="left">{{item.createTime}}</i>
							<i class="iconfont iconfont-oppose f-14 right margL10"  @click="showAttitudeBtn(2,'oppose',item.id,index)">{{item.opposeTimes || 0}}</i>
							<i class="iconfont iconfont-support f-14 right margL10" @click="showAttitudeBtn(2,'support',item.id,index)">{{item.supportTimes || 0}}</i>
							<!-- <i class="iconfont iconfont-word f-14 right" @click="showRaiseModel=true"></i> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<van-action-sheet v-model="showRaiseModel" title="回帖">
			<div class="materialProve borderBottom">
				<div>
					<van-field label="回帖内容"
					  v-model="word"
					  rows="2"
					  autosize clearable
					  type="textarea"
					  maxlength="500"
					  placeholder="请填写回帖内容"
					  show-word-limit
					/>
				</div>
				<div class="placeholderLine10"></div>
			</div>
			<van-button @click="sureReplyEvent" size="normal" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" :loading="getNumberLoading">确认</van-button>
		</van-action-sheet>
		<div class="raiseBtn" @click="showRaiseModelBtn()" v-if="list1.status==3">我要捐赠</div>
		<transition name="van-fade">
		  <router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog,ImagePreview,Toast } from 'vant';
	import clip from '@/assets/js/clipboard';
	export default {
		data() {
			return {
				showRaiseModel:false,
				showPasswordBoxDialog:false,
				isSupportLoading:false,
				closeable:true,
				loading:false,
				pageSize:1,
				currentPage1: 1,
				loading1:false,
				finished1:false,
				list1:[],
				currentPage2: 1,
				pageSize2:6,
				loading2:false,
				finished2:false,
				list2:[],
				currentPage3: 1,
				pageSize3:6,
				loading3:false,
				finished3:false,
				list3:[],
				totalItems:0,
				totalItems3:0,
				currentPage4: 1,
				pageSize4:6,
				loading4:false,
				finished4:false,
				list4:[],
				totalItems4:0,
				showImagePreview: false,
				imageIndex: 0,
				images: [],
				loadingRecordsList:false,
				finishedRecordsList:false,
				num:0,
				word:'',
				tabActiveName:"raiseRecord1",
				userInfo:"",
				number:"",
				word4Mineral:"",
				getNumberLoading: false,
				raiseMineralSum:0
			}
		},
		components: {
			mHeader
		},
		created() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
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
			_this.getAssistRaise();
		},
		mounted() {
			let _this = this;
			
		},
		methods:{
			back(){
				let _this = this;
				_this.$router.go(-1);
				//_this.$router.push("/raise")
			},
			toView(id){
				let _this = this;
				_this.$router.push({path:"raiseRecord",query:{id:id}})
			},
			showRaiseModelBtn(){
				let _this = this;
				_this.showRaiseModel = true;
			},
			handleCopy(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			waiting(){
				this.$toast(`即将开放`);
			},
			tabChange(name,title){
				let _this = this;
				//console.log(name,title);
				this.$cookies.set("tabName4Record", name, 60 * 60 * 1)
				if(name == 'raiseRecord1'){
					_this.getAssistRaiseRecordListPage();
				}else if(name == 'raiseRecord2'){
					_this.getAssistRaiseRecordListPage3();
				}else if(name == 'raiseRecord4'){
					_this.getAssistRaiseRecordListPage4();
				}
			},
			showAttitudeBtn(type,remark,replyId,index){
				//console.log("submit");
				let _this = this;
				let params = {
					voteId:_this.list1.id,
					questionId:replyId||0,
					type:type,//1-贴吧表 2-回复表
					remark:remark//support支持 oppose反对
				}
				/* if(_this.userInfo.myCalculationPower<0.1){
					Dialog.alert({
					  title: '系统提示',
					  message: '参与该投票需要个人算力达到0.1G'
					}).then(() => {
					  // on close
					});
					return;
				} */
				_this.$ajax.ajax(_this.$api.insertAssistAnswer4Raise, 'POST', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						if(res.data == 1){
							_this.$toast('操作成功');
							if(type==1){
								if(remark=='support'){
									_this.list1.supportTimes = _this.list1.supportTimes + 1;
								}else{
									_this.list1.opposeTimes = _this.list1.opposeTimes + 1;
								}
							}else{
								if(remark=='support'){
									_this.list1.replyList[index].supportTimes = _this.list1.replyList[index].supportTimes + 1;
								}else{
									_this.list1.replyList[index].opposeTimes = _this.list1.replyList[index].opposeTimes + 1;
									//console.log(type,this.list1.replyList[index].opposeTimes);
								}
							}
						}else{
							_this.$toast(res.message);
						}
					}else{
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
					}
				})
			},
			addMineral(num){
				let _this = this;
				_this.num = num;
				_this.showPasswordBoxDialog = true;
				_this.textTip = "矿石";
				/* Dialog.confirm({
				  title: '系统提示',
				  confirmButtonText:'确认',
				  closeOnClickOverlay:true,
				  message: `您是否要捐赠${num}个矿石给求助者？`
				}).then(() => {
				  // on confirm
				  //_this.$toast(`即将开放`);
				  _this.addMineralRequest();
				}) */
				
			},
			addMineralRequest(){
				let _this = this;
				let params = {
				  raiseId: _this.list1.id,
				  raiseNum: _this.num,
				  word: _this.word4Mineral||'加油',
				  type: 0
				}
				//console.log("params",params);
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				if(!_this.$reg.positive_integer.test(_this.num)){
					_this.$toast(`请填写正整数的矿石`);
					return;
				}
				if(_this.userInfo.thisWeekMineral<_this.num){
					_this.$toast(`您所拥有的矿石扣不够${_this.num}个，请调整数量`);
					return;
				}
				_this.getNumberLoading = true;
				//console.log("p",params)
				_this.$ajax.ajax(_this.$api.insertAssistRaiseRecord, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.$toast("捐赠成功");
						_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
						_this.word4Mineral = '';
						_this.number4Mineral = '';
						_this.getAssistRaiseRecordListPage4();
						//_this.getAssistRaiseRecordListPage();
					}else{
						Dialog.alert({
							title: "系统提示",
							message: res.message
						}).then(() => {
						  // on confirm
						  //_this.getCurrentAuction();
						})
					}
				},function(){
					_this.getNumberLoading = false;
				})
			},
			addTicket(num){
				let _this = this;
				_this.num = num;
				_this.showPasswordBoxDialog = true;
				_this.textTip = "帮扶券";
				/* Dialog.confirm({
				  title: '系统提示',
				  confirmButtonText:'确认',
				  closeOnClickOverlay:true,
				  message: `您是否要捐赠${num}个给求助者？`
				}).then(() => {
				  // on confirm
				  //_this.$toast(`即将开放`);
				  _this.addTicketRequest();
				}) */
				
			},
			sureReplyEvent(){
				let _this = this;
				let params = {
				  raiseId: _this.list1.id,
				  content: _this.word,
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				_this.getNumberLoading = true;
				_this.$ajax.ajax(_this.$api.insertAssistReplyRaise, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						//_this.$toast("捐赠成功");
						_this.showRaiseModel = false;
						_this.getAssistRaise();
						
						Dialog.alert({
							title: "系统提示",
							message: "操作成功"
						}).then(() => {
						  // on confirm
						  //_this.getCurrentAuction();
						})
					}else{
						Dialog.alert({
							title: "系统提示",
							message: res.message
						}).then(() => {
						  // on confirm
						  //_this.getCurrentAuction();
						})
					}
				},function(){
					_this.getNumberLoading = false;
					_this.showPasswordBoxDialog = false;
				})
			},
			sureRaiseEvent(){
				let _this = this;
				_this.raiseRequest();
			},
			raiseRequest(){
				let _this = this;
				let word = '';
				if(_this.textTip=="矿石"){
					word = _this.word4Mineral;
				}else{
					word = _this.word;
				}
				let params = {
				  raiseId: _this.list1.id,
				  raiseNum: _this.num,
				  word: word||'加油',
				  type: _this.textTip == "矿石"?0:1,
				  safePassword:_this.safePassword
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				if(!_this.$reg.positive_integer.test(_this.num)){
					_this.$toast(`请填写正整数的数量`);
					return;
				}
				if(_this.textTip=="矿石"){
					if(_this.userInfo.thisWeekMineral<_this.num){
						_this.$toast(`您所拥有的${_this.textTip}扣不够${_this.num}个，请调整数量`);
						return;
					}
				}else{
					if(_this.userInfo.platformTicket<_this.num){
						_this.$toast(`您所拥有的${_this.textTip}扣不够${_this.num}个，请调整数量`);
						return;
					}
				}
				params.safePassword = _this.$JsEncrypt.encrypt(params.safePassword);
				_this.safePassword='';
				_this.getNumberLoading = true;
				_this.$ajax.ajax(_this.$api.insertAssistRaiseRecord, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						//_this.$toast("捐赠成功");
						_this.showRaiseModel = false;
						_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
						if(_this.textTip=="矿石"){
							_this.word4Mineral = '';
							_this.number4Mineral = '';
							_this.getAssistRaise();
						}else{
							_this.word = '';
							_this.number = '';
						}
						
						Dialog.alert({
							title: "系统提示",
							message: "捐赠成功"
						}).then(() => {
						  // on confirm
						  //_this.getCurrentAuction();
						})
					}else{
						Dialog.alert({
							title: "系统提示",
							message: res.message
						}).then(() => {
						  // on confirm
						  //_this.getCurrentAuction();
						})
					}
				},function(){
					_this.getNumberLoading = false;
					_this.showPasswordBoxDialog = false;
				})
			},
			addTicketRequest(){
				let _this = this;
				let params = {
				  raiseId: _this.list1.id,
				  raiseNum: _this.num,
				  word: _this.word || '加油',
				  type: 1
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				if(!_this.$reg.positive_integer.test(_this.num)){
					_this.$toast(`请填写正整数的帮扶券`);
					return;
				}
				if(_this.userInfo.platformTicket<_this.num){
					_this.$toast(`您所拥有的帮扶券不够${_this.num}个`);
					return;
				}
				_this.getNumberLoading = true;
				//console.log("p",params)
				_this.$ajax.ajax(_this.$api.insertAssistRaiseRecord, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.$toast("捐赠成功");
						_this.word = '';
						_this.number = '';
						_this.getAssistRaise();
						//_this.getAssistRaiseRecordListPage();
					}else{
						Dialog.alert({
							title: "系统提示",
							message: res.message
						}).then(() => {
						  // on confirm
						  //_this.getCurrentAuction();
						})
					}
				},function(){
					_this.getNumberLoading = false;
				})
			},
			getRaiseMineralNum(raiseId){
				let _this = this;
				let params = {
					raiseId:raiseId
				}
				_this.$ajax.ajax(_this.$api.getRaiseMineralNum, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.raiseMineralSum = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getAssistRaiseRecordListPage(){
				let _this = this;
				
				let params = {
					pageNo: _this.currentPage2,
					pageSize: _this.pageSize2,
					raiseId:_this.list1.id,
					type:1
				}
				_this.loading2 = true;
				_this.$ajax.ajax(_this.$api.getAssistRaiseRecordListPage, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.list2 = res.data.list;
						_this.totalItems = res.data.total;
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.finished2 = true;
					_this.loading2 = false;
				})
			},
			getAssistRaiseRecordListPage4(){
				let _this = this;
				
				let params = {
					pageNo: _this.currentPage4,
					pageSize: _this.pageSize4,
					raiseId:_this.list1.id,
					type:0
				}
				_this.loading4 = true;
				_this.$ajax.ajax(_this.$api.getAssistRaiseRecordListPage, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.list4 = res.data.list;
						_this.totalItems4 = res.data.total;
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.finished4 = true;
					_this.loading4 = false;
				})
			},
			getAssistRaiseRecordListPage3(){
				let _this = this;
				let params = {
					pageNo: _this.currentPage3,
					pageSize: _this.pageSize3,
					raiseId:_this.list1.id
				}
				_this.loading3 = true;
				_this.$ajax.ajax(_this.$api.getAssistRaiseRecordRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.list3 = res.data.list;
						_this.totalItems3 = res.data.total;
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.finished3 = true;
					_this.loading3 = false;
				})
			},
			getAssistRaise(){
				let _this = this;
				let params = {
					id:_this.$route.query.id
				}
				_this.loading1 = true;
				Toast.loading({
				  message: '加载中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				_this.$ajax.ajax(_this.$api.getAssistRaise, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.list1 = res.data;
						if(_this.list1){
							let picNum = _this.list1.picNum;
							let id = _this.list1.id;
							let images = [];
							if(picNum>0){
								for(let i=0;i<picNum;i++){
									let item = _this.$api.domainName + '/image/raise/' + id + '00'+ (i+1) +'.jpg';
									images.push(item);
								}
							}else{
								if(_this.list1.pic){
									let picArr = _this.list1.pic.split('|');
									for(let i=0;i<picArr.length;i++){
										let item = picArr[i];
										images.push(item);
									}
								}
							}
							_this.images=images;
							//_this.images = _this.list1.pic.split('|');
							//_this.getAssistRaiseRecordListPage();
							//_this.getRaiseMineralNum(_this.list1.id);
							//console.log("replyList",_this.list1.replyList);
						}else{
							_this.list1 = '';
						}
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.loading1 = false;
					Toast.clear();
				})
			},
			onLoadRecordsList() {
				let _this = this;
				// 异步更新数据
				setTimeout(() => {
					// 加载状态结束
					_this.loadingRecordsList = false;
					_this.finishedRecordsList = true;
				}, 500);
			},
			imagePreviewEvent(index){
				this.showImagePreview = true;
				//console.log("index",index);
				this.imageIndex = index;
			},
			onChangeImageIndex(index) {
			  this.imageIndex = index;
			},
			messageAlert(){
				let _this = this;
				Dialog.alert({
				  title: '系统提示',
				  message: _this.$api.raiseTip
				}).then(() => {
				  // on close
				});
			}
		}
	}
</script>