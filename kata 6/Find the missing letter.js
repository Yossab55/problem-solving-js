function findMissingLetter(array) {
  let asciiValues = array.map((ele) => ele.charCodeAt());
  for (let i = 0; i < asciiValues.length; i++) {
    if (asciiValues[i] + 1 !== asciiValues[i + 1])
      return String.fromCharCode(asciiValues[i] + 1);
  }
  return null;
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
