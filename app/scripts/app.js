'use strict';

angular.module('babiesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'lvl.directives.dragdrop',
  'firebase'
])
  .constant('FIREBASE_URL', 'https://4kategreen.firebaseio.com')
  .constant('USERS', 370373795)
  .config(function ($routeProvider) {
    $routeProvider
      .when('/vote', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope', 'Auth', '$location', function($rootScope, Auth, $location) {
    $rootScope.loginObj = Auth;

    $rootScope.$on('$routeChangeStart', function(event, currRoute){
      // also create a test that it's not me.
      // reload redirects
      if (currRoute.$$route.authRequired && !$rootScope.loginObj.user) {
        // make a modal or something here.
        $location.path('/');
      }
    });
  }]);
