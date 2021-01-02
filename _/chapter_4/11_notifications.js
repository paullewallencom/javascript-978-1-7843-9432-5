function Notifications(store) {
  if (typeof(store) === ‘undefined’) {
    this.store = []
  } else {
    this.store = store
  }
}

Notifications.prototype.add = function (notification) {
  store.push(notifictation)
}