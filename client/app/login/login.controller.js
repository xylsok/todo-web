'use strict';
(function() {

function MainController($scope, $http,$resource) {
	$scope.login={
		loginState:true,
		_show:function(){
			$scope.login.loginState=!$scope.login.loginState;
		}
	}
}
angular.module('lawqWebApp')
  .controller('LoingController', MainController);

})();
