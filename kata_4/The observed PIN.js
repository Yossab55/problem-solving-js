//@ problem in codeWars = https://www.codewars.com/kata/5263c6999e0f40dee200059d
//@ my solve in github = https://github.com/Yossab55/problem-solving-js/blob/main/kata_4/The%20observed%20PIN.js
function getPINs(observed) {
  let numbers = String(observed).split("");
  let adjacentArray = ResolveAdjacent(numbers);
  console.log(adjacentArray);
  return getProbabilities(adjacentArray);
}
function getProbabilities(adjacentArray, past = [], index = 0) {
  if (adjacentArray.length - 1 == index) {
    let probabilities = [];
    let arr = adjacentArray[index];
    for (let i = 0; i < arr.length; i++) {
      probabilities.push(past.join("") + arr[i]);
    }
    return probabilities;
  }

  let around = adjacentArray[index];
  let result = [];
  for (let i = 0; i < around.length; i++) {
    past[index] = around[i];
    result.push(...getProbabilities(adjacentArray, past, index + 1));
  }
  return result;
}
function ResolveAdjacent(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(getAdjacent(numbers[i]));
  }
  return result;
}
function getAdjacent(number) {
  const adjacent = {
    1: [1, 2, 4],
    2: [1, 2, 3, 5],
    3: [2, 3, 6],
    4: [1, 4, 5, 7],
    5: [2, 4, 5, 6, 8],
    6: [3, 5, 6, 9],
    7: [4, 7, 8],
    8: [5, 7, 8, 9, 0],
    9: [6, 8, 9],
    0: [0, 8],
  };
  return adjacent[number];
}

console.log(getPINs("11"));
console.log(getPINs("8"));
console.log(getPINs(369));
console.log([
  "339",
  "366",
  "399",
  "658",
  "636",
  "258",
  "268",
  "669",
  "668",
  "266",
  "369",
  "398",
  "256",
  "296",
  "259",
  "368",
  "638",
  "396",
  "238",
  "356",
  "659",
  "639",
  "666",
  "359",
  "336",
  "299",
  "338",
  "696",
  "269",
  "358",
  "656",
  "698",
  "699",
  "298",
  "236",
  "239",
]);
