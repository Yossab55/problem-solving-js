function pushItem(arr, item) {
  if (typeof item != "object") {
    arr[arr.length] = item;
  } else {
    let size = arr.length;
    for (let i = 0; i < item.length; i++) {
      arr[i + size] = item[i];
    }
  }
  return arr;
}

console.log(pushItem([1, 2, 3, 4], 5));
console.log(pushItem([1, 2, 3, 4], [5, 10, 4, 6]));
