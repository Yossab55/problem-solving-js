const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

// this means at the beginning of the string look forward for anyChar followed by a-z one digit == (at least one)
// thin look at the beginning of the string for any char A-Z at least one
// thin look at the beginning of the string for 0-9 at least one 
// this  (?=.*[a-z])(?=.*[A-Z])(?=.*\d) is just the beginning 
// if all are true tne get a string repeated 6 times or more [a-zA-Z\d]{6,}

console.log("fjd3IR9".match(REGEXP));
console.log("djI38D55@@".match(REGEXP));
//! study this again !!