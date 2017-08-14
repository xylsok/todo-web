'use strict';
(function () {
	function MainController($scope, $http, $state, Auth, ModalEditor) {
		$scope.user = Auth.getUser();
		if (!$scope.user) {
			$state.go('login');
		}
		$scope.shwoMode={
			sxx:true
		}
		$scope.core = {
			memo:{},
			memoAll1: [],
			memoAll2: [],
			memoAll3: [],
			memoAll4: [],
			_add: function (o) {
				ModalEditor.new({id:'',level:o}).then(
					function (success, error) {
						if (success) {
							$state.go('main', null, {reload: true});
						}
					});
			},
			_init: function () {
				$http.get('/api/memo/get?username='+$scope.user.userName).success(function (data) {
					data.forEach(function (x) {
						if (x.level == 1) {
							$scope.core.memoAll1.push(x);
						}
						if (x.level == 2) {
							$scope.core.memoAll2.push(x);
						}
						if (x.level == 3) {
							$scope.core.memoAll3.push(x);
						}
						if (x.level == 4) {
							$scope.core.memoAll4.push(x);
						}
					})
					$scope.core.memo=_.groupBy(data,function (x) {
						return x.pname;
					})
				})
			},
			_eidt:function(s){
				ModalEditor.new({id: s.id}).then(
					function (success, error) {
						if (success) {
							$state.go('main', null, {reload: true});
						}
					});
			},
			_pnameAdd:function(s){
				ModalEditor.new({pname: s}).then(
					function (success, error) {
						if (success) {
							$state.go('main', null, {reload: true});
						}
					});
			}
		}
		$scope.foo='';
		$scope.core._init();
	}

	angular.module('todoWebApp')
		.controller('MainController', MainController);
})();
