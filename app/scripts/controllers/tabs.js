'use strict';

angular.module('babiesApp')
  .controller('TabsCtrl', function ($scope,$location) {
    $scope.tabs = [
      { title: 'login', route: '/' },
      { title: 'upload', route: '/upload' },
      { title: 'vote', route: '/vote' }
    ];

    $scope.getClass = function(path) {
      if ($location.path() === path) {
        return 'active';
      } else {
        return '';
      }
    };

  });
