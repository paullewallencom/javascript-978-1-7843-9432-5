function OrcRepository(orcs, swords) {
  this.orcs = orcs
  this.swords = swords
}

OrcRepository.prototype.getArmed = function () {
  if (this.orcs > 0 && this.swords > 0) {
    this.orcs -= 1
    this.swords -= 1
    return Orc.withSword();
  }
  return false
}

OrcRepository.prototype.add = function (orc) {
  this.orcs += 1
  if (orc.weapon == "sword") this.swords += 1
}

function Orc(name, weapon) {
  this.name = name
  this.weapon = weapon
}

Orc.withSword = function () {
  return new Orc(randomName(), "sword")
}

repo = new OrcRepository(1, 1)
orc = repo.getArmed() // => { name: "Zuul", weapon: "sword" }
repo.getArmed() // => false
repo.add(orc)
repo.getArmed() // => { name: "Zuul", weapon: "sword" }
