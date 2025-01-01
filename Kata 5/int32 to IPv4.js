// problem : https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/train/javascript
function int32ToIp(int32) {
  let unSinged = new Uint32Array([int32]).buffer;
  let ipChunks = new Uint8Array(unSinged);
  return ipChunks.reverse().join(".")
}
console.log(int32ToIp(2149583361));
console.log(int32ToIp(32));
console.log(int32ToIp(2 ** 32 - 1));
//notice for my need a js corse about unsinged and uint 32 8 16 