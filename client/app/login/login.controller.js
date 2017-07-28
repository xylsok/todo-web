'use strict';
(function () {
	function MainController($scope, $http, Auth,$state) {
		$scope.user = {};
		$scope.login = {
			_login: function () {
				console.log($scope.user);
				$http.post('/api/user/login', $scope.user).success(function (x) {
					if (x) {
						x.ico='';
						Auth.setUser(x);
						$state.go('main');
					}
				})
			}
		}
	}

	angular.module('todoWebApp')
		.controller('LoingController', MainController);
})();
