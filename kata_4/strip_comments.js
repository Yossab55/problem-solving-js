function solution(text, markers) {
  if(markers.length == 0) {
    return text.trimEnd();
  }
  let chunks = text.split("\n");
  let collection = []
  for(let i = 0; i < chunks.length; i++) {
    let splittedOnSpace = chunks[i].split(' ');
    let tempArr = [];
    for(let j = 0; j < splittedOnSpace.length; j++) {
      console.log(splittedOnSpace[j])
      if(markers.indexOf(splittedOnSpace[j]) != -1) {
        break;
      }
      tempArr.push(splittedOnSpace[j]);
    }
    collection.push(tempArr.join(' '));
  }
  return collection.join('\n');
}

console.log(solution("aa ! bb\ncc # dd", ["#", "!"]));
console.log(solution("aa ! bb cc dd ", []));
