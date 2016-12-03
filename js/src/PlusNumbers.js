var PlusNumbers = {

  plus: function(x , y){
    if(this.isValidPlus(x, y))
      return x + y;

    return null;
  },

  isValidPlus: function(x, y){
    return !(x < 0 || y < 0 || (x+y) >999);
  }

};

module.exports = PlusNumbers;
