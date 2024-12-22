//! there is still timeout error
//? maybe you could use D&C method
// and if the number cannot make pair in first time
// it cannot make pair anytime else
// and if make pair first time it should not make another test
// i think it will save time
// function sumPairs(ints, s) {
//   let memory = {
//     first: null,
//     second: null,
//   };
//   for (let i = 0; i < ints.length; i++) {
//     if (checkCurrentIndexBiggerThanSecond(memory, i)) break;
//     let second = getSecondNumbers(ints, i, s, memory);
//     if (compareIsSecondSmallest(memory, second)) {
//         memory.first = [ints[i], i];
//         memory.second = second;
//     }
//   }
//   return makeResult(memory);
// }
// function checkCurrentIndexBiggerThanSecond(memory, i) {
//   if (memory.second == null) return false;
//   if (memory.second[1] > i) return false;
//   return true;
// }
// function getSecondNumbers(ints, index, s, memory) {
//   let first = ints[index];
//   let size =
//   (memory.second == null) ?  ints.length : memory.second[1];
//   for (let i = index + 1; i < size; i++) {
//     if (first + ints[i] === s) return [ints[i], i];
//   }
//   return null
// }
// function compareIsSecondSmallest(memory, second) {
//   if(memory.second == null) return true;
//   if(second == null) return false;
//   if (second[1] < memory.second[1]) return true;
//   return false;
// }
// function makeResult(memory) {
//   if(memory.first == null || memory.second == null) return undefined;
//   return [memory.first[0], memory.second[0]];
// }
let isSet = false;
function sumPairs(numbers, sum, result = [], memory = {}) {
  if (numbers.length == 0) {
    isSet = false;
    if (result.length == 2) return result;
    else return undefined;
  }
  if (!isSet) {
    isSet = true;
    numbers = makeUniqueSet(numbers);
  }
  let first = numbers.shift();
  let second = sum - first;
  if (memory[first] || memory[second]) {
    return sumPairs(numbers.slice(0), sum, result, memory);
  }
  let index = numbers.indexOf(second);
  if (index !== -1) {
    numbers = numbers.slice(0, index);
    result[0] = first;
    result[1] = second;
  }
  memory[first] = true;
  memory[second] = true;
  return sumPairs(numbers, sum, result, memory);
}
function makeUniqueSet(numbers) {
  let result = [];
  let check = {};
  for (let i = 0; i < numbers.length; i++) {
    if (check[numbers[i]] === 2) continue;
    if (check[numbers[i]] === undefined) check[numbers[i]] = 1;
    else if (check[numbers[i]] === 1) check[numbers[i]]++;
    result.push(numbers[i]);
  }
  return result;
}
console.log(sumPairs([1, 1, 1, 1, -2, 3, 0, -6, 1], -6));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs([20, -13, 40], -7));
console.log(sumPairs([3, 2, 3, 1, 1, 4, 0], 2));
// solution in code wars 
var sum_pairs1 = function (ints, s) {
  var seen = {};
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true;
  }
};