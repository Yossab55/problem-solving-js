function deleteNth(numbers, numberOfTimes) {
  if (numberOfTimes === 0) return [];
  let objectCheckNumberShown = {};
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (objectCheckNumberShown[numbers[i]] === undefined)
      objectCheckNumberShown[numbers[i]] = 1;
    else objectCheckNumberShown[numbers[i]]++;
    if (objectCheckNumberShown[numbers[i]] <= numberOfTimes)
      result.push(numbers[i]);
  }
  return result;
}
console.log(deleteNth([20, 37, 20, 21], 1));
// function deleteNth(arr, x) {
//   var cache = {};
//   return arr.filter(function (n) {
//     cache[n] = (cache[n] || 0) + 1;
//     return cache[n] <= x;
//   });
// }