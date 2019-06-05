//// STRING
// creat
var string = '';

// modify
var string = string + valueOMGofAnyType;
var string = str1.concat(str2);
// multiplying 
var doubleString = string.repeat(2);

// number of char in string
var length = string.length

// replace
var string = string.replace('whatToReplace', 'newValue')

// substring
var subString = string.slice(fromIndex, toIndex);

// char at specific position
var char = string.charAt(3);
// other build-in functions
var string = 'Hello world!';
var booleanCheck = string.startsWith('Hello');
var booleanCheck = string.endsWith('world!');
var booleanCheck = string.includes('world!');
// find the first occurrence of the letter in a string
var charOccurrence = str.indexOf(char)
var charOccurrence = str.indexOf(char, position)
// last coourrence of the letter or string
var charLastOccurrence = str.lastIndexOf(char)
// position of the match
var number = string.search('value'); // -1 if not found

// array of substrings
var array = string.split('valueOfSeparator')

//// ARRAY

//// HASH MAP
// creat
var hash = {};

// add key-value
hash[key] = value;

// modify value
hash[key] = [newValue];
hash[key] += 1;

// loop through
for (var key in hash) {
	console.log(hash[key]);
}


