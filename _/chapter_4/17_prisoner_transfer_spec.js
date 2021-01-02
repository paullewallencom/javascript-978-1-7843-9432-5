it("notifies other dungeons of the transfer", function (done) {
  prisonerTransfer(“prisoner”, 
                   getOtherDungeon(), 
                   getLocalDungeon(),
                   getNotifier(), 
                   function (err) {
      assert.ifError(err)
      assert.equal(dungeon.inbox.length, 1)
      done()
    })
})