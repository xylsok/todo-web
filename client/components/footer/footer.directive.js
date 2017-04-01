'use strict';
angular.module('lawqWebApp')
	.directive('footer', function () {
		return {
			templateUrl: 'components/footer/footer.html',
			restrict: 'E',
			link: function (scope, element) {
				element.addClass('footer');
			},
			controller: function ($scope, $http) {
				$http.get('/auth/ip/current')
					.success(function (data) {
						$scope.ip = data;
					})
					.error(function (e) {
						console.log(e);
					});
			}
		};
	});
