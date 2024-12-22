function join_js(arr, separator = ", ") {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i != arr.length - 1) result += separator;
  }
  return result;
}

function split(str, separator = " ") {
  let obj = {
    result: [],
    tempString: "",
  };
  for (let i = 0; i < str.length; i++) {
    if (separator.length > 1) {
      let start = i;
      let counter = 0;
      for (let j = 0; j < separator.length; j++, start++) {
        if (str[start] == separator[j]) {
          counter++;
        }
      }
      if (counter == separator.length) {
        restart(obj);
        i+= separator.length
      }
    } else if (str[i] == separator) {
      restart(obj);
      continue;
    }

    obj.tempString += str[i];
  }
  if (obj.tempString != "") obj.result.push(obj.tempString);
  return obj.result;
}
function restart(obj) {
  obj.result.push(obj.tempString);
  obj.tempString = "";
}
console.log(join_js(["ahmed", "yossab", "mahrous"]));
console.log(join_js(["ahmed", "yossab", "mahrous"], " | "));
console.log(split(join_js(["ahmed", "yossab", "mahrous"])));
console.log(split(join_js(["ahmed", "yossab", "mahrous"]), ", "));
console.log(split(join_js(["ahmed", "yossab", "mahrous"], " | "), " | "));
