var util = require("util")

var Fight = {
  init: function (orc, attacker, audit) {
    this.audit = audit
    if (this.audit) {
      console.log("Called init on " + util.inspect(this) + " with " + util.inspect(arguments))
    }
    this.orc = orc
    this.attacker = attacker
    return this
  },

  round: function () {
    if (this.audit) {
      console.log("Called round on " + util.inspect(this) + " with " + util.inspect(arguments))
    }
     if(this.orc.isArmed) {
       this.orc.attack(this.attacker)
     } else {
       this.attacker.attack(this.orc)
     }
   }
}
