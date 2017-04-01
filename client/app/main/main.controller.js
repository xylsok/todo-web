'use strict';
(function() {

function MainController($scope, $http,$resource) {
	$scope.users = $resource('/api/user/getusers').query();
}
angular.module('lawqWebApp')
  .controller('MainController', MainController);

})();
