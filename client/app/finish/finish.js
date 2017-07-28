'use strict';

angular.module('todoWebApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('finish', {
        url: '/finish',
        templateUrl: 'app/finish/finish.html',
        controller: 'FinishController'
      });
  });
