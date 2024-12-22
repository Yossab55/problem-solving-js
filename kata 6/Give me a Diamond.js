function diamond(number) {
  if (number % 2 === 0 || number <= 0) return null;
  let result = [];
  let layers = Math.floor(number / 2);
  let string = ""
  let counterOfSpaces = 1;
  for(let i = 0; i < number; i++) {
    string += "*";
  }
  result.push(string);
  for (let i = 0; i < layers; i++) {
    string = "";
    number --;
    let counter = counterOfSpaces;
    for(let j = 0; j < number; j++) {
      if(counter != 0) {
        string += " ";
        counter --
        continue;
      }
      string += "*" 
    }
    counterOfSpaces++
    result.unshift(string);
    result.push(string);
  }
  return result.join("\n") + "\n";
}
console.log(diamond(5));
console.log(diamond(1));
console.log(diamond(10));

// function diamond(n) {
//   if (n <= 0 || n % 2 === 0) return null;
//   str = "";
//   for (let i = 0; i < n; i++) {
//     let len = Math.abs((n - 2 * i - 1) / 2);
//     str += " ".repeat(len);
//     str += "*".repeat(n - 2 * len);
//     str += "\n";
//   }
//   return str;
// }