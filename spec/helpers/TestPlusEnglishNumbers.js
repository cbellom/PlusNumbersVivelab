'use strict';

describe("Plus English Numbers", function() {

  var PlusEnglishNumbers = require('../../js/src/PlusEnglishNumbers');

  it("should be able to plus numbers", function() {
    expect(PlusEnglishNumbers.plus("zero","zero")).toEqual("zero");
    expect(PlusEnglishNumbers.plus("one","zero")).toEqual("one");
    expect(PlusEnglishNumbers.plus("one","ten")).toEqual("eleven");
    expect(PlusEnglishNumbers.plus("one","twenty")).toEqual("twenty one");
    expect(PlusEnglishNumbers.plus("one","hundred")).toEqual("one hundred one");
    expect(PlusEnglishNumbers.plus("999","one")).toEqual("zero");
    expect(PlusEnglishNumbers.plus("zero","0")).toEqual("zero")
  });

  it("should validate numbers", function() {
    expect(PlusEnglishNumbers.isValidPlus("zero","zero")).toEqual(true);
    expect(PlusEnglishNumbers.isValidPlus("one","twenty")).toEqual(true);
    expect(PlusEnglishNumbers.isValidPlus("hundred","ten")).toEqual(true);
    expect(PlusEnglishNumbers.isValidPlus("nine hundred ninety nine","one")).toEqual(false);
    expect(PlusEnglishNumbers.isValidPlus("999","one")).toEqual(false);
    expect(PlusEnglishNumbers.isValidPlus("zero","0")).toEqual(false)
  });

});
