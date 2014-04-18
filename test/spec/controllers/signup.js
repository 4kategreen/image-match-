'use strict';

describe('Controller: SignupCtrl', function () {

  // load the controller's module
  beforeEach(module('babiesApp'));

  var SignupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignupCtrl = $controller('SignupCtrl', {
      $scope: scope
    });
  }));

  it('should change the password type on click', function() {
    scope.changePasswordFieldType();

    expect(scope.passwordFieldType).toBe('password');

    scope.changePasswordFieldType();

    expect(scope.passwordFieldType).toBe('text');
  });
});
