import qs from 'qs';
import router from '@/router.js';
import VueCookies from 'vue-cookies';
import { Dialog } from 'vant';
let tip4Login = '登录已过期,请重新登录再试';
let tip4Refresh = '当前网络信号不稳定,请稍后再试';

export default {
	getJson(url, doSuccess) {
		$.getJSON(url, function(res) {
			if (typeof doSuccess == "function") {
				doSuccess(res);
			}
		})
	},
	ajax(url, method, params, doSuccess, doComplete) {
		let _this = this;
		let queryAjax = $.ajax({
			url: url,
			type: method,
			// processData: true,
			// contentType: 'application/json',
			// dataType:'json',
			// data : JSON.stringify(params), 
			data: method == 'GET' ? qs.stringify(params) : qs.stringify(params),
			beforeSend: function(XMLHttpRequest) {
				// XMLHttpRequest.setRequestHeader("token", localStorage.getItem('token'));
				// that.progressDialog = true;
				let token = VueCookies.get('token');
				// //console.log("cookie token in complete", token);
				if(token){
					 XMLHttpRequest.setRequestHeader('token', token);
				}else{
					// alert("登录状态已过期,请重新登录");
					// router.replace('login');
				}
				// localStorage.getItem('token') ? XMLHttpRequest.setRequestHeader('token', localStorage.getItem('token')) : '';
			},
			success: function(res) {
				if (typeof res == 'string') {
					res = JSON.parse(res);
				}
				if (typeof doSuccess == "function") {
					doSuccess(res);
				}
			},
			complete: function(XMLHttpRequest,status) {
				//console.log('status',status)
				//console.log('complete_XMLHttpRequest',XMLHttpRequest.responseJSON)
				if(XMLHttpRequest.responseJSON&&XMLHttpRequest.responseJSON.code==500) {
					Dialog.alert({
						title: '温馨提示',
						message: XMLHttpRequest.responseJSON.message
					}).then(() => {
						if(XMLHttpRequest.responseJSON.message=='登录已过期，请重新登录'){
							localStorage.removeItem('_USERINFO_');
							VueCookies.remove('userId');
							VueCookies.remove('token');
							VueCookies.remove('isRefreshDealInfo');
							VueCookies.remove('statistics');
							VueCookies.remove('haveDealPageInfo');
							VueCookies.remove('hasNoticeList4Swipe');
							router.replace('/login');
						}
					});
				}
				if(status=='timeout') {//超时,status还有success,error等值的情况
					//queryAjax.abort();
					Dialog.confirm({
					  title: '温馨提示',
					  message: tip4Refresh,
					  confirmButtonText:'刷新',
					  cancelButtonText:'取消'
					}).then(() => {
					  // on confirm
					  window.location.reload();
					}).catch(() => {
					  // on cancel
					});
				}
				if (typeof doComplete == "function") {
					doComplete(status);
				}
			}
		});
	},
	ajax4NotTime(url, method, params, doSuccess, doComplete) {
		let _this = this;
		$.ajax({
			url: url,
			type: method,
			/* timeout: 20000, */
			// processData: true,
			// contentType: 'application/json',
			// dataType:'json',
			// data : JSON.stringify(params), 
			data: method == 'GET' ? qs.stringify(params) : qs.stringify(params),
			beforeSend: function(XMLHttpRequest) {
				// XMLHttpRequest.setRequestHeader("token", localStorage.getItem('token'));
				// that.progressDialog = true;
				let token = VueCookies.get('token');
				// //console.log("cookie token in complete", token);
				if(token){
					 XMLHttpRequest.setRequestHeader('token', token);
				}else{
					// alert("登录状态已过期,请重新登录");
					// router.replace('login');
				}
				// localStorage.getItem('token') ? XMLHttpRequest.setRequestHeader('token', localStorage.getItem('token')) : '';
			},
			success: function(res) {
				if (typeof res == 'string') {
					res = JSON.parse(res);
				}
				if (typeof doSuccess == "function") {
					doSuccess(res);
				}
			},
			complete: function(XMLHttpRequest,status) {
				//console.log('status',status)
				//console.log('complete_XMLHttpRequest',XMLHttpRequest.responseJSON)
				if(XMLHttpRequest.responseJSON&&XMLHttpRequest.responseJSON.code==500) {
					Dialog.alert({
						title: '温馨提示',
						message: XMLHttpRequest.responseJSON.message
					}).then(() => {
						if(XMLHttpRequest.responseJSON.message=='登录已过期，请重新登录'){
							localStorage.removeItem('_USERINFO_');
							VueCookies.remove('userId');
							VueCookies.remove('token');
							VueCookies.remove('isRefreshDealInfo');
							VueCookies.remove('statistics');
							VueCookies.remove('haveDealPageInfo');
							VueCookies.remove('hasNoticeList4Swipe');
							router.replace('/login');
						}
					});
				}
				if(status=='timeout') {//超时,status还有success,error等值的情况
					//queryAjax.abort();
					Dialog.confirm({
					  title: '温馨提示',
					  message: tip4Refresh,
					  confirmButtonText:'刷新',
					  cancelButtonText:'取消'
					}).then(() => {
					  // on confirm
					  window.location.reload();
					}).catch(() => {
					  // on cancel
					});
				}
				if (typeof doComplete == "function") {
					doComplete(status);
				}
			}
		});
	}
}
