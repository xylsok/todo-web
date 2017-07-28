/**
 * Created by cassandra on 16/8/5.
 */
'use strict';
angular.module('todoWebApp')
	.factory('ModalEditor', function Mail($http, $cookies, $cookieStore, $q, $timeout, $state, $uibModal) {
		return {
			new: function (args) {
				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: 'app/main/edit/modal.service.html',
					controller: 'ModalEditorController',
					backdrop: 'static',
					size: 'md user-editor',
					resolve: {
						args: function () {
							return args;
						}
					}
				});
				return modalInstance.result;
			}
		};
	});
angular.module('todoWebApp').controller('ModalEditorController', function ($scope, Auth, $http, $uibModalInstance, args) {
	$scope.memo = {
		level: ''
	};
	if (args && args.id) {
		$http.get('/api/memo/get/' + args.id).success(function (x) {
			$scope.memo = x;
		})
	} else {
		$scope.memo.level = args.level;
	}
	$scope.msg = '';
	var user = Auth.getUser();
	$scope.core = {
		_save: function () {
			$scope.memo.del = 0;
			$scope.memo.isFinish = 0;
			$scope.memo.userName = user.userName;
			$http.post('/api/memo/add', $scope.memo).success(function () {
				$scope.callback();
			}).error(function (e) {
				$scope.msg = 'ERROR: ' + e;
			})
		},
		_updateTag: function () {
			$scope.memo.isFinish = 1;
			$scope.memo.closeTime=new Date();
			$scope.core._edit();
		},
		_del: function () {
			$scope.memo.del = 1;
			$scope.core._edit();
		},
		_edit: function () {
			$http.put('/api/memo/update', $scope.memo).success(function () {
				$scope.callback();
			}).error(function (e) {
				$scope.msg = 'ERROR: ' + e;
			})
		}
	}
	$scope.callback = function (o) {
		$uibModalInstance.close("sss");
	};
	$scope.exitback = function (o) {
		$uibModalInstance.dismiss('cancel');
	};
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
})
;
