var maxSequence = function (arr) {
  if (arr.length == 0 || arr.every((ele) => ele <= 0)) return 0;
  if (arr.every((ele) => ele >= 0)) return arr.reduce((a, b) => a + b);
  let sumOfEveryPor = [];
  for (let i = 0; i < arr.length; i++) {
    for(let j = arr.length ; j >= i; j --) {
      let sum = 0; 
      for(let k = i ; k < j ; k ++) {
        sum += arr[k];
      }
      sumOfEveryPor.push(sum)
    }
  }
  return Math.max(...sumOfEveryPor)
};
// var maxSequence = function (arr) {
//   var min = 0,
//     ans = 0,
//     i,
//     sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//     min = Math.min(sum, min);
//     ans = Math.max(ans, sum - min);
//   }
//   return ans;
// };
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
