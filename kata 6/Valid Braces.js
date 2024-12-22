// i don't solve this solution but i learned from it
function validBraces(braces) {
  let matches = {"{" : "}", "[" : "]", "(" : ")"};
  let queue = [];
  for(let brace of braces) {
    if(matches[brace]) queue.push(brace);
    else {
      if(matches[queue.pop()] === brace) continue;
      else return false;
    }
  }
  return queue.length === 0;
}
console.log(validBraces("[({})](("));
console.log(validBraces("[(])"));
console.log(validBraces("(){}[]"));
console.log(validBraces("()({})[]"));
console.log(validBraces("()))"));
console.log(validBraces("(({{[[]]}}))"));
