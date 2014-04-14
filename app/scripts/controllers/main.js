'use strict';

angular.module('babiesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.players = [
      'kate',
      'brian',
      'joe',
      'don',
      'lin',
      'murali'
    ];

    $scope.pictures = [
      1,2,3,4,5,6
    ];
  });
