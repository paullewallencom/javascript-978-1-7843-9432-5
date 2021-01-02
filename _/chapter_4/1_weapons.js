function getOrcWeaponTypes() {
  var result = []
  dungeon.orcs.forEach(function (orc) {
    result.push(orc.weapon.type)
  })
  return result
}