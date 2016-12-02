'use strict';

describe("Parser English Number", function() {

  var ParserEnglishNumber = require('../../js/src/ParserEnglishNumber');

  it("should have instace of english number", function() {
    expect(ParserEnglishNumber.englishNumber).toBeDefined();
  });

  it("should be able to parser only zero number", function() {
    expect(ParserEnglishNumber.parse("zero")).toEqual(0);
  });

  it("should be able to parser only atom units", function() {
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

  it("should be able to parser only atom tens", function() {
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

  it("should be able to parser only tens", function() {
    expect(ParserEnglishNumber.parse("twenty")).toEqual(20);
    expect(ParserEnglishNumber.parse("thirty")).toEqual(30);
    expect(ParserEnglishNumber.parse("forty")).toEqual(40);
    expect(ParserEnglishNumber.parse("fifty")).toEqual(50);
    expect(ParserEnglishNumber.parse("sixty")).toEqual(60);
    expect(ParserEnglishNumber.parse("seventy")).toEqual(70);
    expect(ParserEnglishNumber.parse("eighty")).toEqual(80);
    expect(ParserEnglishNumber.parse("ninety")).toEqual(90);
  });

  it("should be able to parser only hundred number", function() {
    expect(ParserEnglishNumber.parse("hundred")).toEqual(100);
  });

  it("should be able to validate zero number", function() {
    expect(ParserEnglishNumber.isZero("zero")).toEqual(true);
    expect(ParserEnglishNumber.isZero("xxxx")).toEqual(false);
    expect(ParserEnglishNumber.isZero("")).toEqual(false);
  });

  it("should be able to validate atoms numbers", function() {
    expect(ParserEnglishNumber.isAtomUnit("one")).toEqual(true);
    expect(ParserEnglishNumber.isAtomUnit("two")).toEqual(true);
    expect(ParserEnglishNumber.isAtomUnit("three")).toEqual(true);
    expect(ParserEnglishNumber.isAtomUnit("four")).toEqual(true);
    expect(ParserEnglishNumber.isAtomUnit("five")).toEqual(true);
    expect(ParserEnglishNumber.isAtomUnit("six")).toEqual(true);
    expect(ParserEnglishNumber.isAtomUnit("seven")).toEqual(true);
    expect(ParserEnglishNumber.isAtomUnit("eight")).toEqual(true);
    expect(ParserEnglishNumber.isAtomUnit("nine")).toEqual(true);
    expect(ParserEnglishNumber.isAtomUnit("x")).toEqual(false);
    expect(ParserEnglishNumber.isAtomUnit("")).toEqual(false);
  });

  it("should be able to validate atoms tens", function() {
    expect(ParserEnglishNumber.isAtomTens("ten")).toEqual(true);
    expect(ParserEnglishNumber.isAtomTens("eleven")).toEqual(true);
    expect(ParserEnglishNumber.isAtomTens("twelve")).toEqual(true);
    expect(ParserEnglishNumber.isAtomTens("thirteen")).toEqual(true);
    expect(ParserEnglishNumber.isAtomTens("fourteen")).toEqual(true);
    expect(ParserEnglishNumber.isAtomTens("fifteen")).toEqual(true);
    expect(ParserEnglishNumber.isAtomTens("sixteen")).toEqual(true);
    expect(ParserEnglishNumber.isAtomTens("seventeen")).toEqual(true);
    expect(ParserEnglishNumber.isAtomTens("eighteen")).toEqual(true);
    expect(ParserEnglishNumber.isAtomTens("nineteen")).toEqual(true);
    expect(ParserEnglishNumber.isAtomTens("x")).toEqual(false);
    expect(ParserEnglishNumber.isAtomTens("")).toEqual(false);
  });

  it("should be able to validate  tens", function() {
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

  it("should be able to validate hundred number", function() {
    expect(ParserEnglishNumber.isHundred("hundred")).toEqual(true);
    expect(ParserEnglishNumber.isHundred("xxxx")).toEqual(false);
    expect(ParserEnglishNumber.isHundred("")).toEqual(false);
  });

  it("should return null on parse wrong number of one word", function() {
    expect(ParserEnglishNumber.parse("xxxx")).toEqual(null);
    expect(ParserEnglishNumber.parse("")).toEqual(null);
  });

  it("should be able split of words", function() {
    expect(ParserEnglishNumber.splitWords("")).toEqual([]);
    expect(ParserEnglishNumber.splitWords("xxxx")).toEqual(["xxxx"]);
    expect(ParserEnglishNumber.splitWords("    xxxx ")).toEqual(["xxxx"]);
    expect(ParserEnglishNumber.splitWords(" one one ")).toEqual(["one","one"]);
  });

  it("should be able to parser 2-4 words numbers and plus those", function() {
    expect(ParserEnglishNumber.splitAndPlus("twenty one")).toEqual(21);
    expect(ParserEnglishNumber.splitAndPlus("one hundred")).toEqual(101);
  });

  it("should be able to validate when is able to parse the number", function() {
    expect(ParserEnglishNumber.isAbleToParsed(null)).toEqual(false);
    expect(ParserEnglishNumber.isAbleToParsed("")).toEqual(false);
    expect(ParserEnglishNumber.isAbleToParsed("one one one one one")).toEqual(false);
  });

  it("should return null on parse 5 o more words", function() {
    expect(ParserEnglishNumber.parse("one one one one one")).toEqual(null);
  });

  it("should return null on parse two words with wrong numbers", function() {
    expect(ParserEnglishNumber.splitAndPlus("one xx")).toEqual(null);
    expect(ParserEnglishNumber.splitAndPlus("forty xx")).toEqual(null);
    expect(ParserEnglishNumber.splitAndPlus("xx hundred")).toEqual(null);
  });

  it("should able to validate number structure of two words", function() {
    expect(ParserEnglishNumber.hasValidStructure("twenty one")).toEqual(true);
    expect(ParserEnglishNumber.hasValidStructure("one hundred")).toEqual(true);
    expect(ParserEnglishNumber.hasValidStructure("ten one")).toEqual(false);
    expect(ParserEnglishNumber.hasValidStructure("one twenty")).toEqual(false);
    expect(ParserEnglishNumber.hasValidStructure("hundred ten")).toEqual(false);
    expect(ParserEnglishNumber.hasValidStructure("hundred twenty")).toEqual(false);
  });

  it("should able to validate number structure of three words", function() {
    expect(ParserEnglishNumber.hasValidStructure("one hundred one")).toEqual(true);
    expect(ParserEnglishNumber.hasValidStructure("one hundred ten")).toEqual(true);
    expect(ParserEnglishNumber.hasValidStructure("one hundred twenty")).toEqual(true);
    expect(ParserEnglishNumber.hasValidStructure("ten hundred one")).toEqual(false);
    expect(ParserEnglishNumber.hasValidStructure("hundred twenty one")).toEqual(false);
  });

  it("should able to validate number structure of four words", function() {
    expect(ParserEnglishNumber.hasValidStructure("one hundred twenty one")).toEqual(true);
    expect(ParserEnglishNumber.hasValidStructure("one hundred ten one")).toEqual(false);
    expect(ParserEnglishNumber.hasValidStructure("hundred ten twenty one")).toEqual(false);
    expect(ParserEnglishNumber.hasValidStructure("hundred one twenty one")).toEqual(false);
    expect(ParserEnglishNumber.hasValidStructure("hundred one one one")).toEqual(false);
  });
});
