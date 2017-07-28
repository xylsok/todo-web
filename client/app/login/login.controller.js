'use strict';
(function () {
	function Controller($scope, $http, Auth, $state) {
		$scope.user = {};
		$scope.login = {
			msg: '',
			_login: function () {
				$http.post('/api/user/login', $scope.user).success(function (x) {
					if (x) {
						Auth.setUser(x);
						$state.go('main');
					} else {
						$scope.login.msg = '用户名或密码错误！';
						alert($scope.login.msg);
					}
				}).error(function (e) {
					$scope.login.msg = '服务器发生错误。';
					alert($scope.login.msg);
				})
			},
			_login2: function () {
				$scope.user.userName = 'ceshi';
				$scope.user.nickName = '测试';
				$scope.user.password = '111111';
				$scope.login._login();
			}
		}
	}

	angular.module('todoWebApp')
		.controller('LoingController', Controller);
})();
