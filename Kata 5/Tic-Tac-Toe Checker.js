function isSolved(board) {
  let result = 0;
  let results = [checkRows(board),checkColumns(board), checkDiagnose(board), canWePlay(board)]
  for(let i = 0; i < results.length; i++) {
    if(results[i] != undefined) {
      result = results[i];
      break;
    }
  }
  return result;
}
function checkRows(board) {
  let counter = 0;
  for (let i = 0; i < 3; i++) {
    let row = board[i];
    for (let j = 0; j < 3; j++) {
      if (row[j] == 1) counter++;
      if (row[j] == 2) counter--;
    }
    if (counter == 3) return 1;
    if (counter == -3) return 2;
    counter = 0;
  }
}
function checkColumns(board) {
  let counter = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[j][i] == 1) counter++;
      if (board[j][i] == 2) counter--;
    }
    if (counter == 3) return 1;
    if (counter == -3) return 2;
    counter = 0;
  }
}
function checkDiagnose(board) {
  let result = checkRightDiagnose(board);
  result = result === undefined ? checkLiftDiagnose(board) : result;
  return result;
}
function checkRightDiagnose(board) {
  let counter = 0;
  for (let i = 0; i < 3; i++) {
    if (board[i][i] == 1) counter++;
    if (board[i][i] == 2) counter--;
  }
  if (counter == 3) return 1;
  if (counter == -3) return 2;
}
function checkLiftDiagnose(board) {
  let counter = 0;
  for (let i = 2; i >= 0; i--) {
    if (board[2 - i][i] == 1) counter++;
    if (board[2 - i][i] == 2) counter--;
  }
  if (counter == 3) return 1;
  if (counter == -3) return 2;
}
function canWePlay(board) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 0) return -1;
    }
  }
}
console.log(
  isSolved([
    [1, 0, 2],
    [0, 2, 2],
    [2, 1, 0],
  ])
);
