'use strict';

describe("Parser English Number", function() {

  var ParserEnglishNumber = require('../../js/src/ParserEnglishNumber');

  it("should have instace of english number", function() {
    expect(ParserEnglishNumber.englishNumber).toBeDefined();
  });

  it("should be able parser only zero number", function() {
    expect(ParserEnglishNumber.parse("zero")).toEqual(0);
  });

  it("should be able parser only atom units", function() {
    expect(ParserEnglishNumber.parse("one")).toEqual(1);
    expect(ParserEnglishNumber.parse("two")).toEqual(2);
    expect(ParserEnglishNumber.parse("three")).toEqual(3);
    expect(ParserEnglishNumber.parse("four")).toEqual(4);
    expect(ParserEnglishNumber.parse("five")).toEqual(5);
    expect(ParserEnglishNumber.parse("six")).toEqual(6);
    expect(ParserEnglishNumber.parse("seven")).toEqual(7);
    expect(ParserEnglishNumber.parse("eight")).toEqual(8);
    expect(ParserEnglishNumber.parse("nine")).toEqual(9);
  });

  it("should be able parser only atom tens", function() {
    expect(ParserEnglishNumber.parse("ten")).toEqual(10);
    expect(ParserEnglishNumber.parse("eleven")).toEqual(11);
    expect(ParserEnglishNumber.parse("twelve")).toEqual(12);
    expect(ParserEnglishNumber.parse("thirteen")).toEqual(13);
    expect(ParserEnglishNumber.parse("fourteen")).toEqual(14);
    expect(ParserEnglishNumber.parse("fifteen")).toEqual(15);
    expect(ParserEnglishNumber.parse("sixteen")).toEqual(16);
    expect(ParserEnglishNumber.parse("seventeen")).toEqual(17);
    expect(ParserEnglishNumber.parse("eighteen")).toEqual(18);
    expect(ParserEnglishNumber.parse("nineteen")).toEqual(19);
  });

  it("should be able parser only tens", function() {
    expect(ParserEnglishNumber.parse("twenty")).toEqual(20);
    expect(ParserEnglishNumber.parse("thirty")).toEqual(30);
    expect(ParserEnglishNumber.parse("forty")).toEqual(40);
    expect(ParserEnglishNumber.parse("fifty")).toEqual(50);
    expect(ParserEnglishNumber.parse("sixty")).toEqual(60);
    expect(ParserEnglishNumber.parse("seventy")).toEqual(70);
    expect(ParserEnglishNumber.parse("eighty")).toEqual(80);
    expect(ParserEnglishNumber.parse("ninety")).toEqual(90);
  });

  it("should be able parser only hundred number", function() {
    expect(ParserEnglishNumber.parse("hundred")).toEqual(100);
  });

  it("should be able validate zero number", function() {
    expect(ParserEnglishNumber.isZero("zero")).toEqual(true);
    expect(ParserEnglishNumber.isZero("xxxx")).toEqual(false);
    expect(ParserEnglishNumber.isZero("")).toEqual(false);
  });

  it("should be able validate atoms numbers", function() {
    expect(ParserEnglishNumber.isAtomNumber("one")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("two")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("three")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("four")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("five")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("six")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("seven")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("eight")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("nine")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("x")).toEqual(false);
    expect(ParserEnglishNumber.isAtomNumber("")).toEqual(false);
  });

  it("should be able validate tens", function() {
    expect(ParserEnglishNumber.isAtomNumber("one")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("two")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("three")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("four")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("five")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("six")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("seven")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("eight")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("nine")).toEqual(true);
    expect(ParserEnglishNumber.isAtomNumber("x")).toEqual(false);
    expect(ParserEnglishNumber.isAtomNumber("")).toEqual(false);
  });

  it("should be able validate atoms tens", function() {
    expect(ParserEnglishNumber.isTens("twenty")).toEqual(true);
    expect(ParserEnglishNumber.isTens("thirty")).toEqual(true);
    expect(ParserEnglishNumber.isTens("forty")).toEqual(true);
    expect(ParserEnglishNumber.isTens("fifty")).toEqual(true);
    expect(ParserEnglishNumber.isTens("sixty")).toEqual(true);
    expect(ParserEnglishNumber.isTens("seventy")).toEqual(true);
    expect(ParserEnglishNumber.isTens("eighty")).toEqual(true);
    expect(ParserEnglishNumber.isTens("ninety")).toEqual(true);
    expect(ParserEnglishNumber.isTens("x")).toEqual(false);
    expect(ParserEnglishNumber.isTens("")).toEqual(false);
  });

  it("should be able validate hundred number", function() {
    expect(ParserEnglishNumber.isHundred("hundred")).toEqual(true);
    expect(ParserEnglishNumber.isHundred("xxxx")).toEqual(false);
    expect(ParserEnglishNumber.isHundred("")).toEqual(false);
  });

  it("should be able return null on parse wrong number", function() {
    expect(ParserEnglishNumber.parse("xxxx")).toEqual(null);
    expect(ParserEnglishNumber.parse("")).toEqual(null);
  });

});
