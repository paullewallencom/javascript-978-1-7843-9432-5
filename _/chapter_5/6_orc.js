Orc.prototype.receivePayment = function (coin) {
  if (this.checkIfValid(coin)) {
    return this.wallet.add(coin)
  } else {
    return false
  }
}