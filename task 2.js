//task 2 (homework):
// aabcccaacac, c -> 5
// how many letters in sting


function getFrequency(string, char) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == char) {
      counter++;
    }
  }
  return counter;
}

console.log(getFrequency('aabcccaacac','c'));