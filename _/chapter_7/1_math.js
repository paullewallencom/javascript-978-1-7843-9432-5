var ns = [1,2,3,4]
for(var i = ns.length-1, si = ns[i], s = 0; si = ns[i--];) s += si
console.log("sum for " + ns + " is " + s)