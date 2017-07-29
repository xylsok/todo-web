'use strict';
(function() {

function Controller($scope, $http,$resource,Auth) {
	$scope.user = Auth.getUser();
	$scope.note ={};
	$http.post('/api/note/add',$scope.note).success(function(x){

	})
	$scope.core={
		notes:[],
		_init:function(){
			$http.get('/api/note/get/'+$scope.user.userName).success(function(x){
				$scope.core.notes=x;
			})
		}
	}
	$scope.core._init();

}
angular.module('todoWebApp')
  .controller('NoteController', Controller);

})();
