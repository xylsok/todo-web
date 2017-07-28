'use strict';
(function() {

function MainController($scope, $http,$state,Auth) {
	$scope.user = Auth.getUser();
	if(!$scope.user){
		$state.go('login');
	}
}
angular.module('todoWebApp')
  .controller('MainController', MainController);

})();
