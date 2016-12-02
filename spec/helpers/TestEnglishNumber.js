'use strict';

describe("English Number", function() {

  var EnglishNumber = require('../../js/src/EnglishNumber');

  it("should be able to have atom unit", function() {
    expect(EnglishNumber.atomUnit).toBeDefined();
  });

  it("should be able to have tens", function() {
    expect(EnglishNumber.tens).toBeDefined();
  });

  it("should be able to have hundreds", function() {
    expect(EnglishNumber.hundreds).toBeDefined();
  });

});
