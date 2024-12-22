function isValidIP(str) {
  let ipReg = /^((\d|[1-9][0-9]|1\d{2}|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/;
  return ipReg.test(str)
}

console.log(isValidIP("12.34.56"));
