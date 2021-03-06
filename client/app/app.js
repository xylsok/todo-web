'use strict';
angular.module('todoWebApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ui.router',
	'ui.bootstrap',
	"com.2fdevs.videogular",
	"com.2fdevs.videogular.plugins.controls",
	"com.2fdevs.videogular.plugins.overlayplay",
	"com.2fdevs.videogular.plugins.poster",
	"com.2fdevs.videogular.plugins.buffering"
])
	.config(function ($stateProvider,$sceDelegateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
		$httpProvider.interceptors.push('authInterceptor'); // 设置拦截器
		$urlRouterProvider
			.otherwise('/');
		$locationProvider.html5Mode(true);
		$sceDelegateProvider.resourceUrlWhitelist([
			// Allow same origin resource loads.
			'self',
			// Allow loading from our assets domain. Notice the difference between * and **.
			'http://gdfiles.oss-cn-beijing.aliyuncs.com/cloud/**',
			'http://123.56.76.155:8080/**',
			'http://123.56.76.155/**',
			'http://218.246.35.14/**']);
	})
	.factory('authInterceptor', function ($rootScope, $q, $cookies) {
		var state;
		return {
			// Add authorization token to headers
			request: function (config) {
				config.headers = config.headers || {};
				var token = $cookies.get('token');
				if (token) {
					config.headers.Authorization = 'Bearer ' + $cookies.get('token');
				}
				return config;
			},
			// Intercept 401s and redirect you to login
			responseError: function (response) {
				if (response.status === 401) {
				}
			}
		};
	})
	.run(function ($rootScope, $window, $http, Auth) {
		$window.addEventListener('message', function (event) {
			console.log('接收到消息: ', event.data);
			var auth_token = event.data.token;
			var logout = event.data.logout;
			if (logout) {
				console.log('确定为退出消息');
				Auth.logout();
				$window.location.href = 'http://auth.gddata.net/';
			}
			else if (auth_token && auth_token.length > 20) {
				console.log('确定为登录消息');
				$http.post('/authapi/auth/login', {token: auth_token, to: Auth.getClientId()})
					.success(function (data) {
						if (data && data.token && data.role >= 65536) {
							Auth.setUser(data);
							Auth.setToken(data.token);
							$window.location.reload();
						}
						else {
							if (!data) {
								console.log('未取得用户');
							}
							else if (!data.token) {
								console.log('用户信息不正确,没有 token');
							}
							else if (data.role < 65536) {
								console.log('权限不够(' + data.role + '低于著录员),不能登录');
							}
							//Auth.gotoLogin();
							Auth.logout();
						}
					})
					.error(function (e) {
						console.log(e);
					});
			}
			else {
				console.log('登录消息内容不正确, 不能登录, ', event.data);
				Auth.logout();
			}
		});
		// Redirect to login if route requires auth and the user is not logged in
		$rootScope.$on('$stateChangeStart', function (event, next) {
			//if (next.authenticate) {
			//}
		});
	});
