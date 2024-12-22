function orderWeight(string) {
  if(string.trim() === " " || string == "") return null
  return string.split(" ").map((ele) => {
    return {
      val: ele,
      key: ele
        .split("")
        .map((ele) => Number(ele))
        .reduce((a, b) => a + b),
    };
  }).sort((a, b) => {
    return a.key == b.key ?
    a.val.localeCompare(b.val) : 
    a.key - b.key
  }).map(ele => ele.val).join(" ") 
}

console.log(orderWeight("19 2 1003 99 100 101 55 67 1 20"));
