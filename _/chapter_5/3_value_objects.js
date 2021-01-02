function Coin(value) {
  this.value = value
}

var fiftyCoin = new Coin(50)
var otherFiftyCoin = new Coin(50)

fiftyCoin == otherFiftyCoin // => false
