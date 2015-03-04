'use strict';

describe('Service: userState', function () {

  // load the service's module
  beforeEach(module('twotentsApp'));

  // instantiate service
  var userState;
  beforeEach(inject(function (_userState_) {
    userState = _userState_;
  }));

  it('should do something', function () {
    expect(!!userState).toBe(true);
  });

});
