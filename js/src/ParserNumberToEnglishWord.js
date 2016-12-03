var EnglishNumber = require('../../js/src/EnglishNumber');


var ParserNumberToEnglishWord = {
  englishNumber: EnglishNumber,

  parse: function(number){
    if(number == 0)
      return "zero";
    else
      return this.englishNumber.atomUnit.getKeyByValue(number);
  },

  getAtomNumber: function(number){
    var unitDigit = number % 10;

    if(this.isAtomTens(number))
      return number;

    if(this.isAtomUnits(unitDigit))
      return unitDigit;

    return null;
  },
  getTensNumber: function(number){
    var unitDigit = number % 10;
    var tens = (number - unitDigit) % 100;

    if(this.isTens(number))
      return number;

    if(this.isTens(tens))
      return tens;

    return null;
  },
  getHundredsNumber: function(number){
    var unitDigit = number % 10;
    var tens = (number - unitDigit) % 100;
    var hundreds = (number - tens - unitDigit);

    if(this.isHundreds(number))
      return number;

    if(number >= 100 && number < 1000 && hundreds % 100 == 0)
      return hundreds;

    return null;
  },

  isAtomTens: function(number){
    return this.englishNumber.atomTens.getKeyByValue(number) != null;
  },
  isAtomUnits: function(number){
    return this.englishNumber.atomUnit.getKeyByValue(number) != null;
  },
  isTens: function(number){
    return this.englishNumber.tens.getKeyByValue(number) != null;
  },
  isHundreds: function(number){
    return this.englishNumber.hundred.getKeyByValue(number) != null;
  },

};

module.exports = ParserNumberToEnglishWord;
