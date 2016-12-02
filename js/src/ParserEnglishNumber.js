var EnglishNumber = require('../../js/src/EnglishNumber');

var ParserEnglishNumber = {
  englishNumber: EnglishNumber,

  parse: function(numberString){
    var number = null

    if(this.isAbleToParsed(numberString))
      number = this.splitAndPlus(numberString);

    return number;
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
  isAbleToParsed: function(number){
    return number != null && number != undefined &&  number != "" && this.splitWords(number).length > 0 && this.splitWords(number).length < 5 ;
  },

  getWordValue: function(word){
      var numberValue = null;

      if(this.isZero(word))
        numberValue =  this.englishNumber.zero[word];
      else if (this.isAtomNumber(word))
        numberValue = this.englishNumber.atomUnit[word];
      else if (this.isAtomTens(word))
        numberValue = this.englishNumber.atomTens[word];
      else if (this.isTens(word))
        numberValue = this.englishNumber.tens[word];
      else if (this.isHundred(word))
        numberValue = this.englishNumber.hundred[word];

      return numberValue;
  },

  splitWords: function(numberString){
    var array = []

    if(numberString != "")
      array = numberString.trim().split(" ");

    return array;
  },

  splitAndPlus: function(numberString){
    var numberValue = 0;
    var array = this.splitWords(numberString);

    for (index = 0; index < array.length; index++) {
      var value = this.getWordValue(array[index]);

      if (value != null)
        numberValue += value;
      else
        return null;

    }
    return numberValue;
  }
};

module.exports = ParserEnglishNumber;
