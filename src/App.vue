<template>
  <div id="app" ref="app">
	<!-- <transition name="van-fade">
		<keep-alive include="dealRecord">
			<router-view/>
		</keep-alive>
	</transition> -->
	<transition name="van-fade">
		<!-- <keep-alive>
			<router-view v-if="$route.meta.keepAlive==true"></router-view>
		</keep-alive> -->
		<!-- <keep-alive v-if="$route.meta.keepAlive==true">
			<router-view></router-view>
		</keep-alive>
		<router-view v-if="$route.meta.keepAlive==false"></router-view> -->
		<keep-alive include="login,register,deal,mill,home,millRecord,voteList,dealRecord,millRecord,raiseApplyList">
			<router-view></router-view>
		</keep-alive>
	</transition>
  </div>
</template>
<script>
export default {
    name: 'app',
	created() {
		let _this = this;
		if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
			_this.handleFontSize();
		} else {
			document.addEventListener("WeixinJSBridgeReady", function(){
				// 设置网页字体为默认大小
				WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
				// 重写设置网页字体大小的事件
				WeixinJSBridge.on('menu:setfont', function() {
				    WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
				});
			}, false);
		}
	},
	mounted(){
	},
	methods:{
		handleFontSize() {
		    // 设置网页字体为默认大小
		    WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
		    // 重写设置网页字体大小的事件
		    WeixinJSBridge.on('menu:setfont', function() {
		        WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
		    });
		}
	}
}
</script>
<style lang="scss">
@import '~@/assets/scss/variable.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: $main-bg-color;
}
/* body * { max-height: 9999px; } */
/* .van-pull-refresh,.van-pull-refresh__track,.van-list{
	min-height: 100 !important;
} */
.van-list__finished-text{
	background-color: transparent !important;
}
.ql-indent-1{
	text-indent: 2em;
}
[class*=van-hairline]::after {
 border: 1px solid transparent !important;
}
.van-sticky--fixed{
	top: $header-height !important;
}
.van-dialog__message{
	padding: 24px 12px !important;
}
.welcomeText{
	font-size: 14px;
	line-height: 1.3em;
	letter-spacing: 1px;
}
.logoBox{
	
	img{
		width: 100%;
	}
}
b{font-weight: bold;}
.inline{display: inline-block;}
.clearBoth{clear: both;}
.cursor{cursor: pointer;}
.hidden{overflow: hidden;}
.left{float: left;}
.right{float: right;}
.clear{clear: both;}
.block{display: block;}
.textCenter{text-align: center;}
.textRight{text-align: right;}
.textBold{font-weight: bold;}
.title{font-weight: bold;}
.textLeft{text-align: left !important;}
.textRight{text-align: right;}
.borderBottom{border-bottom: 1px solid $bottomLineColor;}
.unSelect{user-select: none;}
.justify{text-align: justify;}
.em13{line-height: 1.3em;}
.red{color: red;}
.ellipsis{
  overflow: hidden;  /*溢出隐藏*/
  text-overflow: ellipsis; /*以省略号...显示*/
  white-space: nowrap;  /*强制不换行*/
}
.flexCenter{
	align-content: center;
	align-items: center;
	align-self: center;
	justify-content: center;
	alignment-baseline: central;
	vertical-align: middle;
}
.textJustify{
	text-align: justify;
}
.mlBox{margin-left:10px;}
.line1pxbgcolor{height: 1px;background-color: $bottomLineColor;}
.line2pxbgcolor{height: 2px;background-color: #009af3;}
.placeholderLine{height: 4px;}
.placeholderLine1{height: 1px;}
.placeholderLine2{height: 2px;}
.placeholderLine3{height: 3px;}
.placeholderLine4{height: 4px;}
.placeholderLine6{height: 6px;}
.placeholderLine8{height: 8px;}
.placeholderLine10{height: 10px;}
.placeholderLine20{height: 20px;}
.placeholderLine40{height: 40px;}
.placeholderLineBGC{background-color: $bottomLineColor;}
.underline{text-decoration: underline;}
.paddingWing{
	padding-left: $boxPadding2;
	padding-right: $boxPadding2;
}
.paddingAll{
	padding: $boxPadding2;
}
.padding4Text{
	padding: 2px;
}
.width80{width: 80px !important;}.width100{width: 100px !important;}.width120{width: 120px !important;}.width140{width: 140px !important;}.width160{width: 160px !important;}.width200 {width: 200px !important;}.width220{width: 220px;}.width240{width: 240px;}.width260{width: 260px;}.width280{width: 280px;}.width300 {width: 300px !important;}.width400 {width: 400px !important;}
.margint{margin-top: 6px;}.marginb{margin-bottom: 6px;}
.margL6{margin-left: 6;}.margL10{margin-left: 10;}
.margR2{margin-right: 2px;}.margR5{margin-right: 5px;}.margR20{margin-right: 20px;}
.margT3{margin-top: 3px;}.margT6{margin-top: 6px;}.margT8{margin-top: 8px;}.margT10{margin-top: 10px;}.margT16{margin-top: 16px;}.margT20{margin-top: 20px;}.margTHeader{margin-top: $header-height + 10px;}
.margL1{margin-left: 1px;}margL4{margin-left: 4px;}.margL10{margin-left: 10px;}.margL12{margin-left: 12px;}.margL20{margin-left: 20px;}.margL40{margin-left: 40px;}
.margL100{margin-left: 100px;}.margL200{margin-left: 200px;}
.paddingT20{padding-top: 30px;}
.blueLight{color: #00e3e3;}
.brown{color: #ba7c00;}
.white{color: white;}
.mainAdornColor{color: $main-adorn-color;}
.blue{color: #409EFF;}
.green{color: green;}
.gray{color: gray;}
.grayc7c7c7{color: #c7c7c7;}
.gray646464{color: #646464;}
.yellow{color: $main-adorn-color;}
.warn_text{color: rgb(211, 0, 0);}
.red2{color: rgb(255, 135, 65);}
.green_text{color: #07961f;}
.bg_green{background-color: #07961f;}
.bg_yellow{background-color: rgb(255, 135, 65);}
.bg_black{background-color: #199E00;}
.inline{display: inline-block;}
.lineHeight{line-height: 1.3em;}
.f-10{font-size: 10px !important;}
.f-11{font-size: 11px !important;}
.f-12{font-size: 12px !important;}
.f-13{font-size: 13px !important;}
.f-14{font-size: 14px !important;}
.f-15{font-size: 15px !important;}
.f-16{font-size: 16px !important;}
.f-18{font-size: 18px !important;}
.f-20{font-size: 20px !important;}
.flex-1{flex: 1;}
.letterSpacing{letter-spacing: 1px;}
.textIndent{text-indent: 2em;}


.tip4model{
	padding: $boxPadding2;
	color: $main-adorn-color;
	font-size: 0.75rem;
	line-height: 1.5em;
	letter-spacing: 1px;
	text-indent: 2em;
}

.tip4model1{
	padding: $boxPadding2;
	color: $main-adorn-color;
	font-size: 0.75rem;
	line-height: 1.2em;
	letter-spacing: 1px;
}

.tip4model4Green{
	padding: $boxPadding2;
	color: green;
	font-size: 0.75rem;
	line-height: 1.2em;
	letter-spacing: 1px;
}

.tip4model2{
	padding: $boxPadding2;
	color: $grayDarker;
	font-size: 0.75rem;
	line-height: 1.4em;
	letter-spacing: 1px;
}
.tip4modelNew{
	color: $grayDarker;
	font-size: 0.75rem;
	line-height: 1.4em;
	letter-spacing: 1px;
}
.tip4model3{
	color: $main-adorn-color;
	font-size: 0.75rem;
	line-height: 1.4em;
	letter-spacing: 1px;
}
.tip4model3RedText{
	color: red;
	font-size: 0.75rem;
	line-height: 1.4em;
	letter-spacing: 1px;
}

.tip4modelTextCenter{
	color: $main-adorn-color;
	font-size: 0.75rem;
	line-height: 1.4em;
	letter-spacing: 1px;
	text-align: center;
}

.tip4model4{
	color: $grayDarker;
	font-size: 0.75rem;
	line-height: 1.4em;
	letter-spacing: 1px;
}

.tip4model5{
	color: $main-bg-tip-color;
	font-size: 0.75rem;
	line-height: 1.4em;
	letter-spacing: 1px;
}

.tip4modelRedText{
	color: red;
	font-size: 0.75rem;
	line-height: 1.4em;
	letter-spacing: 1px;
}
	
.van-pagination{
	.van-pagination__item--active{
		    color: $main-box-fh-text-color !important;
		    background-color: $bottomLineColor !important;
	}
	.van-pagination__item {
		color: $bottomLineColor;
		// background-color: $main-box-fh-bg-color;
	}
	.van-pagination__page-desc{
		color: $bottomLineColor !important;
	}
	[class*=van-hairline]::after {
		border: 1px solid transparent !important;
	}
}
.van-cell__value, .van-cell__value--alone, .van-field__control{
	color: #323232 !important;
}
[class*=van-hairline]::after {
    border: 1px solid transparent !important;
}
.van-cell--required::before {
    // position: absolute;
    // left: 8px;
    // color: #ee0a24;
    // font-size: 14px;
    // content: '*';
    line-height: 28px;
}
.helpList {
	width: 100%;
	padding: 6px 6px;
	box-sizing: border-box;
	.item {
		width: 100%;
		border: 1px solid $bottomLineColor;
		letter-spacing: 1px;
		background-color: $main-box-color;
		margin-bottom: 4px;
		border-radius: 4px;
		overflow: hidden;
		&::last-child{
			margin-bottom: 0px;
		}
		.imgBox{
			width: 100%;
			img{
				width: 100%;
			}
		}
		.textBox{
			padding: 4px 10px;
			.freeGet{color: $main-adorn-color !important;}
			.title{font-size: $fs-title;font-weight: bold;color: $mainTextColor !important;}
			.line{
				overflow: hidden;clear: both;
				&.content{font-size: $fs-content;line-height: 1.3em;color: $mainTextColor !important;}
			}
			
		}
	}
}
.myInfo{
	.update1{
		.van-field__label{
			width: 70px !important;
		}
	}
	.update2{
		.van-field__label{
			width: 78px !important;
		}
	}
}
.sureAppointBtnBox{
	padding: $boxPadding2;
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
		z-index: 1001;
		p{
			position: absolute;
			color: white;
			font-size: 28px;
			text-align: center;
			top:50%;
			width: 100%;
			line-height: 1.3em;
			transform: translateY(-50%);
			-webkit-transform: translateY(-50%);
			span{
				color:#5FD6FF;
			}
		}
		.img{
			position: absolute;
			display: block;
			right: 30px;
			top:10px;
		}
	}
</style>
