'use strict';

angular.module('todoWebApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'RegisterController'
      });
  });
