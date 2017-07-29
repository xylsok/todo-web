'use strict';
(function () {
	function Controller($scope, $http, $state, Auth) {
		$scope.user = Auth.getUser();
		if (!$scope.user) {
			$state.go('login');
		}
		$scope.note = {};
		$scope.core = {
			del: false,
			addBtn: false,
			notes: [],
			_init: function () {
				$http.get('/api/note/get/' + $scope.user.userName).success(function (x) {
					$scope.core.notes = x;
				})
			},
			_add: function () {
				$scope.note.userName = $scope.user.userName;
				$http.post('/api/note/add', $scope.note).success(function (x) {
					$scope.core.addBtn = false;
					$scope.core._init();
					$scope.note = {};
				})
			},
			_del: function (x) {
				$http.delete('/api/note/del?id=' + x).success(function () {
					_.remove($scope.core.notes, function (y) {
						return y.id === x;
					})
				})
			}
		}
		$scope.core._init();
	}

	angular.module('todoWebApp')
		.controller('NoteController', Controller);
})();
