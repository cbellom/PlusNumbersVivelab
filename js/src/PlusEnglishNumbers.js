var ParserEnglishNumber = require('../../js/src/ParserEnglishNumber');
var ParserNumberToEnglishWord = require('../../js/src/ParserNumberToEnglishWord');
var PlusNumbers = require('../../js/src/PlusNumbers');

var PlusEnglishNumbers = {

  plus: function(x, y){

    if(!this.isValidPlus(x,y))
      return "zero";

    var result = this.plusNumbers(x, y);
    return ParserNumberToEnglishWord.parse(result);
  },

  plusNumbers: function(x, y){
    var xParsed = ParserEnglishNumber.parse(x);
    var yParsed = ParserEnglishNumber.parse(y);

    return PlusNumbers.plus(xParsed, yParsed);
  },

  isValidPlus: function(x, y){
    var xParsed = ParserEnglishNumber.parse(x);
    var yParsed = ParserEnglishNumber.parse(y);

    if( xParsed != null &&  yParsed != null){
      return PlusNumbers.isValidPlus(xParsed, yParsed);
    }

    return  false;
  }

};

module.exports = PlusEnglishNumbers;
