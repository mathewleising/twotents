'use strict';

describe('Controller: TripsCtrl', function () {

  // load the controller's module
  beforeEach(module('twotentsApp'));

  var TripsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TripsCtrl = $controller('TripsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
