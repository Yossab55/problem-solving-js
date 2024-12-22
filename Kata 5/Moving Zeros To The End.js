function moveZeros(arr) {
  let result = [];
  let arrayOfZeros = []; 
  let size = arr.length;
  for(let i = 0; i < size; i++) {
    (arr[i] === 0)? arrayOfZeros.push(arr[i]) : result.push(arr[i]);
  }
  result.push(...arrayOfZeros)
  return result;
}


console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
