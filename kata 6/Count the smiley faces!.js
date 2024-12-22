function countSmileys(arr) {
  if(arr.length === 0) return 0
  let regSmileFace = /^(;|:|~|-)(~|-)?(D|\))$/;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (regSmileFace.test(arr[i])) result++;
  }
  return result;
}

console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
console.log(countSmileys([":-)", ";~D", ":-D", ":_D"]));
// function countSmileys(arr) {
//   return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
// }