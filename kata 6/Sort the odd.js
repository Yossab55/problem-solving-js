function sortArray(array) {
  let size = array.length; 
  let result = [];
  for(let i = 0; i < size; i++) {
    if(array[i] % 2) {
      for(let j = 0; j < size; j++) {
        if(array[j] % 2 ) {
          if(array[i] < array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        }
      }
    }
  }
  return array;
}
console.log(sortArray([5, 8, 6, 3, 4, 7]));
//function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }