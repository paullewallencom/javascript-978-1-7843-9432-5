var Master = function (guards) { this.guards = guards }
Master.prototype.fightOfAttackers = function (attackers) {
  var self = this
  attackers.forEach(function (attacker, idx) {
    console.log(self.guards[idx].kill(attacker))
  })
}