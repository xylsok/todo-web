'use strict';
(function () {
	function Controller($scope, $http, $state, Auth, $filter) {
		//$scope.currentDate=new Date().getTime();
		//$scope.test=function(){
		//	console.log($scope.currentDate);
		//}
		//$scope.currentDate = new Date($scope.currentDate);
		var E = window.wangEditor;
		var editor = new E('#div3');
		editor.customConfig.uploadImgServer = '/upload/fastdb/testUploadFiles';
		editor.customConfig.uploadFileName = 'myFileName';
		editor.customConfig.uploadImgTimeout = 10000;
		editor.customConfig.uploadImgMaxSize = 5 * 1024 * 1024;
		editor.customConfig.uploadImgHooks = {
			success: function (xhr, editor, result) {
				console.log("success");
			},
			fail: function (xhr, editor, result) {
				console.log('图片插入错误');
			},
			error: function (xhr, editor) {
				console.log('图片上传出错');
			},
			timeout: function (xhr, editor) {
				console.log('图片上传超时时');
			},
			customInsert: function (insertImg, result, editor) {
				// 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
				// insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
				// 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
				console.log(insertImg);
				var url = result.url;
				insertImg(url)
			}
		}
		editor.create();
		$scope.getText = function () {
			$scope.text = editor.txt.text();
		}
		$scope.getHtml = function () {
			$scope.html=editor.txt.html();
		}
		$scope.remove = function () {
			$scope.html='';
			$scope.text='';
		}
	}

	angular.module('todoWebApp')
		.controller('TestController', Controller);
})();
