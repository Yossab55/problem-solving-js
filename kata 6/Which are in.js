function inArray(checkedWords, words) {
  return checkedWords.filter(ele => {
    for(let i = 0; i < words.length; i++) {
      if(words[i].indexOf(ele) != -1) return true;
    }
    return false;
  }).sort((a, b) => {
    for(let i = 0; i < a.length; i++) {
      if( a[i].charCodeAt() - b[i].charCodeAt()) return a[i].charCodeAt() - b[i].charCodeAt();
    }
  })
}

console.log( inArray(
  ["arp", "aeve", "strong"],
  ["lively", "alive", "harp", "sharp", "armstrong", "aeve"]
));
