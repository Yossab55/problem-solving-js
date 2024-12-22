function longestConsec(strArr, k) {
  if(k <= 0 || strArr.length == 0 || k > strArr.length) return "";
  let concatenationStrings = strArr.map((ele, index, arr) => {
    let result = ele;
    for (let i = 1; i < k; i++){
      if(i + index < arr.length)
    result += arr[index + i];
    }
    return result;
  });
  let lengthString = concatenationStrings.map((ele) => ele.length);
  let longestString = Math.max(...lengthString);
  return concatenationStrings[lengthString.indexOf(longestString)];
}

console.log(
  longestConsec(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  )
);
