function findNb(volume) {
  let sumOfVolumes = 1;
  let NumberOfCubes = 1;
  while(sumOfVolumes < volume) {
    NumberOfCubes++;
    sumOfVolumes += NumberOfCubes ** 3;
  }
  if(sumOfVolumes === volume) return NumberOfCubes;
  if(sumOfVolumes > volume) return -1
}
//! time out error
console.log(findNb(1071225));
console.log(findNb(24723578342962));
