function generateHashtag(str) {
  if (str.trim().length == 0) return false;
  let result =
    "#" +
    str
      .trim()
      .split(" ")
      .filter((ele) => (ele == "" ? false : true))
      .map((ele) => {
        ele.split("");
        return ele[0].toUpperCase() + ele.slice(1);
      })
      .join("");
  return result.length > 140 ? false : result;
}



