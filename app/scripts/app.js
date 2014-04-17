'use strict';

angular.module('babiesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'lvl.directives.dragdrop'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
