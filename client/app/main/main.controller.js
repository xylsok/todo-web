'use strict';
(function() {

function MainController($scope, $http,$state,Auth) {
	$scope.user = Auth.getUser();
	if(!$scope.user){
		$state.go('login');
	}else{
		$http.get('/api/user/detail/'+$scope.user.id).success(function(x){
			$scope.user.ico= x.ico;
		})
	}
}
angular.module('todoWebApp')
  .controller('MainController', MainController);

})();
