var Fight = {
  init: function (orc, attacker) {
    this.orc = orc
    this.attacker = attacker
    return this
  },

  round: function () {
     if(this.orc.isArmed) {
       this.orc.attack(this.attacker)
     } else {
       this.attacker.attack(this.orc)
     }
   }
}
