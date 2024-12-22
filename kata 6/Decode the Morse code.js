decodeMorse = function (morseCode) {
  const MORES_CODE = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "...---...": "SOS",
    "-.-.--": "!",
    ".-.-.-": ".",
  };
  let arrayChars = morseCode.trim().split("");
  let morseWords = [];
  let counterSpaces = 0;
  let stringWord = "";
  for (let i = 0; i < arrayChars.length; i++) {
    if (arrayChars[i] == " " && counterSpaces == 0) {
      counterSpaces++;
      morseWords.push(stringWord);
      stringWord = "";
      continue;
    }
    counterSpaces = 0;
    stringWord += arrayChars[i];
  }
  morseWords.push(stringWord);
  return morseWords
    .map((ele) => (MORES_CODE[ele] ? MORES_CODE[ele] : " "))
    .join("");
};

console.log(decodeMorse(".... . -.-- "));
// decodeMorse = function (morseCode) {
//   function decodeMorseLetter(letter) {
//     return MORSE_CODE[letter];
//   }
//   function decodeMorseWord(word) {
//     return word.split(" ").map(decodeMorseLetter).join("");
//   }
//   return morseCode.trim().split("   ").map(decodeMorseWord).join(" ");
// };