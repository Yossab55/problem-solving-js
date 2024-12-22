function tribonacci(signature, lengthOfResultArray) {
  if (lengthOfResultArray === 0) return [];
  if (lengthOfResultArray <= 3) {
    signature.length = lengthOfResultArray;
    return signature;
  }
  lengthOfResultArray -= 3;
  while (lengthOfResultArray > 0) {
    let sumOfLastThreeNumbers = 0;
    for(let i = signature.length - 1 ; i > signature.length - 4; i--) {
      sumOfLastThreeNumbers += signature[i];
    }
    signature.push(sumOfLastThreeNumbers);
    lengthOfResultArray--;
  }
  return signature;
}
console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([1, 1, 1], 1));
//best solution 
// function tribonacci(signature, n) {
//   for (var i = 0; i < n - 3; i++) {
    // iterate n times
//     signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }