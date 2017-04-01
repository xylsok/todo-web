'use strict';
(function() {

function MainController($scope, $http,$resource) {
	$scope.login={
		loginState:true,
		_show:function(){
			$scope.login.loginState=!$scope.login.loginState;
		}
	};
	$scope.user={};
	$scope.reg=function(){
		$scope.post('/api/user/add',$scope.user).success(function(){

		})
	}

}
angular.module('lawqWebApp')
  .controller('LoingController', MainController);

})();
