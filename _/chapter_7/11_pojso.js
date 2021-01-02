function Orc(name) {
  this.name = name
}

Orc.prototype.introduce = function () {
  console.log(“I AM “ + this.name + “!”)
}
