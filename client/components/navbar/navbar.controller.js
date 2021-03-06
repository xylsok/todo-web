'use strict';
angular.module('todoWebApp')
	.controller('NavbarCtrl', function ($scope, $http,$state, $rootScope, Auth) {
		$scope.menu = [
			{
				'title': '待办',
				'state': 'main',
				'show':true
			},
			{
				'title': '已办',
				'state': 'finish',
				'show':true
			},
			{
				'title': '便签',
				'state': 'note',
				'show':true
			},{
				'title': '开发中',
				'state': 'test',
				'show':true
			},
			{
				'title': '详情',
				'state': 'detail',
				'show':$state.current.name=='detail'
			},{
				'title': '用户注册',
				'state': 'register',
				'show':$state.current.name=='register'
			}
		];
		$scope.isCollapsed = true;
		$scope.user = Auth.getUser();
		$scope.logout = function () {
			Auth.logout();
			window.location.href = '/login';
		};

	});
