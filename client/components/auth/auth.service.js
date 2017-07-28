'use strict';

angular.module('todoWebApp')
  .factory('Auth', function Auth($http, $cookies, $rootScope) {
    var currentUser = {};
    // App clientId must required. but Secret not.
    var Secret = '',
      clientId = '';
    return {
      getClientId: function () {
        return clientId;
      },
      logout: function () {
        $cookies.remove('token');
        $cookies.remove('user');
      },
      getUser: function () {
        var u = $cookies.get('user');

        if (u) {
          var user = JSON.parse(u);
          if (user && user.userName) {
            return user;
          }
        }
        return null;
      },
      setUser: function (user) {
        $cookies.put('user', JSON.stringify(user));
      },
      setToken: function (t) {
        $cookies.put('token', t);
      }
    };
  });
