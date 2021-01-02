var util = require(“util”)

var asLoggable = function () {
  Object.keys(this).forEach(function (key) {
    if (this.hasOwnProperty(key) && typeof this[key] === 'function') {
      var that = this
      var fn = this[key]
      this[key] = function () {
        console.log("Called " + key + " on " + util.inspect(that) + " with " + util.inspect(arguments))
        return fn.apply(that, arguments)
      }
    }
  }, this)
  return this
}
