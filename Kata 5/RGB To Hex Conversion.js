function rgb(r, g, b) {
  let RGB = [r, g, b];
  return RGB.map((ele) => {
    if (ele < 0) return 0;
    else if (ele > 255) return 255;
    else return ele;
  })
    .map((ele) => ele.toString(16).toUpperCase())
    .map((ele) => (ele.length > 1 ? ele : "0" + ele))
    .join("");
}
console.log(rgb(148, 0, 211));
