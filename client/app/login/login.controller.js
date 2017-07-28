'use strict';
(function () {
	function MainController($scope, $http, Auth, $state) {
		$scope.user = {};
		$scope.login = {
			_login: function () {
				$http.post('/api/user/login', $scope.user).success(function (x) {
					if (x) {
						Auth.setUser(x);
						$state.go('main');
					}
				})
			},
			_login2:function(){
				$scope.user.userName='ceshi';
				$scope.user.nickName='测试';
				$scope.user.password='111111';
				$scope.login._login();
			}
		}
	}

	angular.module('todoWebApp')
		.controller('LoingController', MainController);
})();
