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
			}
		}
	}

	angular.module('todoWebApp')
		.controller('LoingController', MainController);
})();
