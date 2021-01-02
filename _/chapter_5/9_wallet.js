function Wallet(coins) {
  this.money = coins
}

Wallet.prototype.pay = function (coin) {
  for(var i = 0; i < this.money.length; i++) {
    if (this.money[i].equals(coin) {
      this.money.splice(i, 1)
      return true
    }
  }
  return false
}

function Orc(wallet) {
  this.wallet = wallet
  this.inventory = []
}

Orc.prototype.buy = function (thing, price) {
  var priceToPay = new Coin(price)
  if (this.wallet.pay(priceToPay)) {
    this.inventory.unshift(thing)
    return true
  }
  return false
}
