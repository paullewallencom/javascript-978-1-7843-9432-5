var Orc = {
  init: function (name, weapon) {
    this.name = name
    this.weapon = weapon
    return this
  },

  get isArmed () { return !!this.weapon },

  attack: function (opponent) {
    console.log(this.name + " strikes "
        + opponent.name + " with " + this.weapon + ".")
  }
}
