'use strict';
(function() {

function MainController($scope, $http,$resource) {
	 $http.get('/api/user/getusers').success(function(data){
		 $scope.users=data;
		 console.log(data);
	 }).error(function(e){
		 console.log(e);
	 })
}
angular.module('lawqWebApp')
  .controller('MainController', MainController);

})();
