var PrisonerTransfer = function (prisoner,ourDungeon) {
  this.prisoner = prisoner
  this.ourDungeon = ourDungeon
  this.assignDungeonRessources()
}

PrisonerTransfer.prototype.assignDungeonRessources = function () {
  var resources = this.ourDungeon.getTransferResources()
  this.carriage = resources.getCarriage()
  this.keeper = resources.getKeeper()
}

PrisonerTransfer.prototype.prepare = function () {
  // Make the transfer preparations
  return true;
}

PrisonerTransfer.init = function (prisoner, otherDungeon, ourDungeon, notifier, callback) {
  var transfer = new PrisonerTransfer(prisoner, ourDungeon)
  if (transfer.prepare()) {
    notifier.message(otherDungeon, transfer)
    callback()
  } else {
    callback(new Error("Transfer initiation failed."))
  }
}
