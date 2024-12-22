function countWords(st, char = " ", caseSensitive = true) {
  let result = 0;
  if (!caseSensitive) {
    st = st.toUpperCase();
    char = char.toUpperCase();
  }
  
  for (let i = 0; i < st.length; i++) if (st[i] == char) result++;

  return result;
}

console.log(countWords("my name is yossabS samouel", "s"));
