function high(x) {
  let words = x.split(" ");
  let wordScores = words.map((ele) =>
    ele
      .split("")
      .map((ele) => ele.charCodeAt() - 96)
      .reduce((a, b) => a + b)
  );
  let maxScore = Math.max(...wordScores);
  for(let i = 0; i < wordScores.length; i++) {
    if(maxScore === wordScores[i]) return words[i];
  }
  return null;
}

console.log(high("aa b"));
// function high(s) {
//   let as = s
//     .split(" ")
//     .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
//   return s.split(" ")[as.indexOf(Math.max(...as))];
// }