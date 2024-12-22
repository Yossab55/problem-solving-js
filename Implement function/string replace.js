function stringReplace(strings, oldString, newString, count = 1) {
  for (let i = 0; i < strings.length; i++) {
    let size = strings[i].length;
    let checkedAll = true
    let checkCount = false ;
    for (let j = 0; j < size; j++) {
      if(strings[i][j] !== oldString[j]) {
        checkedAll = false
      }
    }
    if(checkedAll) {
      strings[i] = newString;
      checkCount++ ;
    }
    if(checkCount === count) break ;

  }

  return strings;
}
function anotherStringReplace(strings, oldString, newString, count = 1) {
  for(let i = 0 ; i<strings.length; i++) {
    if(strings[i] === oldString && count > 0) {
      strings[i] = newString ;
      count -- ;
    }
  }
  return strings;
}
console.log(stringReplace(['yossab', 'ah', 'mahrous', 'ah'], 'ah', 'ahmed', 2))
console.log(anotherStringReplace(['yossab', 'ah', 'mahrous', 'ah'], 'ah', 'ahmed', 2))
