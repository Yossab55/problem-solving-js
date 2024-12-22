function getSubString(str, start= 0, end=str.length, addEnd = false, countSpace=true) {
  let result = "";
  if(end > str.length) end = str.length;
  
  for(let i = start ; i< end; i++) {
    if(!(countSpace) && str[i] === " "){
      end++;
      if(end >str.length) end  = str.length;
    } 
    result += str[i];
  }

  if(addEnd) result+= str[end]
  return result ;
}

console.log(getSubString("yossab samouel " , 0, 8 , true, false))