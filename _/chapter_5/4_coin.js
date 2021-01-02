"use strict"

function Coin(value) {
  this.value = value
  Object.freeze(this)
}

function changeValue(coin) {
  coin.value = 100
}

var coin = new Coin(50)
changeValue(coin) // => TypeError: Cannot assign to read only property 'value' of #<Coin>