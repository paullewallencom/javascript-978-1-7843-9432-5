function Thing(name) { 
  this.name = name
}

aThing = new Thing("foo")
bThing = new Thing("foo")

aThing === bThing // => false
