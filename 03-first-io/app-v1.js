// Saturday, 14:50 - August 30 - 2014
//
// Write a program that uses a single synchronous filesystem operation to read a
// file and print the number of newlines it contains to the console (stdout),
// similar to running cat file | wc -l.
//


var fs = require('fs');
//           returns a buffer.
var buffer = fs.readFileSync(process.argv[2]);
// Converts to string, keeping new lines.
var string = buffer.toString();

var arr = string.split('\n');
console.log(arr.length - 1);
