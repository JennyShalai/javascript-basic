// task 4 (homework)
// aaannnngaakkk -> a5n4g1k3 with O(n)
// count all chars in sring (using hash)

function getFrequency(string) {

  var output = '';
  var map = {};
  
  for (var i = 0; i<string.length; i++) {
    if (string[i] in map) {
      map[string[i]] += 1 ;
    } else {
      map[string[i]] = 1
    }
  }
  
  for (var key in map) {
    output = output + key + map[key];
  }
  
  return output;
}

console.log(getFrequency('aaannnngaakkk')); //a5n4g1k3