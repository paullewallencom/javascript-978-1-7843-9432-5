var agronak = Object.create(Orc).init("Agronak", "sword")
var traugh = Object.create(Orc).init("Traugh")

var fight = Object.create(Fight).init(agronak, traugh)
fight.round() // => Agronak strikes Traugh with sword.
