'use strict';
(function() {

function MainController($scope, $http,$resource,$sce) {
	$scope.shufflingFigures=[
		{link:'http://file.xylsok.com/lawq.png',path:'http://file.xylsok.com/2.png'},
		{link:'http://file.xylsok.com/lawq.png',path:'http://file.xylsok.com/1.png'},
		{link:'http://file.xylsok.com/lawq.png',path:'http://file.xylsok.com/3.png'}
	]
	$scope.controller = this;
	$scope.controller.API = null;

	$scope.controller.onPlayerReady = function(API) {
		$scope.controller.API = API;
	};

	$scope.controller.videos = [
		{
			sources: [
				{src: $sce.trustAsResourceUrl("http://file.xylsok.com/1490970097110.mp4"), type: "video/mp4"}
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
angular.module('todoWebApp')
  .controller('MainController', MainController);

})();
