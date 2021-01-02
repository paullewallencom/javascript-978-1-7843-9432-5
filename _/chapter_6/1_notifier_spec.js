var sinon = require("sinon")

var connection = {
  send: function (message) {
    // NOOP
  },
  close: function () {
    // NOOP
  }
  
}

var backend = {
  connectTo: function (target, cb) {
    cb(null, connection)
  }
}

describe("Notifier", function () {
  it("calls the backend and sends a message", function () {
    var backendMock = sinon.mock(backend)
    mock.expects("connectTo").once()
    
    var notifier = new Notifier(backendMock)
    var dungeon = {}
    var transport = {}
    notifier.message(dungeon, transport, function (err) {
      mock.verify()      
    })
  })
})
