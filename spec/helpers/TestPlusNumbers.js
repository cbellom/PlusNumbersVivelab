'use strict';

describe("Plus Numbers", function() {

  var PlusNumbers = require('../../js/src/PlusNumbers');

  it("should be able plus numbers", function() {
    expect(PlusNumbers.plus(0,0)).toBeDefined();
  });

});
