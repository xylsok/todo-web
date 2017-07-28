'use strict';
angular.module('todoWebApp')
	.controller('NavbarCtrl', function ($scope, $rootScope, Auth) {
		$scope.menu = [
			{
				'title': '首页',
				'state': 'main'
			},
			{
				'title': '产品',
				'state': 'project'
			},
			{
				'title': '统计',
				'state': 'statistical'
			}
		];
		$scope.isCollapsed = true;
		$scope.user = Auth.getUser();
		$scope.clientId = Auth.getClientId();
		$scope.logout = function () {
			Auth.logout();
			$rootScope.createLogout();
		};
		//console.log($scope.user);
		if (!$scope.user) {
			// console.log('will login...');
			//$rootScope.createLogin();
		}
	});
