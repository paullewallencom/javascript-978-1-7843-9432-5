var counter = {
  state: 1,
  update: function() {
    this.state++
  }
}

var jumpingCounter = Object.create(counter, {
  update: { value: function() { this.state += 10 } }
})

jumpingCounter.update()
jumpingCounter.state // => 11
