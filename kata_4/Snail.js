snail = function (array) {
  if(array[0][0] == null) return [];
  let result = [];
  let counterItems = array.length ** 2;
  let firstIndex = 0;
  let secondIndex = 0;
  let directions = ["r", "d", "l", "u"];
  let counterLeftRight = 0;
  result.push(array[firstIndex][secondIndex]);
  while (counterItems != result.length) {
    let direction = directions.shift();
    if (direction == "r") {
      for (
        secondIndex += 1;
        secondIndex < array[firstIndex].length - counterLeftRight;
        secondIndex++
      ) {
        result.push(array[firstIndex][secondIndex]);
      }
      secondIndex--;
    }
    if (direction == "d") {
      for (firstIndex += 1; firstIndex < secondIndex + 1; firstIndex++) {
        result.push(array[firstIndex][secondIndex]);
      }
      firstIndex--;
    }
    if (direction == "l") {
      for (secondIndex -= 1; secondIndex >= counterLeftRight; secondIndex--) {
        result.push(array[firstIndex][secondIndex]);
      }
      secondIndex++;
      counterLeftRight++;
    }
    if (direction == "u") {
      for (firstIndex -= 1; firstIndex >= secondIndex + 1; firstIndex--) {
        result.push(array[firstIndex][secondIndex]);
      }
      firstIndex++;
    }
    directions.push(direction);
    console.log(counterItems);
  }
  return result;
};

console.log(
  snail([
    [1, 2, 3], // 00 01 02
    [4, 5, 6], // 10 11 12
    [7, 8, 9], // 20 21 22
  ])
);
console.log(
  snail([
    [1]
  ])
);
console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ])
);
//!more simple code 
//* he doesn't need first or second index or direction he just pop and shift 
// snail = function (array) {
//   var result;
//   while (array.length) {
//     // Steal the first row.
//     result = result ? result.concat(array.shift()) : array.shift();
//     // Steal the right items.
//     for (var i = 0; i < array.length; i++) result.push(array[i].pop());
//     // Steal the bottom row.
//     result = result.concat((array.pop() || []).reverse());
//     // Steal the left items.
//     for (var i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
//   }
//   return result;
// };