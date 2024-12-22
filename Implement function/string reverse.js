function stringReverse(str) {
  let result = "";
  let indexOfSpace = str.indexOf(" ");

  for (let i = 0; i < str.length; i++) {
    result = str[i] + result ;
  }
  return result;
}

let st = "uys sssss";

console.log(stringReverse(st));
