'use strict';

angular.module('lawqWebApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/list',
        templateUrl: 'app/developer/project/list.html',
        controller: 'ProjectController'
      });
  });
