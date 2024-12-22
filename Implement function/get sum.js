function sumArray(numbers, operation = "+") {
  let result = operation == "*" || operation == "/" ? 1 : 0;

  for (let i = 0; i < numbers.length; i++) {
    switch (operation) {
      case "+":
        if (typeof numbers[i] == "string") {
          continue;
        }
        result += numbers[i];

        break;
      case "-":
        if (typeof numbers[i] == "string") {
          continue;
        }
        result -= numbers[i];

        break;
      case "*":
        if (typeof numbers[i] == "string") {
          continue;
        }
        result *= numbers[i];
        break;
      case "/":
        if (typeof numbers[i] == "string" || numbers[i] === 0) {
          continue;
        }
        result /= numbers[i];
        break;
    }
  }
  return result;
}

console.log(sumArray([10, 20, 30]));
