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
		editor.customConfig.uploadImgServer = 'http://123.56.76.155:8080/gdfiles/api2/file/upload/form';

		editor.customConfig.uploadImgHooks = {
			before: function (xhr, editor, files) {
				// 图片上传之前触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
				// 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
				// return {
				//     prevent: true,
				//     msg: '放弃上传'
				// }
				console.log('before');
			},
			success: function (xhr, editor, result) {
				// 图片上传并返回结果，图片插入成功之后触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
				console.log("success");
				console.log(result);
			},
			fail: function (xhr, editor, result) {
				// 图片上传并返回结果，但图片插入错误时触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
				console.log('fail');
			},
			error: function (xhr, editor) {
				// 图片上传出错时触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
				console.log('error');
			},
			timeout: function (xhr, editor) {
				// 图片上传超时时触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
				console.log('timeout');
			},
			// 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
			// （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
			customInsert: function (insertImg, result, editor) {
				// 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
				// insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
				// 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
				console.log(insertImg);
				var url = result.url
				insertImg(url)
				// result 必须是一个 JSON 格式字符串！！！否则报错
			}
		}
		editor.create()
		$scope.getText = function () {
			console.log(editor.txt.text());
		}
		$scope.getHtml = function () {
			console.log(editor.txt.html());
		}
	}

	angular.module('todoWebApp')
		.controller('TestController', Controller);
})();
