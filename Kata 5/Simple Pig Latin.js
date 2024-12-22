function pigIt(str) {
  return str
    .split(" ")
    .map((ele) => {
      if (ele == "!" || ele == "?" || ele == ".") return ele;
      let result = "";
      let size = ele.length;
      for (let i = 1; i < size; i++) result += ele[i];
      result += ele[0] + "ay";
      return result;
    })
    .join(" ");
}

console.log(pigIt("Pig latin is cool !"));
