function domainName(url) {
  let regUrl = /(\w+)((-{1,})?\w+){1,}/gi;
  return url.match(regUrl).filter((ele) => {
    if (ele == "http" || ele == "https") return false;
    if (ele == "www") return false;
    if (ele == "com") return false;
    return true;
  })[0];
}

console.log(domainName("http://google.com"));
console.log(domainName("http://www.google.co.jp"));
console.log(domainName("google-com.co.jp"));
console.log(domainName("https://www.lor--ijezhz-sxqdv-zwsf7kd0.io/users"));
console.log(domainName("http://0hgduvfd7hogmk3pco0-hky-262.co.uk/index.php"));
console.log(domainName("https://www.f-gb9yokj-yj4r2me.tv/default.html"));


// function domainName(url) {
//   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }