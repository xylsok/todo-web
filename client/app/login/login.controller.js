'use strict';
(function() {

function MainController($scope, $http,$resource) {
	$scope.login={
		loginState:true,
		_show:function(){
			$scope.login.loginState=!$scope.login.loginState;
		}
	};
	$scope.regObj={
		louCeng:[],
		_createLouCeng:function(){
			for(var s=1;s<=30;s++){
				$scope.regObj.louCeng.push(s);
			}
		},
		_startReg:function(){
			alert(2);
		}
	};
	$scope.regObj._createLouCeng();
	$scope.user={};
	$scope.reg=function(){
		$scope.post('/api/user/add',$scope.user).success(function(){

		})
	}

}
angular.module('lawqWebApp')
  .controller('LoingController', MainController);

})();
