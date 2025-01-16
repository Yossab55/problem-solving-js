// link in code wars :https://www.codewars.com/kata/54d4c8b08776e4ad92000835 
// link in git hub : https://github.com/Yossab55/problem-solving-js/blob/main/Kata%205/What's%20a%20Perfect%20Power%20anyway.js
var isPP = function (n) {
  let result = null;
  let m = 2;
  let k = 2;
  let end = parseInt(Math.sqrt(n));
  while(m <= end) {
    if(Math.pow(m, k) == n) {
      result = [m, k];
      break;
    }
    if(Math.pow(m, k) > n) {
      m++;
      k = 2;
    } else  k++;
  }
  return result;
};


console.log(isPP(4));
console.log(isPP(5));
console.log(isPP(343));