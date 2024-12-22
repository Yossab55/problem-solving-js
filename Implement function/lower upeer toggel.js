function toUpperCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
      result += String.fromCharCode(str[i].charCodeAt() - 32);
    } else {
      result += str[i];
    }
  }
  return result;
}
function toLowerCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
      
      result += String.fromCharCode(str[i].charCodeAt() + 32);
    } else {
      result += str[i]
    }
  }
  return result;
}
function toggleCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {

    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
      
      result += String.fromCharCode(str[i].charCodeAt() + 32);

    }  else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {

      result += String.fromCharCode(str[i].charCodeAt() - 32);

    } else {
      result += str[i];
    }
  }
  return result;
}
