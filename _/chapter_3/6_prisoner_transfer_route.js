app.post("/prisoner_transfer", function(req, res) {
  var dungeon = Dungeon.findById(req.params.dungeonId)
  var prisoner = Prisoner.findById(req.params.prisonerId)

  prisonerTransfer(prisoner, dungeon, function(err) {
    var message
    if(err) {
      res.statusCode = 400
      message = { error: err.message }
    } else {
      res.statusCode = 201
      message = { success: true }
    }
    res.end(JSON.stringify(message))
  })
})
