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
angular.module('todoWebApp').controller('ModalEditorController', function ($scope, $http, $uibModalInstance, args) {
	$scope.memo = {
		level: args
	};
	$scope.msg = '';
	$scope.core = {
		_save: function () {
			$scope.memo.del=0;
			$http.post('/api/memo/add', $scope.memo).success(function () {
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
