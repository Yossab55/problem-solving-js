function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  if(array1.length == array2.length && array1.length === 0)return true;
  if(array1.length == 0 || array2.length == 0 || array1.length != array2.length) return false;
  let small = array1.sort((a,b) => a-b);
  let large = array2.sort((a,b) => a-b);
  for(let i = 0; i < small.length; i++) {
    if(small[i] * small[i] != large[i]) return false;
  }
  return true;
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
// function comp(array1, array2) {
//   if (array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b);
//   array2.sort((a, b) => a - b);
//   return array1.map((v) => v * v).every((v, i) => v == array2[i]);
// }


