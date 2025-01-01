function ipsBetween(start, end) {
  let bigger = end.split(".");
  let small = start.split(".");
  let sum = 0;
  const SIZE = 4;
  const MAXiP = 256;
  for(let i = 0; i < SIZE; i++) {
    let between = (bigger[i] - small[i]) * (MAXiP ** (SIZE - 1 - i));
    console.log(between)
    sum += between
  }
  return sum;
}

console.log(ipsBetween("10.0.0.0", "10.0.1.00"));
console.log(ipsBetween("10.11.12.13", "10.12.1.0"));
