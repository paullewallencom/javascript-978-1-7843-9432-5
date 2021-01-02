var otherThing = Object.create(thing, {
  more: { value: "data" }
})

otherThing.update()
thing.update()

thing.state	 	// => 2
otherThing.state 	// => 2
otherThing.more 	// => data
thing.more 		// => undefined
