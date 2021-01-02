var car = new Car()
var configurator = new Configurator(car)

configurator.bodyType(BodyTypes.CONVERTIBLE)
configurator.engine(Engines.V6)
configurator.addExtra(Extras.RADIO)
configurator.addExtra(Extras.GPS)

configurator.errors() // => {conflicts: [{ "convertible": "v6" }]}
