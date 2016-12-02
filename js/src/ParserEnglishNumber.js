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
  isAtomUnit: function(number){
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
    return number != null && number != undefined &&  number != "" && this.splitWords(number).length > 0 && this.splitWords(number).length < 5;
  },

  getWordValue: function(word){
      var numberValue = null;

      if(this.isZero(word))
        numberValue =  this.englishNumber.zero[word];
      else if (this.isAtomUnit(word))
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

    if( this.hasValidStructure(numberString)){
      numberValue = this.getValueFromArray(array);
    } else {
      numberValue = null;
    }

    return numberValue;
  },

  getValueFromArray: function(array){
    var numberValue = 0;

    for (index = array.length - 1; index >= 0; index--) {
      var value = this.getWordValue(array[index]);

      if(this.isHundredArray(array) && this.isHundred(array[index])){
        value *= this.getWordValue(array[index - 1]);
        index--;
      }

      if (value != null)
        numberValue += value;
      else
        return null;
    }

    return numberValue;
  },

  hasValidStructure: function(numberString){
    var array = this.splitWords(numberString);

    if(array.length == 1)
      return true;

    if(array.length == 2){
      return this.isTwoWordsHundredNumber(array) || this.isTwoWordsTensNumber(array) ;
    }

    if(array.length == 3){
      return this.isThreeWordsHundredNumber(array) ;
    }

    if(array.length == 4){
      return this.isFourWordsHundredNumber(array) ;
    }

    return false;
  },
  isTwoWordsHundredNumber: function(array){
    return this.isAtomUnit(array[0]) && this.isHundred(array[1]);
  },
  isTwoWordsTensNumber: function(array){
      return this.isTens(array[0]) && this.isAtomUnit(array[1]);
  },
  isThreeWordsHundredNumber: function(array){
      return this.isAtomUnit(array[0]) && this.isHundred(array[1]) && (this.isAtomUnit(array[2]) || this.isAtomTens(array[2]) || this.isTens(array[2]));
  },
  isFourWordsHundredNumber: function(array){
    return this.isAtomUnit(array[0]) && this.isHundred(array[1]) && this.isTens(array[2]) && this.isAtomUnit(array[3]);
  },
  isHundredArray: function(array){
    return array.length >= 2;
  }

};

module.exports = ParserEnglishNumber;
