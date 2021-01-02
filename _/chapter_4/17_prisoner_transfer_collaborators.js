function getOtherDungeon() {
     return { inbox: [] }
}

function getLocalDungeon() {
  return {
    getOrc: function () { return {} },
       getCarriage: function () { return {} }
     }
   }

function getNotifier() {
  return { 
    message: function (target, reason) { target.inbox.push({}) } 
  }
}
