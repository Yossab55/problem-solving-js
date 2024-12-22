function createPhoneNumber(numbers) {
  let firstThreeDigits = numbers.slice(0,3).join("");
  let secondThreeDigits = numbers.slice(3,6).join("");
  let lastFourDigits = numbers.slice(6,11).join("");
  return `(${firstThreeDigits}) ${secondThreeDigits}-${lastFourDigits}`;
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
