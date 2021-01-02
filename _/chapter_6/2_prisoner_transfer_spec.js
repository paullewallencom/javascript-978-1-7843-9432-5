var prisonerTransfer = require("../../lib/prisoner_transfer")
var dungeon = require("../../lib/dungeon")
var prisoner = require("../../lib/inmates")
var messages = require("../../lib/messages")
var assert = require("assert")

describe("Prisoner transfer to other dungeons", function () {
  
  it("prisoner is moved to remote dungeon", function (done) {
    var prisoner = new inmates.Prisoner()
    var remoteDongeon = new dungeon.remoteDungeon()
    var localDungeon = new dungeon.localDungeon()
    localDungeon.inPrison(prisoner)
    var channel = new messages.Channel(localDungeon, remoteDungeon)

    assert(localDungeon.hasPrioner(prisoner))
    prisonerTransfer(prisoner, localDungeon, remoteDungeon, channel, function (err) {
      assert.ifError(err)
      assert(remoteDungeon.hasPrioner(prisoner))
      assert(!localDungeon.hasPrioner(prisoner))
      done()
    })
  })
})
