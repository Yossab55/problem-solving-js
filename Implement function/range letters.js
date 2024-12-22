function rangeLetters (start = "0", end="z") {

  for(let i = start.charCodeAt(); i<= end.charCodeAt(); i++) {
    
    console.log(`The Letter Is : ${String.fromCharCode(i)} And It's ASCII Value is : ${i}`);
  }
}


rangeLetters("0");