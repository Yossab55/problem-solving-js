function alphanumeric(string) {
  let regex = /^(?!.*\s)(?!.*_)\w+$/ig
  return regex.test(string)
}

console.log(alphanumeric("Mazinkaiser"));