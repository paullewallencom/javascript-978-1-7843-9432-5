prisonerTransfer = function (prisoner, 
                             otherDungeon, 
                             ourDungeon, 
                             notifier, 
                             callback) {
  var keeper = ourDungeon.getOrc()
  var carriage = ourDungeon.getCarriage()
  var transfer = prepareTransfer(carriage, keeper, prisoner)
  transfer.sentTo(otherDungeon, function (err) {
    if (err) {
      callback(new Error("Transfer initiation failed."))
    } else {
      notifier.message(otherDungeon, transfer)
      callback()
    }    
  })
}

function prepareTransfer(carriage, keeper, prisoner) {
  return {}
}