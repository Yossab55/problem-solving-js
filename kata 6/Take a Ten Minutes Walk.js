function isValidWalk(walk) {
  if (walk.length > 10 || walk.length < 10) return false;
  let result = walk
    .map((ele) => {
      if (ele == "n") return 1;
      if(ele == 'w') return 2;
      if(ele == 's') return -1;
      return -2;
    })
    .reduce((a, b) => a + b);
    if(result ===0 ) {
      // check if the palse
      return true;
    }
  return  false;
}
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "e"]));
