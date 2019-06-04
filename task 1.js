// task 1
// 'qqqwwweeeeeeet5555qqqq' -> 'q3w3e7t154q4'
// compress string

function getFrequency(string) {		
   var output = '';				
   var counter = 1;
   var char = string.charAt(0);	
   for (var i = 1; i <= string.length; i ++) { 
       var currentChar = string.charAt(i);	
       if (char == currentChar) {	
		      counter++;
       } else {
         output = output + char + counter; 
	   counter = 1;
	   char = currentChar;	
       }
   }

   return output;
}

console.log(getFrequency('qqqwwweeeeeeet5555qqqq')) //'q3w3e7t154q4'