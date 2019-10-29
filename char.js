function charCount(str) {
  var result = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-zA-z]/g)) {
      if (result[str[i].toLowerCase()] > 0) {
        result[str[i]]++;
        console.log(str[i]);
      } else if (str[i] == " ") {
        continue;
      } else {
        result[str[i].toLowerCase()] = 1;
      }
    }
  }
  return result;
}
charCount("Hello Abiodun!!");
