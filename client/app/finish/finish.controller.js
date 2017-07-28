'use strict';
(function () {
	function Controller($scope, $state, $resource, $http, Auth) {
		var user = Auth.getUser();
		if (user && user.userName) {
			$scope.finish = $resource('/api/memo/getfinish?username=' + user.userName).query();
		} else {
			$state.go('login');
		}
		$scope.delMemo = function (s) {
			$http.delete('/api/memo/delete/'+ s.id).success(function () {
				_.remove($scope.finish,function (y) {
					return y.id == s.id;
				})
			})
		}
	}

	angular.module('todoWebApp')
		.controller('FinishController', Controller);
})();
