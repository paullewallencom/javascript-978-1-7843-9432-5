function Notifier(backend) {
  this.backend = backend
}

function createMessageFromSubject(subject) {
  return {}
}

Notifier.prototype.message = function (target, subject, cb) {
  var message = createMessageFromSubject(subject)
  backend.connectTo(target, function (err, connection) {
    connection.send(message)
    connection.close()
    cb()
  })
}



