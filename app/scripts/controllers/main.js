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

    $scope.matches = [
      {
        picture: 1,
        player: ''
      },
      {
        picture: 2,
        player: ''
      },
      {
        picture: 3,
        player: ''
      },
      {
        picture: 4,
        player: ''
      },
      {
        picture: 5,
        player: ''
      },
      {
        picture: 6,
        player: ''
      }
    ];

    $scope.makeMatch = function(dragEl, dropEl) {
      var drag = angular.element(dragEl),
          drop = angular.element(dropEl);

      $scope.matches[drop.attr('index')].player = drag.text();
      drop.html(drag);
      $scope.$apply();
    };
  });
