function findUniq(arr) {
  let twoItems = arr.slice(1,3);
  let firstDigit = arr[0];
  let simileNumber = null;
  for (let i = 0; i < twoItems.length; i++) {
    if (firstDigit === twoItems[i]) simileNumber = firstDigit;
  }
  if(simileNumber === null) return firstDigit;
  for(let i = 1; i < arr.length; i++) {
    if(simileNumber != arr[i]) return arr[i]
  }
}
console.log(findUniq([0, 0, 0.55, 0, 0]));

// ! best 
// function findUniq(arr) {
//   let twoItems = arr.slice(1, 3);
//   let firstDigit = arr[0];
//   let simileNumber = null;
//   for (let i = 0; i < twoItems.length; i++) {
//     if (firstDigit === twoItems[i]) simileNumber = firstDigit;
//   }
//   if (simileNumber === null) return firstDigit;
//   for (let i = 1; i < arr.length; i++) {
//     if (simileNumber != arr[i]) return arr[i];
//   }
// }