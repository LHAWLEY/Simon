function Simon() {
  this.pattern = [];
  this.guessedPattern = [];
}

Simon.prototype.generator = function(){
  return Math.floor((Math.random() * 4) + 1);
}

Simon.prototype.store = function(){
  this.pattern.push(this.generator());
  return this.pattern
}

Simon.prototype.guess = function(guessedNumber){
  this.guessedPattern.push(guessedNumber);
}

Simon.prototype.match = function(){
  if (this.pattern.join('') !== this.guessedPattern.join('')){
    alert('Game Over.');
  } else {
    this.guessedPattern = [];
    this.store();
  }
}

Simon.prototype.finishedGuessing = function(){
 return this.pattern.length === this.guessedPattern.length
}

