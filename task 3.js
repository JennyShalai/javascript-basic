// task 3
// aabcccccaaa -> a5b1c6, 
// count all chars in given string
// inefficient way (no hashmap)

function getFrequency(string) {
  var output = '';
  var counter = 1;
  var seenChars = [];
  for (var i = 0; i < string.length; i++) {
    var currentChar = string[i];
    if (!seenChars.includes(currentChar)) {
      seenChars.push(currentChar);
      for (var j = i+1; j < string.length; j++) {
        if (currentChar === string[j]) {
          counter++;
        }
      }
      output = output + currentChar + counter;
      counter = 1;
    }
  }
  return output;
}

console.log(getFrequency('aaannnngaa')); //a5n4g1
