var uniqueInOrder = function (iterable) {
  if(!iterable) return [];
  let splitArray = (Array.isArray(iterable)) ? iterable : iterable.split("");
  let result = [splitArray[0]];
  for(let i = 1; i < splitArray.length; i++) {
    if(splitArray[i] !== splitArray[i - 1]) 
      result.push(splitArray[i]);
  }
  return result;
};
console.log(uniqueInOrder('AAAABBBCcDAABBB'));
console.log(uniqueInOrder([1,2,2,2]));
