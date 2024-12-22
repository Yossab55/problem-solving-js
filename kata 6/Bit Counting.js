var countBits = function (number) {
  let arrayBits = [];
  let reminder;
  while(number > 0) {
    reminder = number % 2
    if(reminder == 0) arrayBits.push(0);
    else arrayBits.push(1) ;
    number = parseInt(number / 2);
  }
  let numberOfOne = arrayBits.filter(ele => (ele === 1) ? true : false).length
  return numberOfOne
};
// another solution 
function solution(number) {
  return number.toString(2).split("0").join('').length;
}
console.log(countBits(1234))
console.log(solution(1234))
// 3 => 11
// 3 / 2 = 1.5 = 1
// 1 /2 = 0.5 =
// to string accept base (10, 2, 8, 16)
console.log(Number(1234).toString(2))