function Orc(age) {
  this.age = age
  this.attacking = false
}

Orc.prototype.goToBattle = function () {
  if (age < 18) throw new Error(“To young for battle”)
  this.attacking = true
}
