'use strict';

describe('Service: apiSocial', function () {

  // load the service's module
  beforeEach(module('twotentsApp'));

  // instantiate service
  var apiSocial;
  beforeEach(inject(function (_apiSocial_) {
    apiSocial = _apiSocial_;
  }));

  it('should do something', function () {
    expect(!!apiSocial).toBe(true);
  });

});
