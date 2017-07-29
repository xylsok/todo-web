'use strict';
(function () {
	function Controller($scope,$stateParams, $state, $resource, $http, Auth) {
		$http.get('/api/memo/get/' + $stateParams.id).success(function (x) {
			$scope.memo = x;
		})
	}

	angular.module('todoWebApp')
		.controller('DetailController', Controller);
})();
