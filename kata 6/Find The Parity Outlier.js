
function findOutlier(integers) {
  let result = 0;
  if(isItEvenOrOdd(integers) == 'even') 
    result = searchForEvenIn(integers);
  else result = searchForOddIn(integers);
  return result;
}
function isItEvenOrOdd(integers) {
  let counterEven = 0;
  let counterOdd = 0;
  for(let i = 0; i < integers.length; i++) {
    console.log(integers[i]);
    if(Math.abs(integers[i]) % 2 === 0) counterEven++;
    if(Math.abs(integers[i]) % 2 === 1) counterOdd++;
    if(counterEven === 2) return 'odd';
    if(counterOdd === 2) return 'even';
  }
}
function searchForEvenIn(integers) {
  for(let i = 0; i < integers.length; i++) {
    if(Math.abs(integers[i]) % 2 === 0) return integers[i];
  }
}
function searchForOddIn(integers) {
  for(let i = 0; i < integers.length; i++) {
    if(Math.abs(integers[i]) % 2 === 1) return integers[i];
  }
}