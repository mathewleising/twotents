'use strict';

describe('Service: apiGeneral', function () {

  // load the service's module
  beforeEach(module('twotentsApp'));

  // instantiate service
  var apiGeneral;
  beforeEach(inject(function (_apiGeneral_) {
    apiGeneral = _apiGeneral_;
  }));

  it('should do something', function () {
    expect(!!apiGeneral).toBe(true);
  });

});
