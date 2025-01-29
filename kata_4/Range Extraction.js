function solution(list) {
  let result = "";
  let size = list.length;
  for (let i = 1; i < size; i++) {
    let isRangeCheck = false;
    if (list[i] - list[i - 1] == 1) {
      isRangeCheck = isRange(i, list);
    }
    if (isRangeCheck) {
      result += list[i - 1] + "-" + list[isRangeCheck];
      let comma = (isRangeCheck == size - 1) ? "" : ",";
      result += comma;
      i = isRangeCheck + 1;
    } else {
      result += i == size - 1 ? list[i - 1] + "," + list[i] : list[i - 1] + ",";
    }
  }
  return result;
}
function isRange(start, list) {
  let size = list.length;
  let end = false;
  for (let i = start; i < size - 1; i++) {
    if (list[i + 1] - list[i] == 1) end = i + 1;
    else break;
  }
  return end;
}
console.log(
  solution([
    -52, -51, -48, -46, -44, -42, -41, -38, -37, -34, -33, -31, -30, -29, -26,
    -23, -21,
  ])
);
console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
