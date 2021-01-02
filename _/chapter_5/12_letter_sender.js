function LetterSender(postman, letter) {
  this.postman = postman
  this.letter = letter
}

LetterSender.prototype.send = function() {
  var address = this.letter.to
  postman.deliver(letter, address)
}
