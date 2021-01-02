function Orc(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Orc.prototype.fullName = function () {
  return this.firstName + “ “ + this.lastName
}
