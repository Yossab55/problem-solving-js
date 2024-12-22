function lastDigit(n, m) {
  let lastDigit = n % 10n;
  let reminder = m % 4n;
  // 4n because if m % 4 == 0 it should be 0
  let thePower = reminder === 0n && m !== 0n ? 4n : reminder;
  return lastDigit ** thePower % 10n;
  // this is to large so if you notice it's always repeat it self after 4 times
  /*if (n == 0n) return 0n;
  if (m == 0n) return 1n;
  if (m == 1n) return n % 10n;
  let lastDigit = n % 10n;
  if (lastDigit == 0n) return 0n;
  if (lastDigit == 1n) return 1n;
  if (lastDigit == 2n) {
    let reminderOfPower = m % 4n;
    if (reminderOfPower == 0n) return 6n;
    if (reminderOfPower == 1n) return 2n;
    if (reminderOfPower == 2n) return 4n;
    if (reminderOfPower == 3n) return 8n;
  }
  if (lastDigit == 3n) {
    let reminderOfPower = m % 4n;
    if (reminderOfPower == 0n) return 1n;
    if (reminderOfPower == 1n) return 3n;
    if (reminderOfPower == 2n) return 9n;
    if (reminderOfPower == 3n) return 7n;
  }
  if (lastDigit == 4n) {
    let reminderOfPower = m % 2n;
    if (reminderOfPower == 0n) return 6n;
    if (reminderOfPower == 1n) return 4n;
  }
  if (lastDigit == 5n) return 5n
  if (lastDigit == 6n) return 6n
  if (lastDigit == 7n) {
    let reminderOfPower = m % 4n;
    if (reminderOfPower == 0n) return 1n;
    if (reminderOfPower == 1n) return 7n;
    if (reminderOfPower == 2n) return 9n;
    if (reminderOfPower == 3n) return 3n;
  }
  if (lastDigit == 8n) {
    let reminderOfPower = m % 4n;
    if (reminderOfPower == 0n) return 6n;
    if (reminderOfPower == 1n) return 8n;
    if (reminderOfPower == 2n) return 4n;
    if (reminderOfPower == 3n) return 2n;
  }
  if (lastDigit == 9n) {
    let reminderOfPower = m % 2n;
    if (reminderOfPower == 0n) return 1n;
    if (reminderOfPower == 1n) return 9n;
  }
  */
}

console.log(lastDigit(609n, 186n)); //1
console.log(
  lastDigit(
    1606938044258990275541962092341162602522202993782792835301377n,
    2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376n
  )
);
