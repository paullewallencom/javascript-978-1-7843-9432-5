var prisonerTransfer = require("../../lib/prisoner_transfer")
var assert = require("assert")

describe("Prisoner transfer to other dungeons", function () {
  /*
   * Prisoner transfers need to be an automated process. After 
   * initiation the transfer should take the necessary steps to     
   * complete, and prompt for any additional information if needed
   */

  it("notifies other dungeons of the transfer", function (done) {
    var prionser = getPrisonerForTransfer()
    var dungeon = getDungenonToTransfer()
    prisonerTransfer(prionser, dungeon, function (err) {
      assert.ifError(err)
      assert.equal(dungeon.inbox.length, 1)
      done()
    })
  })

  // Helpers
  /* get a prisoner to transfer */
  function getPrisonerForTransfer() { return {} }

  /* get a dungeon to transfer to */
  function getDungenonToTransfer() { return { inbox: [] } }
})
