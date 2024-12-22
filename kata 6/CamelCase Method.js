String.prototype.camelCase = function () {
  if(this.length === 0) return ""
  let string = this.split("")
  let result = string[0].toUpperCase();
  for(let i = 1; i < string.length; i++) {
    if(string[i] === " ") {
      result += string[i + 1].toUpperCase();
      i++
      continue
    }
    result += string[i]
  }
  return result;
};


console.log('test case'.camelCase())
console.log(''.camelCase())
