'use strict';
angular.module('todoWebApp')
	.controller('NavbarCtrl', function ($scope, $http, $rootScope, Auth) {
		$scope.menu = [
			{
				'title': '待办',
				'state': 'main'
			},
			{
				'title': '已办',
				'state': 'finish'
			},
			{
				'title': '便签',
				'state': 'note'
			}
		];
		$scope.isCollapsed = true;
		$scope.user = Auth.getUser();
		$scope.logout = function () {
			Auth.logout();
			window.location.href = '/login';
		};

	});
