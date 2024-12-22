/**
 * 
 * -- loop over every item 
 * -- sum the right of this item 
 * -- sum the left of this item 
 * -- check if they are equal return the index 
 * -- if loop has been ended and there is no result return -1
 *
 */

function findEvenIndex(arr) {
  for(let i = 0; i < arr.length; i++) {
    let rightSum = 0;
    let leftSum =0;
    for(let j = 0; j < i; j++) {
      rightSum += arr[j];
    }
    for(let j = arr.length - 1;  j > i; j--) {
      leftSum += arr[j]
    }
    if(rightSum === leftSum) return i;
  }
  return -1;
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));

//! another solution 
// function findEvenIndex(arr) {
//   let left = 0;
//   let right = arr.reduce((s, n) => s + n, 0);
//   for (let i = 0; i < arr.length; i++) {
//     right -= arr[i];
//     if (left === right) return i;
//     left += arr[i];
//   }
//   return -1;
// }