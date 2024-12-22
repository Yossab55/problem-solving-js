

console.log(zFill("100",5,"!"));

function zFill(str, width ,fill = "0") {

  let maxLength = str.length;
  

  for(let i = 0 ; i< width-maxLength ; i++) {
    str = fill + str;
  }
  return str;
}

