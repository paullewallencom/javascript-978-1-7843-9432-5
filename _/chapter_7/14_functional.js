var numbers = [1,2,3,4,5,6]

var result = numbers.map(function(number) {
  return (number * 2) 
}).filter(function(e) {
  return (e % 2) === 0
}).reduce(function(acc, val) {
  return acc + val
})

result // => a number, like 40
