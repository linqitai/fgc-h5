<style lang="scss" scoped>
	@import '~@/assets/scss/variable.scss';
  .show {
    position: fixed;
    bottom: 50vh;
    left: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: -27%;
  }
  body {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .rankLine{
	  color: #323232;
	  font-size: 14px;
	  line-height: 1.3em;
	  text-align: center;
  }
/* .bg_yellow{background-color: rgb(255, 135, 65);} */
  .layout {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow: auto;
    .top {
      display: flex;
      max-width: 600px;
      width: 100%;
      padding: 20px;
      flex-direction: row;
      justify-content: space-around;
      button {
        border: none;
        color: #fff;
        font-size: 16px;
        padding: 10px 10px;
        cursor: pointer;
        border-radius: 6px;
      }
      span {
        width: 100px;
        display: inline-flex;
        align-items: center;
        justify-content: left;
      }
    }
    .all-container {
      height: 500px;
      width: 500px;
      text-align: left !important;
      .background {
        box-sizing: content-box;
        background-color: #bbada0;
        display: inline-flex;
        flex-wrap: wrap;
        padding: 10px;
        justify-content: space-between;
        border-radius: 10px;
        width: 480px;
        position: absolute;
        z-index: 0;
        & > span {
          background-color: rgba(238,228,218,0.35);
          margin: 10px;
          width: 100px;
          height: 100px;
          border-radius: 10px;
          z-index: 1;
        }
      }
      .container {
        z-index: 0;
        padding: 10px;
        width: 480px;
        height: 480px;
        display: inline-flex;
        position: absolute;
        justify-content: flex-start;
        align-items: flex-start;
        -webkit-touch-callout: none;
        -ms-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -ms-touch-action: none;
        touch-action: none;
        .list {
          margin: 10px;
          width: 100px;
          height: 100px;
          border-radius: 10px;
          position: absolute;
          font-size: 50px;
          font-weight: bold;
          transition-property: transform;
          border-radius: 10px;
          transition: 100ms ease-in-out;
          .inner {
            width: 100%;
            height: 100%;
            color: #fff;
            display: inline-flex;
            align-items: center;
            border-radius: 10px;
            justify-content: center;
            animation-fill-mode: backwards;
            animation: appear 200ms ease-in-out;
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    html,body{
      overflow: hidden;
    }
    .layout{
      overflow: hidden;
      header {
        span{
          width: 70px;
        }
      }
      .all-container {
        margin: 2vw;
        width: 96vw;
        height: 96vw;

        .background,.container {
          width: 96vw;
          height: 96vw;
          box-sizing: border-box;
          padding: 1vw;
          & > span,.list {
            width: 21vw;
            height: 21vw;
            margin: 1vw;
            font-size: 8vw;
          }
        }
      }
    }
  }
  @keyframes appear {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    80% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
<template>
  <div class="paddingWing">
	<m-header>
	<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
	<div class="text">
		2048竞技区
	</div>
	<i class="rightBox icon iconfont iconfont-rank" @click="rank"></i>
	</m-header>
	<div class="layout">
	  <div class="top paddingWing">
		<!-- <van-row type="flex" justify="space-between">
		  <van-col span="8"><div class="textCenter">总分：{{score}}</div></van-col>
		  <van-col span="8"><div class="textCenter"><van-button round type="primary" @click="init" size="normal">开始新的游戏</van-button></div></van-col>
		  <van-col span="8"><div class="textRight"><van-button round type="warning" @click="end" size="normal"结算总分</van-button></div></van-col>
		</van-row> -->
		<span class="score">总分：{{score}}</span>
		<!-- <van-button round type="primary" @click="init" size="normal">开始新的游戏</van-button>
		<van-button round type="warning" @click="end" size="normal"结算总分</van-button> -->
		<button class="bg_green" @click="init">开始挑战</button>
		<button class="bg_yellow" @click="end">结算总分</button>
	  </div>
	</div>
	<div class="layout">
		<div class="all-container">
		  <div class="background">
		    <span v-for="list in 16"></span>
		  </div>
		  <div class="container">
		    <span
		      class="list"
		      v-for="(e,index) in rocks"
		      v-if="e"
		      :key="index"
		      :style="`
		        zIndex: ${e?e.num:0};
		        transform: translate(${cssTransition(e)});
		      `">
		      <span
		        class="inner"
		        :id="`r${e&&e.id}`"
		        :style="`backgroundColor: ${e ? e.color : ''}`">
		        {{e? e.num:''}}
		      </span>
		    </span>
		  </div>
		</div>
	</div>
	<div class="tip4model3">
	    玩法：<br>
	    1.在方块中上下左右滑动即可。<br>
	    2.每滑动一次方块即会产生新的一个数字为2的小方块。<br>
	    3.两个相同的数字方块碰撞在一起即会融合且相加。<br>
	    4.挑战该游戏需花0.1个钻石/次，每次挑战总分达到3万分可获得0.12个钻石奖励。<br>
	    5.每人每天最多挑战1次。<br>
	</div>
	<!-- <button @click="gamePopOutMineral">扣矿石</button> -->
	<van-dialog v-model="showRankBox" title="每日排行版" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
		<div class="placeholderLine10"></div>
		<div class="paddingWing">
			<div v-if="rankList.length==0" class="textCenter">今日暂无记录</div>
			<div v-for="(item,index) in rankList" :key="index">
				<van-row type="flex" justify="space-between">
				  <van-col span="2"><div class="textCenter f-11">{{index+1}}</div></van-col>
				  <van-col span="9"><div class="textCenter f-12">{{item.nickName}}</div></van-col>
				  <van-col span="5"><div class="textRight f-14">{{item.score}}分</div></van-col>
				  <van-col span="8"><div class="textRight f-11">{{getHMSTime(item.createTime)}}</div></van-col>
				</van-row>
				<div class="placeholderLine"></div>
			</div>
			<!-- <div class="rankLine" v-for="item in rankList" :key="index">第{{item.rank}}名 {{item.nickName}} {{item.score}}分</div> -->
		</div>
		<div class="placeholderLine20"></div>
	</van-dialog>
  </div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import { Toast,Dialog } from 'vant';
  const pointSort = property => (firstRocks, secondRocks) => {
    const firstPoint = firstRocks[property];
    const secondPoint = secondRocks[property];
    return firstPoint < secondPoint ? -1 : 1;
  };
  //const dely = ms => new Promise(res => setTimeout(res, ms));
  export default {
	  components: {
	  	mHeader
	  },
    data() {
      return {
		showRankBox:false,
        msg:'',
        score:0,
        rocks: [],
        color: {
          2: "#eee4da",
          4: "#edcf72",
          8: "#f2b179",
          16: "#55ff00",
          32: "#f67c5f",
          64: "#00557f",
          128: "#be433e",
          256: "#00aa00",
          512: "#0444BF",
          1024: "#00007f",
          2048: "#282726",
          4096: "#280b21",
          8192: "#55007f"
        },
        directX: 30,
		rankList:[],
		currentPage:1,
		pageSize:20,
		userInfo:'',
		
      };
    },
    mounted() {
		let _this = this;
		//获取user_id
		let userInfo = localStorage.getItem("_USERINFO_");
		/* alert("userInfo:" + userInfo); */
		if(userInfo){
			_this.userInfo = JSON.parse(userInfo);
			if(_this.userInfo.accountStatus==1){
				//退出登录
				_this.logout();
			}
		}else{
			localStorage.removeItem('_USERINFO_');
			//_this.$cookies.remove('token');
			_this.$toast(_this.$api.loginAgainTipText);
			_this.$router.replace('/login');
			/* return; */
		}
      window.app = this;
      //this.init();
      document.addEventListener("keydown", e => {
        switch (e.key.toLocaleUpperCase()){
          case "ARROWRIGHT":
          case 'D':
            this.turn('right');
            break;
          case "ARROWLEFT":
          case 'A':
            this.turn('left');
            break;
          case "ARROWDOWN":
          case 'S':
            this.turn('down');
            break;
          case "ARROWUP":
          case 'W':
            this.turn('up');
            break;
        }
      });
      document.addEventListener('touchstart',(start)=>{
        const moveFunc = (move) => {
          move && move.preventDefault();
          const dx = move.touches[0].clientX - start.touches[0].clientX;
          const dy = move.touches[0].clientY - start.touches[0].clientY;
          if(dx>this.directX){
            this.turn('right');
            document.removeEventListener('touchmove',moveFunc)
          }else if(dx<-this.directX){
            this.turn('left');
            document.removeEventListener('touchmove',moveFunc)
          }else if(dy>this.directX){
            this.turn('down');
            document.removeEventListener('touchmove',moveFunc)
          }else if(dy<-this.directX){
            this.turn('up');
            document.removeEventListener('touchmove',moveFunc)
          }
        }
        document.addEventListener('touchmove',moveFunc)
        document.addEventListener('touchend',()=>{
          document.removeEventListener('touchmove',moveFunc)
        })
      })

    },
    methods: {
		back(){
			this.$router.go(-1);
		},
		gamePopOutMineral(){
			let _this = this;
			//获取游戏排名
			Toast.loading({
			  message: '加载中...',
			  forbidClick: true,
			  loadingType: 'spinner'
			});
			var params = {
				account: '13958776325',
				type: "pd"
			}
			_this.$ajax.ajax(_this.$api.gamePopOutMineral, 'GET', params, function(res) {
				// //console.log('res', res);
				if (res.code == _this.$api.CODE_OK) {
					_this.$toast(res.data);
				}else{
					_this.$toast(res.message);
				}
			},function(){
				Toast.clear();
			})
		},
		getHMSTime(value){
			let _this = this;
			return value.split(' ')[1];
			//return _this.$utils.getTimeHMS(value);
		},
		rank(){
			let _this = this;
			//获取游戏排名
			Toast.loading({
			  message: '加载中...',
			  forbidClick: true,
			  loadingType: 'spinner'
			});
			var params = {
				pageNo: _this.currentPage,
				pageSize: _this.pageSize,
				gameName: "1024"
			}
			_this.$ajax.ajax(_this.$api.getAssistGameRankList, 'GET', params, function(res) {
				// //console.log('res', res);
				if (res.code == _this.$api.CODE_OK) {
					_this.rankList = res.data.list;
					_this.showRankBox = true;
					/* let list = res.data.list;
					_this.rankList = _this.$utils.deteleObject(list); */
				}else{
					_this.$toast(res.message);
				}
			},function(){
				Toast.clear();
			})
		},
      isMobile() {
        return window.navigator.userAgent.match(/Mobile/)
      },
      cssTransition(e) {
        if(this.isMobile()){
          return `${(e?e.x:0) * 23.5}vw, ${(e?e.y:0) * 23.5}vw`
        }else {
          return `${(e?e.x:0) * 120}px, ${(e?e.y:0) * 120}px`
        }
      },
      //初始化所有记录块
      init(){
		  let _this = this;
		  Dialog.confirm({
		    title: '确认信息',
		    confirmButtonText:'确定',
		    message: '挑战该游戏需花0.1个钻石/次，您是否确认开始挑战该游戏？'
		  }).then(() => {
		    // on close
			Toast.loading({
			  message: '...',
			  forbidClick: true,
			  loadingType: 'spinner'
			});
			_this.$ajax.ajax(_this.$api.addTicketRecord42048Start, 'POST', null, function(res) {
				// //console.log('res', res);
				if (res.code == _this.$api.CODE_OK) {
					if(res.data==1){
						_this.score = 0;
						_this.initRocks();
					}
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
				Toast.clear();
			})
		  });
      },
	  end(){
		  let _this = this;
		  let params = {
			/* userInfo:_this.userInfo.userId, */
		  	gameName: "1024",
		  	score:_this.score
		  }
		  Toast.loading({
		    message: '结算中...',
		    forbidClick: true,
		    loadingType: 'spinner'
		  });
		  _this.$ajax.ajax(_this.$api.insertGameRankRecord, 'POST', params, function(res) {
		  	// //console.log('res', res);
		  	if (res.code == _this.$api.CODE_OK) {
		  		if(res.data==1){
					//_this.$toast("保存成功");
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  // on close
					  /* _this.$cookies.set("tab_name_book", 'ticket', _this.$api.cookiesTime)
					  _this.$router.push('/myBook'); */
					  _this.back()
					});
					//_this.init();
				}
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
			  Toast.clear();
		  })
	  },
      //初始化数字块
      initRocks(){
        this.rocks = [];
        this.add();
      },
      //生成2/4数字(4出现的概率为10%)
      random24() {
        return Math.random()>0.9 ? 4 : 2;
      },
      //生成0/1/2/3数字做为坐标
      random0123() {
        return ~~(Math.random() * 4);
      },

      /**
       * 创建一个不存在数字块
       * return rock
       */
      createRock() {
        const num = this.random24();
        const result = {
          x: this.random0123(),
          y: this.random0123(),
          num: num,
          id: this.rocks.length + 1,
          color: this.color[num]
        };
        const _isExist = this.getRockByPoint({
          x: result.x,
          y: result.y
        });
        if (_isExist){
          return this.createRock();
        } else {
          return result;
        }
      },
      /**
       * 是否游戏失败
       * return true失败，反之没有结束
       */
      isGameOver() {
        const result = this.isFull() && this.rocks
            .filter(e=>e && (e.x!==3 || e.y !==3))
            .find(e=>{
              const nextX = this.getRockByPoint({x:e.x+1, y:e.y});
              const nextY = this.getRockByPoint({x:e.x, y:e.y+1});
              return (e.num === (nextX&&nextX.num) ||
                e.num === (nextY&&nextY.num));
            });
        return result === undefined;
      },

      /**
       * 游戏是否过关
       * return true过关，反之未过关
       */
      isSuccess(){
        const result = this.rocks
          .find(e=>{
            return e && e.num === 8192;
          });
        return result !== undefined;
      },

      /**
       * 罗盘是否已经填充满了
       */
      isFull() {
        return this.rocks.filter(e => e).length > 15;
      },

      /**
       * 随机添加1个数字块
       */
      add(){
        if(this.isFull()) {
          return false;
        }else {
          const rock = this.createRock();
          this.rocks.push(rock);
        }
      },
      /**
       * 通过坐标获取数字块
       * @param x
       * @param y
       * @returns {undefined|T|T}
       */
      getRockByPoint({ x, y }) {
        return this.rocks
          .filter(rock => rock)
          .find(rock => rock.x === x && rock.y === y);
      },
      getIndex(id) {
        return this.rocks.findIndex(rock => rock && rock.id === id);
      },

      handleDirect(direct) {
        if(direct === 'right'){
          return {
            handleArr: arr => arr
              .filter(e => e && e.x !== 3)
              .sort(pointSort("x"))
              .reverse(),
            handleCondition: e => e.x < 3,
            next: e =>({ x: e.x + 1, y: e.y }),
            handleMove: e => e.x++
          }
        } else if(direct === 'left'){
          return {
            handleArr: arr => arr
              .filter(e => e && e.x !== 0)
              .sort(pointSort("x")),
            handleCondition: (e) => e.x > 0,
            next: (e)=>({ x: e.x - 1, y: e.y }),
            handleMove(e){e.x--}
          }
        } else if(direct === 'up'){
          return {
            handleArr: arr => arr
              .filter(e => e && e.y !== 0)
              .sort(pointSort("y")),
            handleCondition: (e) => e.y > 0,
            next: (e)=>({ x: e.x, y: e.y - 1 }),
            handleMove(e){e.y--}
          }
        } else if(direct === 'down'){
          return {
            handleArr: arr => arr
              .filter(e => e && e.y !== 3)
              .sort(pointSort("y"))
              .reverse(),
            handleCondition: (e) => e.y < 3,
            next: (e)=>({ x: e.x, y: e.y + 1 }),
            handleMove(e) {e.y++}
          }
        }
      },
      // 移动
      turn(direct) {
        this.rocks.forEach(e => e&&(e.canCalc = true));
        Promise.all(
          this.handleDirect(direct).handleArr(this.rocks)
            .filter(rock => rock)
            .map(async e => {
              var flag = this.calcAxis(e,direct);
              return flag;
            })
        ).then(res => {
          if (res.indexOf(true) > -1) {
            if(this.isSuccess()){
              this.$message.success('你真牛逼，你赢了，我服了');
              return;
            }else {
              this.add();
            }
          } else {
            if(this.isGameOver()){
              this.$message.error('游戏结束请重新开始');
              return;
            }else if(this.isSuccess()){
              this.$message.success('你真牛逼，你赢了，我服了');
              return;
            }
          }
          setTimeout(() => {
          }, 10);
        });
      },
      /**
       * 合并数字块时添加移动样式
       * @param next
       */
      mergeNumericBlockAddStyle(next){
        const nextDom = document.querySelector(`#r${next.id}`);
        nextDom.animate([
          { transform: 'scale(0.95)' },
          { transform: 'scale(1.3)' },
          { transform: 'scale(1.03)' },
          { transform: 'scale(1)' }
        ], {
          duration: 200,
        });
      },
      // 处理移动距离的函数
      calcAxis(e,direct) {
        return new Promise(async(resolve, reject) => {
          let next = this.getRockByPoint(this.handleDirect(direct).next(e));
          if (next && next.num !== e.num) {
            resolve(false);
          } else if (next && next.canCalc && next.num === e.num) {
            //进行数字块的移动
            this.handleDirect(direct).handleMove(e);
            next.num*=2;
            this.score+=e.num;
            next.canCalc = false;
            next.color=this.color[next.num];
            this.mergeNumericBlockAddStyle(next);
            //await dely(200);
            this.rocks.splice(this.getIndex(e.id), 1, null);
            resolve(true);
          } else if (next === undefined) {
            if (this.handleDirect(direct).handleCondition(e)) {
              this.handleDirect(direct).handleMove(e);
              this.calcAxis(e,direct);
            }
            resolve(true);
          }
        });
      }
    }
  };
</script>
