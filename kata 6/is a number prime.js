function isPrime(number) {
  if(number <= 1) return false;  
  if(number == 2 || number == 3 || number == 5 || number == 7) return true;
  let sqr = parseInt(Math.sqrt(number));
  if(sqr === 1) return true;
  for(let i = 2; i <= sqr; i++) {
    if(number % i  === 0) return false;
  }
  return true;
}


