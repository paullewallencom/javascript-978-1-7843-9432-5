function Dungeon(cells) {
  this.freeCells = cells
}

Dungeon.prototype.inPrison = function (number) {
  this.freeCells -= number
}

Dungeon.prototype.free = function (number) {
  this.freeCells += number
}

var dungeon = new Dungeon(100)
dungeon.inPrison(5) 
dungeon.free(3)
