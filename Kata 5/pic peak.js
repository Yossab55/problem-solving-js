function pickPeaks(arr) {
  let result = {
    pos: [],
    peaks: [],
  };
  for (let i = 1; i < arr.length; i++) {
    if (checkPeaks(arr, i)) {
      result.pos.push(i);
      result.peaks.push(arr[i]);
    }
  }
  return result;
}
function checkPeaks(arr, position) {
  // case 1 [3, 6, 4]
  if (arr[position - 1] < arr[position] && arr[position + 1] < arr[position])
    return true;
  // case 2 [1, 2, 2, 2, 1]
  if (arr[position - 1] < arr[position] && arr[position + 1] == arr[position]) {
    if(checkPlateaus(arr, position)) return true;
  }
  return false
}
function checkPlateaus(arr, position) {
  iterate = position + 1;
  while (arr[iterate] == arr[position] && iterate < arr.length) {
    iterate++;
  }
  if (arr[iterate] < arr[position]) return true;
}
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));
console.log(pickPeaks([1, 2, 2, 2, 2, 2, 2, 2, 2,1]));
console.log(pickPeaks([1, 2, 2, 2, 3]));
console.log(pickPeaks([1, 2, 2, 2, 2]));
