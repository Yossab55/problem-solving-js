snail = function (array) {
  let result = [];
  let counterItems = array.length ** 2;
  let firstIndex = 0;
  let secondIndex = 0;
  let directions = ["r", "d", "l", "u"];
  let counterLeftRight = 0;
  result.push(array[firstIndex][secondIndex]);
  while (counterItems > 1) {
    let direction = directions.shift();
    if (direction == "r") {
      for (
        secondIndex += 1;
        secondIndex < array[firstIndex].length - counterLeftRight;
        secondIndex++
      ) {
        result.push(array[firstIndex][secondIndex]);
        counterItems--;
      }
      secondIndex--;
    }
    if (direction == "d") {
      for (firstIndex += 1; firstIndex < secondIndex + 1; firstIndex++) {
        result.push(array[firstIndex][secondIndex]);
        counterItems--;
      }
      firstIndex--;
    }
    if (direction == "l") {
      for (secondIndex -= 1; secondIndex >= counterLeftRight; secondIndex--) {
        result.push(array[firstIndex][secondIndex]);
        counterItems--;
      }
      secondIndex++;
      counterLeftRight++;
    }
    if (direction == "u") {
      for (firstIndex -= 1; firstIndex >= secondIndex + 1; firstIndex--) {
        result.push(array[firstIndex][secondIndex]);
        counterItems--;
      }
      firstIndex++;
    }
    directions.push(direction);
    console.log(counterItems)
    // counterItems--;
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
    [1, 2, 3, 10], // 00 01 02 03
    [4, 5, 6, 11], // 10 11 12 13
    [7, 8, 9, 12], // 20 21 22 23
    [0, 0, 0, 13], // 30 31 32 33
  ])
);
