//@ problem in codeWars = https://www.codewars.com/kata/51c8e37cee245da6b40000bd
//@ my solve in github =
function solution(text, markers) {
  if (markers.length == 0) {
    return text.trimEnd();
  }
  let chunks = text.split("\n");
  let collection = [];
  for (let i = 0; i < chunks.length; i++) {
    let indexOfMarker = getIndexFrom(markers, chunks[i]);
    collection.push(getRemainString(chunks[i], indexOfMarker));
  }
  return collection.join("\n");
}
function getIndexFrom(markers, word) {
  let index = Infinity
  for (let i = 0; i < markers.length; i++) {
    let checkIndex = word.indexOf(markers[i]);
    if (checkIndex != -1) {
      if(checkIndex < index) index = checkIndex;
    }
  }
  return (index == Infinity) ? word.length : index;
}
function getRemainString(word, index) {
  let result = "";
  for (let i = 0; i < index; i++) {
    result += word[i];
  }
  return result.trimEnd();
}
console.log(solution("aa ! bb\ncc# dd", ["#", "!"]));
console.log(
  solution(
    "DO!B ~gOBT*DInc/\n!cQjlTzYe+grPH+tYQ*~+",[
    "~",
    "!",
    "\\",
    "*",
    "/",
    "^",
    "#",
    "+",
    "-",
    "%"
  ])
);
// clever one 
// function solution(input, markers) {
//   return input
//     .split("\n")
//     .map((str) => markers.reduce((s, m) => s.split(m)[0], str).trimEnd())
//     .join("\n");
// }