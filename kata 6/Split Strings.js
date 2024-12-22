function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
  }
  if (str.length % 2) result[result.length - 1] += "_";
  return result;
}

console.log(solution("abcd"));
console.log(solution("abc"));
