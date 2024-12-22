function sqInRect(lng, width) {
  if(lng == width) return null;
  let min = Math.min(lng, width)
  result = [min];
  let space = lng * width - (min * min);
  while(space != 0) {
    let nextRec = Math.floor(Math.sqrt(space));
    result.push(nextRec);
    space -= nextRec * nextRec;
  }
  return result;
}


console.log(sqInRect(20,14))
// function sqInRect(lng, wdth) {
//   let arr = [];
//   if (lng === wdth) return null;
//   while (lng > 0 && wdth > 0) {
//     arr.push(lng > wdth ? wdth : lng);
//     lng > wdth ? (lng -= wdth) : (wdth -= lng);
//   }
//   return arr;
// }
