function persistence(num) {
  if(num < 10) return 0;
  let numberDigits = String(num).split("").map(ele => Number(ele)). reduce((a,b) => a*b);
  
  return 1 + persistence(numberDigits);
}

console.log(persistence(999))
