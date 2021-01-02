Coin.prototype.equals = function(other) {
  if(!(other instanceof Coin)) {
    return false
  }

  return this.value === other.value
}

var notACoin = { value: 50 }
var aCoin = new Coin(50)
var coin = new Coin(50)

coin.equals(aCoin) // => true
coin.equals(notACoin) // => false
