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
				{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
				{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
				{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
			]
		},
		{
			sources: [
				{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"), type: "video/mp4"},
				{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg"), type: "video/ogg"}
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
			poster: "http://www.videogular.com/assets/images/videogular.png"
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
