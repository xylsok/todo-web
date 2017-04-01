'use strict';
angular.module('lawqWebApp')
		.config(function ($stateProvider) {
			$stateProvider
					.state('statistical', {
						url: '/statistical',
						templateUrl: 'app/statistical/statistical.html',
						controller: 'StatisticalController'
					});
		});
