'use strict';
(function() {

function MainController($scope, $http,$resource,$sce) {
	 //$http.get('/api/user/getusers').success(function(data){
		// $scope.users=data;
		// console.log(data);
	 //}).error(function(e){
		// console.log(e);
	 //})
	$scope.controller = this;
	$scope.controller.API = null;

	$scope.controller.onPlayerReady = function(API) {
		$scope.controller.API = API;
	};

	$scope.controller.videos = [
		{
			sources: [
				{src: $sce.trustAsResourceUrl("http://file.xylsok.com/1490970097110.mp4"), type: "video/mp4"},
			]
		},
		{
			sources: [
				{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"), type: "video/mp4"},
			]
		}
	];

	$scope.controller.config = {
		autoHide: false,
		autoHideTime: 3000,
		autoPlay: false,
		sources: $scope.controller.videos[0].sources,
		theme: {
			url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
		},
		plugins: {
			poster: "http://file.xylsok.com/lawq.png"
		}
	};

	$scope.controller.setVideo = function(index) {
		$scope.controller.API.stop();
		$scope.controller.config.sources = $scope.controller.videos[index].sources;
	};
}
angular.module('lawqWebApp')
  .controller('MainController', MainController);

})();
