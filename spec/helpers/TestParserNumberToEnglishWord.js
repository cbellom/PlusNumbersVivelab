'use strict';

describe("parser Number", function() {

  var ParserNumberToEnglishWord = require('../../js/src/ParserNumberToEnglishWord');

  it("should have instace of english number", function() {
    expect(ParserNumberToEnglishWord.englishNumber).toBeDefined();
  });

  it("should be able to parser 0", function() {
    expect(ParserNumberToEnglishWord.parse(0)).toEqual("zero");
  });

  it("should be able to parser only units", function() {
    expect(ParserNumberToEnglishWord.parse(1)).toEqual("one");
    expect(ParserNumberToEnglishWord.parse(2)).toEqual("two");
    expect(ParserNumberToEnglishWord.parse(3)).toEqual("three");
    expect(ParserNumberToEnglishWord.parse(4)).toEqual("four");
    expect(ParserNumberToEnglishWord.parse(5)).toEqual("five");
    expect(ParserNumberToEnglishWord.parse(6)).toEqual("six");
    expect(ParserNumberToEnglishWord.parse(7)).toEqual("seven");
    expect(ParserNumberToEnglishWord.parse(8)).toEqual("eight");
    expect(ParserNumberToEnglishWord.parse(9)).toEqual("nine");
  });

  it("should be able to parser only atom tens", function() {
    expect(ParserNumberToEnglishWord.parse(10)).toEqual("ten");
    expect(ParserNumberToEnglishWord.parse(11)).toEqual("eleven");
    expect(ParserNumberToEnglishWord.parse(12)).toEqual("twelve");
    expect(ParserNumberToEnglishWord.parse(13)).toEqual("thirteen");
    expect(ParserNumberToEnglishWord.parse(14)).toEqual("fourteen");
    expect(ParserNumberToEnglishWord.parse(15)).toEqual("fifteen");
    expect(ParserNumberToEnglishWord.parse(16)).toEqual("sixteen");
    expect(ParserNumberToEnglishWord.parse(17)).toEqual("seventeen");
    expect(ParserNumberToEnglishWord.parse(18)).toEqual("eighteen");
    expect(ParserNumberToEnglishWord.parse(19)).toEqual("nineteen");
  });

  it("should be able to parser only tens", function() {
    expect(ParserNumberToEnglishWord.parse(20)).toEqual("twenty");
    expect(ParserNumberToEnglishWord.parse(30)).toEqual("thirty");
    expect(ParserNumberToEnglishWord.parse(40)).toEqual("forty");
    expect(ParserNumberToEnglishWord.parse(50)).toEqual("fifty");
    expect(ParserNumberToEnglishWord.parse(60)).toEqual("sixty");
    expect(ParserNumberToEnglishWord.parse(70)).toEqual("seventy");
    expect(ParserNumberToEnglishWord.parse(80)).toEqual("eighty");
    expect(ParserNumberToEnglishWord.parse(90)).toEqual("ninety");
  });

  it("should be able to parser only tens and atom unit", function() {
    expect(ParserNumberToEnglishWord.parse(21)).toEqual("twenty one");
      expect(ParserNumberToEnglishWord.parse(99)).toEqual("ninety nine");
  });

  it("should be able to parser only hundreds", function() {
    expect(ParserNumberToEnglishWord.parse(100)).toEqual("one hundred");
      expect(ParserNumberToEnglishWord.parse(999)).toEqual("nine hundred ninety nine");
      expect(ParserNumberToEnglishWord.parse(900)).toEqual("nine hundred");
  });

  it("should be able get atom units or atom tens of a number", function() {
    expect(ParserNumberToEnglishWord.getAtomNumber(1)).toEqual(1);
    expect(ParserNumberToEnglishWord.getAtomNumber(11)).toEqual(11);
    expect(ParserNumberToEnglishWord.getAtomNumber(21)).toEqual(1);
    expect(ParserNumberToEnglishWord.getAtomNumber(101)).toEqual(1);
    expect(ParserNumberToEnglishWord.getAtomNumber(100)).toEqual(null);
    expect(ParserNumberToEnglishWord.getAtomNumber(20)).toEqual(null);
    expect(ParserNumberToEnglishWord.getAtomNumber(0)).toEqual(null);
  });

  it("should be able get tens of a number", function() {
    expect(ParserNumberToEnglishWord.getTensNumber(20)).toEqual(20);
    expect(ParserNumberToEnglishWord.getTensNumber(31)).toEqual(30);
    expect(ParserNumberToEnglishWord.getTensNumber(140)).toEqual(40);
    expect(ParserNumberToEnglishWord.getTensNumber(151)).toEqual(50);
    expect(ParserNumberToEnglishWord.getTensNumber(100)).toEqual(null);
    expect(ParserNumberToEnglishWord.getTensNumber(10)).toEqual(null);
    expect(ParserNumberToEnglishWord.getTensNumber(1)).toEqual(null);
    expect(ParserNumberToEnglishWord.getTensNumber(0)).toEqual(null);
  });

  it("should be able get hundreds of a number", function() {
    expect(ParserNumberToEnglishWord.getHundredsNumber(100)).toEqual(100);
    expect(ParserNumberToEnglishWord.getHundredsNumber(200)).toEqual(200);
    expect(ParserNumberToEnglishWord.getHundredsNumber(310)).toEqual(300);
    expect(ParserNumberToEnglishWord.getHundredsNumber(911)).toEqual(900);
    expect(ParserNumberToEnglishWord.getHundredsNumber(1)).toEqual(null);
    expect(ParserNumberToEnglishWord.getHundredsNumber(10)).toEqual(null);
    expect(ParserNumberToEnglishWord.getHundredsNumber(20)).toEqual(null);
    expect(ParserNumberToEnglishWord.getHundredsNumber(21)).toEqual(null);
    expect(ParserNumberToEnglishWord.getHundredsNumber(0)).toEqual(null);
    expect(ParserNumberToEnglishWord.getHundredsNumber(1000)).toEqual(null);
  });

});
