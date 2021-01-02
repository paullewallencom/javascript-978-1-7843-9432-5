function iChangeThings(obj) {
  obj.thing = "changed"
}

obj = {}
obj.thing // => undefined
iChangeThings(obj)
obj.thing // => "changed"
