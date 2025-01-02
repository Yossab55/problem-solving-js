function score(dice) {
  let counterObject = {};
  let score = 0;
  for (let i = 0; i < dice.length; i++) {
    if (counterObject[dice[i]]) counterObject[dice[i]]++;
    else counterObject[dice[i]] = 1;
  }
  let entries = Object.entries(counterObject);
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][0] == "1") {
      if (entries[i][1] >= 3)
        score += 1000 * parseInt(entries[i][1] / 3) + 100 * (entries[i][1] % 3);
      else score += 100 * (entries[i][1] % 3);
      continue;
    }
    if (entries[i][0] == "5") {
      if (entries[i][1] >= 3)
        score += 500 * parseInt(entries[i][1] / 3) + 50 * (entries[i][1] % 3);
      else score += 50 * (entries[i][1] % 3);
      continue;
    }
    score += Number(entries[i][0]) * parseInt(entries[i][1] / 3) * 100;
  }
  return score;
}

console.log(score([5, 5, 5, 3, 3]));
