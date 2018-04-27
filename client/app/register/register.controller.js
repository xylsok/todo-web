'use strict';
(function () {
	function RegisterController($scope, $http, $state, Auth, ModalEditor) {
		$scope.register={
			userName:'',
			nickName:'',
			password:'',
			password2:'',
			msg:'',
			_registerUser:function(){
				console.log($scope.register);
				if(!$scope.register.userName){
					alert("用户名不能为空！");
					return;
				}
				if(!$scope.register.password){
					alert("密码不能为空！");
					return;
				}
				if($scope.register.password!=$scope.register.password2){
					alert("密码与确认密码不一致！");
					return;
				}
				var user = {
					userName:$scope.register.userName,
					password:$scope.register.password,
					nickName:$scope.register.nickName
				};
				$http.post('/api/user/add',user)
					.success(function (data) {
						if(data){
							alert("用户名已被占用！");
							return;
						}else{
							$scope.register.msg='恭喜你，注册成功！'
						}
					})
					.error(function (e) {
						console.log(e);
					})
			}
		}
	}

	angular.module('todoWebApp')
		.controller('RegisterController', RegisterController);
})();
