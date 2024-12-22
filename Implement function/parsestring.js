
function parseQueryString(st) {
  let result = "";
  let maxPad = 0;
  let counter = 0;
  for (let i = 0; i < st.length; i++) {
    counter++;
    if (st[i] == "=") {
      if (maxPad < counter) maxPad = counter;
      counter = 0;
    }
    if(st[i] == "&") counter = 0;
  }
  counter = 0; 
  for (let i = 0; i < st.length; i++) {
    counter ++
    if (st[i] == "=") {
      if(counter != maxPad) {
        result += padding(result, maxPad - counter);
        counter = 0 ;
      }
      result += ": ";
      continue;
    }
    if (st[i] == "&") {
      counter = 0;
      result += "\n";
      continue;
    }
    result += st[i];
  }
  return result;
}

function padding(st, size) {
  let result ="";
  for(i = 0 ; i<size; i++) {
    result += " ";
  }
  return result ;
}

console.log(parseQueryString("name=Osama&age=43&country of user=Egypt"));
