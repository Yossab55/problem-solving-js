function stringStartWith(str, prefix, caseSensitive = false) {
  if(prefix.length >str.length) return false ;
  
  for (let i = 0; i < prefix.length; i++) {
    if (caseSensitive) {
      if (str[i].toLowerCase() != prefix[i].toLowerCase()) return false;
    } else if (str[i] != prefix[i]) return false;

  }

  return true;
}
console.log(stringStartWith("Yossab hello", "Yossab"));
console.log(stringStartWith("Yossab hello", "yossab", true));
console.log(stringStartWith("Yossab hello", "h"));
