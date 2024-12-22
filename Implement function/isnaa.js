function notANumber(str) {
  let result  = false;
  for (let i of str) {
    if (i.charCodeAt() < 48 || i.charCodeAt() > 57) {
      result = true ;
      break;
    } 
  }
  return result;
}
