function solution(string) {
  if(string.length <= 1) return string;
  let firstIndexOfSlice = 0;
  let result = [];
  for(let i = 0; i < string.length; i++) {
    if(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
      result.push(string.slice(firstIndexOfSlice, i));
      firstIndexOfSlice = i;
    }
  }
  result.push(string.slice(firstIndexOfSlice))
  return result.join(" ");
}

console.log(solution("camelCasingA"));

