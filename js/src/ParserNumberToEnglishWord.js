var EnglishNumber = require('../../js/src/EnglishNumber');


var ParserNumberToEnglishWord = {
  englishNumber: EnglishNumber,
  atomNumber : null,
  tensNumber : null,
  hundredsNumber : null,

  parse: function(number){
    this.tensNumber = this.getTensNumber(number);
    this.atomNumber = this.getAtomNumber(number);
    this.hundredsNumber = this.getHundredsNumber(number);

    return this.getNumberString(number);
  },

  getNumberString: function(number){
    var numberString = null;
    var atomNumberString = null;
    var tensNumberString = null;
    var hundredsNumberString = null;

    if(number == 0) {
      numberString = this.englishNumber.zero.getKeyByValue(number);
    } else {
      atomNumberString = this.getAtomNumberString();
      tensNumberString = this.getTensNumberString();
      hundredsNumberString = this.getHundredsNumberString();

      numberString = atomNumberString != null ? atomNumberString : null;
      numberString = tensNumberString != null ? tensNumberString  + (numberString != null ? " " + numberString : "") : numberString;
      numberString = hundredsNumberString != null ? hundredsNumberString  + (numberString != null ? " " + numberString : "") : numberString;
    }

    return numberString;
  },
  getAtomNumberString: function(){
      if(this.atomNumber != null)
        return this.getAtomNumberValue(this.atomNumber);

      return null;
  },
  getTensNumberString: function(){
      if(this.tensNumber != null)
        return this.englishNumber.tens.getKeyByValue(this.tensNumber);

      return null;
  },
  getHundredsNumberString: function(){
      if(this.hundredsNumber != null)
        return this.getAtomNumberValue(this.hundredsNumber / 100) + " " + this.englishNumber.hundred.getKeyByValue(100);

      return null;
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
  getAtomNumberValue: function(number){
    var atomUnitValue = this.englishNumber.atomUnit.getKeyByValue(number);
    var atomTensValue = this.englishNumber.atomTens.getKeyByValue(number);

    if(atomUnitValue != null)
      return atomUnitValue;

    if(atomTensValue != null)
      return atomTensValue;

    return "";
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
