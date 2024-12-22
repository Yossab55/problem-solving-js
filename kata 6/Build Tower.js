function towerBuilder(nFloors) {
  let result = [];
  for (let i = 1; i <= nFloors; i++) {
    let floor = "";
    for (let j = 0; j < i * 2 - 1; j++) {
      floor += "*";
    }
    if (floor.length !== nFloors * 2 - 1) {
      let reminderSize = (nFloors * 2 - 1 - floor.length) / 2;
      for (let i = 0; i < reminderSize; i++) floor = " " + floor + " ";
    }
    result.push(floor);
  }
  return result;
}
console.log(towerBuilder(5));
// function towerBuilder(nFloors) {
//   var tower = [];
//   for (var i = 0; i < nFloors; i++) {
//     tower.push(
//       " ".repeat(nFloors - i - 1) +
//         "*".repeat(i * 2 + 1) +
//         " ".repeat(nFloors - i - 1)
//     );
//   }
//   return tower;
// }