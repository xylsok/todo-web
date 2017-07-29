'use strict';

angular.module('todoWebApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('detail', {
        url: '/detail/{id}',
        templateUrl: 'app/detail/detail.html',
        controller: 'DetailController'
      });
  });
