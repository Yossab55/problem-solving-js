function isPangram(string) {
  if(string.length < 26) return false;
  let charsShowTimes = {}
  string = string.toLowerCase().match(/[a-z]/g).join("");
  for(let i = 0; i < string.length; i++) {
    if(charsShowTimes[string[i]] === undefined) charsShowTimes[string[i]] = 1;
    else charsShowTimes[string[i]]++;
  }
  return Object.entries(charsShowTimes).length >= 26 ? true : false;
}
console.log(isPangram("The qui11ck brown fox umps over the lazy dog"));
//! better solution
// function isPangram(string) {
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
//     return string.indexOf(x) !== -1;
//   });
// }