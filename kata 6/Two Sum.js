function twoSum(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if ((numbers[i] + numbers[j]) === target) {
        result.push(i, j);
        return result
      }
    }
  }
  return null;
}

console.log(twoSum([1, 2, 3], 4))
// function twoSum(numbers, target) {
//   let seen = new Map();
//   for (let i = 0; i < numbers.length; i++) {
//     let x = numbers[i],
//       y = target - x;
//     if (seen.has(y)) return [seen.get(y), i];
//     seen.set(x, i);
//   }
// }