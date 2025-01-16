// curried function: https://youtu.be/I4MebkHvj8g?si=wD7VaxrVmNFII9m_
/**
 * to solve this challenge:
 * * curry function
 * * understand what is closure 
 * * js toString() and valueOf() methods in function
 * this is was the answer of claud ai
 */
function add(n, args) {
  args.push(n);
}

// console.log(add(1)(2))
console.log(add(1)(2)(3));
