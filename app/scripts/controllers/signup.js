'use strict';

angular.module('babiesApp')
  .controller('SignupCtrl', function ($scope) {
    $scope.passwordFieldType = 'text';

    $scope.changePasswordFieldType = function() {
      if ($scope.passwordFieldType === 'text') {
        $scope.passwordFieldType = 'password';
      } else {
        $scope.passwordFieldType = 'text';
      }
    }
  });
