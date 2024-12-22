function alphabetPosition(text) {
  let lowerText = text.toLowerCase();
  let result = lowerText
    .split("")
    .map((element) => {
      let asciiNumber = element.charCodeAt();
      if (asciiNumber > 96 && asciiNumber < 123)
        return element.charCodeAt() - 96;
      return "";
    })
    .filter((element) => (element === "" ? false : true))
    .join(" ");
  return result;
}

console.log(alphabetPosition('The O"'));
