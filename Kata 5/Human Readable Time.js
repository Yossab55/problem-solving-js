function humanReadable(seconds) {
  let result = "";
  let hours = Math.floor(seconds / 3600);
  let remindSeconds = seconds - hours * 3600;
  result += hours < 10 ? `0${hours}:` : `${hours}:`;
  let minutes = Math.floor(remindSeconds / 60);
  remindSeconds = remindSeconds - minutes * 60;
  result += minutes < 10 ? `0${minutes}:` : `${minutes}:`;
  result += remindSeconds < 10 ? `0${remindSeconds}` : `${remindSeconds}`;
  return result;
}
console.log(humanReadable(359999));
