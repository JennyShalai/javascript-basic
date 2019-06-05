//// HASHMAP ////

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


