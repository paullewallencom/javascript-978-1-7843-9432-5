var thing = {
  state: 1,
  update: function() {
    this.state++
  }
}

thing.update()
thing.update()
thing.state 	// => 3
