var EnglishNumber = require('../../js/src/EnglishNumber');

var ParserEnglishNumber = {
  englishNumber: EnglishNumber,

  parse: function(numberString){
    var numberValue = null;

    if(this.isZero(numberString))
      numberValue =  0;
    else if (this.isAtomNumber(numberString))
      numberValue = this.englishNumber.atomUnit[numberString];
    else if (this.isAtomTens(numberString))
      numberValue = this.englishNumber.atomTens[numberString];
    else if (this.isTens(numberString))
      numberValue = this.englishNumber.tens[numberString];
    else if (this.isHundred(numberString))
      numberValue = this.englishNumber.hundred[numberString];

    return numberValue;
  },

  isZero: function(number){
    return this.englishNumber.zero[number] != undefined;
  },
  isAtomNumber: function(number){
    return this.englishNumber.atomUnit[number] != undefined;
  },
  isAtomTens: function(number){
    return this.englishNumber.atomTens[number] != undefined;
  },
  isTens: function(number){
    return this.englishNumber.tens[number] != undefined;
  },
  isHundred: function(number){
    return this.englishNumber.hundred[number] != undefined;
  },

};

module.exports = ParserEnglishNumber;
