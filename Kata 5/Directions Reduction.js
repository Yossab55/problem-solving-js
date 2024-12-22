function dirReduc(arr) {
  let result = arr;
  const DIRECTION = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };
  let thereIsDiff = true;
  while (thereIsDiff) {
    thereIsDiff = false;
    let tempArray = [];
    for (let i = 0; i < result.length; i++) {
      if (DIRECTION[result[i]] === result[i + 1]) {
        i++;
        thereIsDiff = true;
        continue;
      } else {
        tempArray.push(result[i]);
      }
    }
    result = tempArray;
  }
  return result;
}
console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
