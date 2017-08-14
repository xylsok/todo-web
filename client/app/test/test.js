'use strict';

angular.module('todoWebApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('test', {
        url: '/test',
        templateUrl: 'app/test/test.html',
        controller: 'TestController'
      });
  });
