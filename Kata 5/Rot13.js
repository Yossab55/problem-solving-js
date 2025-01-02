function rot13(message) {
  return message
    .split("")
    .map((ele) => {
      let code = ele.charCodeAt();
      if (code >= 65 && code <= 90) {
        code += 13;
        return code > 90
          ? String.fromCharCode(65 + (code % 90) - 1)
          : String.fromCharCode(code);
      }
      if (code >= 97 && code <= 122) {
        code += 13;
        return code > 122
          ? String.fromCharCode(97 + (code % 122) - 1)
          : String.fromCharCode(code);
      } else return ele;
    })
    .join("");
}

console.log(rot13("a"));
console.log(rot13("Test"));
