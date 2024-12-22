function in_array(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) return true;
  }
  return false;
}

let array = [1, 2, 3, 4, 5];
console.log(in_array(array, 1));
console.log(in_array(array, 5));
console.log(in_array(array, 7));