function Letter(title, text, to) {
  this.title = title
  this.text = text
  this.to = to
}

Letter.prototype.send = function(postman) {
  postman.deliver(this)
}
