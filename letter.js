//File to control whether or not a letter appears as a "_" or as itself on-screen

var secret = require('./game.js');

var LetterSpaces = function(secret){
  this.answerArray = [];
  this.makeArray = function(){
    for (var i = 0; i < secret.length; i++){
     answerArray[i] = "_";
     console.log(i);
     
    }
  }
}

var answerArray = new LetterSpaces();

//var answerArray = new LetterSpaces(secret);

console.log(secret);
console.log(answerArray);

module.exports = LetterSpaces; 