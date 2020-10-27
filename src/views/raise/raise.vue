<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.raise{
		@include pageNoHeight4Scroll();
		background-color: $main-box-fh-bg-color !important;
		color: $main-box-fh-text-color;
		.van-list__finished-text{
			color:$main-box-fh-text-color;
		}
		.van-field__label{
			width: 66px !important;
		}
		.van-dialog{
			color: $mainTextColor !important;
		}
		.helpBox{
			position:relative;
			display: flex;
			padding: 0 $boxPadding2;
			box-sizing: border-box;
			align-items: center;
			height: 30px;
			line-height: 30px;
			.leftBox{
				flex: 0 0 24px;
				color: red;
				font-size: 1.2rem;
			}
			.centerBox{
			  flex: 1;
			  text-align: center;
			  font-size: 0.75rem;
			}
			.rightBox{
				flex: 0 0 24px;
				text-align: right;
				&.text{
					color: $main-adorn-color;
					font-size: 0.75rem;
				}
				&.icon{
					font-size: 11px;
				}
			}
		}
		.iconTextBox{
			display: flex;
			flex-direction: row;
			align-content: center;
			align-items: center;
			.leftIcon{
				flex: 0 0 20px;
				font-size: 20px;
				color: red;
			}
			.iconText{
				flex: 1;
				font-size: 16px;
				margin-left: 6px;
			}
			.rightBox{
				flex: 0 0 100px;
				float: right;
			}
		}
		.raiseHeader{
			padding:$boxPadding2 $boxPadding2;
		}
		$avatorHeight: 20px;
		.whoAreYou{
			display: flex;
			padding:$boxPadding2 $boxPadding2;
			flex-direction: row;
			align-content: center;
			align-items: center;
			justify-content: center;
			.avator{
				flex: 0 0 $avatorHeight;
			}
			.textInfo{
				flex: 1;
				font-size: 0.812rem;
				height: 1em;
				display: table-cell;
				.text1{font-weight: bold;}
				.text2{color: #e7e7e7;margin-left: 5px;}
			}
			.rightBox{
				flex: 0 0 80px;
				height: $avatorHeight;
				text-align: right;
			}
		}
		.content1{
			padding: 0 $boxPadding2;
			.title{
				font-size: 1.125rem;
				line-height: 1.375em;
			}
			.box{
				display: flex;
				background-color: inherit;
				padding:$boxPadding2 0;
				box-sizing:border-box !important;
			}
			.box2{
				margin-top: $marginTop2;
				text-align: center;
				.flexC{
					flex:1;
					.digit{
						font-size: 16px;
						color: $main-adorn-color;
					}
					.text{
						font-size: $fs-1;
						margin-top: 3px;
					}
				}
			}
		}
		.flex{
			display: flex;
			background-color: inherit;
			padding:$boxPadding2 0;
			box-sizing:border-box !important;
			flex-direction: row;
			align-content: center;
			align-items: center;
			justify-content: center;
			// color:$mainTextColor;
			.flexMedial{
				flex: 1;
			}
			.flexLeft{
				flex: 0 0 24px;
				.ticket{
					font-size: 1.5rem;
					color: $main-adorn-color;
				}
			}
			.flexCenter{
				flex: 1;
				font-size: 0.75rem;
				line-height: 1.3em;
				padding: 0 0.375rem;
			}
			.flexRight{
				flex: 0 0 1.25rem;
				.iconfont-i{
					color: $main-adorn-color;
				}
			}
		}
		.story,.materialProve{
			padding-left: $boxPadding2;
			padding-right: $boxPadding2;
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
				img{
					flex: 0 0 70px;
					width: 70px;
					height: 70px;
					padding: 3px;
					&::last-child{
						padding-right: 0;
					}
					&::first-child{
						padding-left: 0;
					}
				}
			}
		}
		.materialProve{
			.flexProveLeft{
				flex: 0 0 30px;
				.iconfont-pass{
					color: #DE0000;
					font-size: 28px;
				}
			}
			.proveText1{
				font-size: 11px;
				line-height: 1.2em;
				padding-left: 4px;
				justify-content:space-between;
			}
			.proveContent{
				color:$mainTextColor;
				padding: $boxPadding2;
				background-color: $main-box-color;
				.flex{
					padding-top: 0px !important;
				}
				.contentBox{
					.title2{
						font-size: 11px;
						padding-top: $boxPadding2;
					}
					.contentText1{
						margin-top: 8px;
						font-size: 11px;
						line-height: 1.2em;
						letter-spacing: 1px;
					}
				}
				.knowMore{
					font-size: 0.75rem;
					color: $main-adorn-color;
					margin-top: 10px;
				}
			}
			.proverList{
				margin-top: 12px;
				.proveLabel{
					font-size: 14px !important;
					span{
						color: $main-adorn-color;
					}
				}
				.iDo{
					flex: 0 0 70px;
					font-size: 12px !important;
					text-align: right;
					text-decoration: underline;
					color: $main-adorn-color;
				}
				.flexProveMore{
					flex: 0 0 50px;
					text-align: right;
					.iconfont-right-arrow{
						font-size: 30px;
					}
				}
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
	}
</style>

<template>
	<div class="raise">
		123
	</div>
</template>

<script>
	
</script>