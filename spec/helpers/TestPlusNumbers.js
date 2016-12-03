'use strict';

describe("Plus Numbers", function() {

  var PlusNumbers = require('../../js/src/PlusNumbers');

  it("should be defined plus numbers", function() {
    expect(PlusNumbers.plus(0,0)).toBeDefined();
  });

  it("should be able to plus numbers", function() {
    expect(PlusNumbers.plus(0,0)).toEqual(0);
    expect(PlusNumbers.plus(1,0)).toEqual(1);
    expect(PlusNumbers.plus(100,100)).toEqual(200);
    expect(PlusNumbers.plus(999,1)).toEqual(null);
    expect(PlusNumbers.plus(-1,-1)).toEqual(null)
  });

  it("should validate numbers", function() {
    expect(PlusNumbers.isValidPlus(0,0)).toEqual(true);
    expect(PlusNumbers.isValidPlus(1,0)).toEqual(true);
    expect(PlusNumbers.isValidPlus(100,100)).toEqual(true);
    expect(PlusNumbers.isValidPlus(999,0)).toEqual(true);
    expect(PlusNumbers.isValidPlus(999,1)).toEqual(false);
    expect(PlusNumbers.isValidPlus(-1,-1)).toEqual(false)
  });

});
