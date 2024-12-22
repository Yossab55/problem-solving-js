function solution(number) {
  number--;
  if (number < 3) return 0;

  let counterOfThree = parseInt(number / 3);
  let counterOfFive = parseInt(number / 5);
  let counterOFFifteen = parseInt(number / 15);
  let sumOfThree = ((3 + (number - (number % 3))) / 2) * counterOfThree;
  let sumOfFive = ((5 + (number - (number % 5))) / 2) * counterOfFive;
  let sumOfFifteen = ((15 + (number - (number % 15))) / 2) * counterOFFifteen;
  return sumOfThree + sumOfFive - sumOfFifteen;
}