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
    expect(EnglishNumber.hundred).toBeDefined();
  });

  it("should be able to have zero", function() {
    expect(EnglishNumber.zero).toBeDefined();
  });

  it("should exist object of atom unit of One to nine ", function() {
    expect(EnglishNumber.atomUnit["one"]).toBeDefined();
    expect(EnglishNumber.atomUnit["two"]).toBeDefined();
    expect(EnglishNumber.atomUnit["three"]).toBeDefined();
    expect(EnglishNumber.atomUnit["four"]).toBeDefined();
    expect(EnglishNumber.atomUnit["five"]).toBeDefined();
    expect(EnglishNumber.atomUnit["six"]).toBeDefined();
    expect(EnglishNumber.atomUnit["seven"]).toBeDefined();
    expect(EnglishNumber.atomUnit["eight"]).toBeDefined();
    expect(EnglishNumber.atomUnit["nine"]).toBeDefined();
  });

  it("should exist object of atom tens of ten to Nineteen ", function() {
    expect(EnglishNumber.atomTens["ten"]).toBeDefined();
    expect(EnglishNumber.atomTens["eleven"]).toBeDefined();
    expect(EnglishNumber.atomTens["twelve"]).toBeDefined();
    expect(EnglishNumber.atomTens["thirteen"]).toBeDefined();
    expect(EnglishNumber.atomTens["fourteen"]).toBeDefined();
    expect(EnglishNumber.atomTens["fifteen"]).toBeDefined();
    expect(EnglishNumber.atomTens["sixteen"]).toBeDefined();
    expect(EnglishNumber.atomTens["seventeen"]).toBeDefined();
    expect(EnglishNumber.atomTens["eighteen"]).toBeDefined();
    expect(EnglishNumber.atomTens["nineteen"]).toBeDefined();
  });

  it("should exist object of tens of twenty to ninety ", function() {
    expect(EnglishNumber.tens["twenty"]).toBeDefined();
    expect(EnglishNumber.tens["thirty"]).toBeDefined();
    expect(EnglishNumber.tens["forty"]).toBeDefined();
    expect(EnglishNumber.tens["fifty"]).toBeDefined();
    expect(EnglishNumber.tens["sixty"]).toBeDefined();
    expect(EnglishNumber.tens["seventy"]).toBeDefined();
    expect(EnglishNumber.tens["eighty"]).toBeDefined();
    expect(EnglishNumber.tens["ninety"]).toBeDefined();
  });

  it("should exist object of hundred", function() {
    expect(EnglishNumber.hundred["hundred"]).toBeDefined();
  });

  it("should exist object of zero", function() {
    expect(EnglishNumber.zero["zero"]).toBeDefined();
  });

  it("should able to find key by value", function() {
    expect(EnglishNumber.zero.getKeyByValue(0)).toEqual("zero");
  });

});
