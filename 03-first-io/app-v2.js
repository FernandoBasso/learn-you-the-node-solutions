// Saturday, 14:50 - August 30 - 2014
//
// Write a program that uses a single synchronous filesystem operation to read a
// file and print the number of newlines it contains to the console (stdout),
// similar to running cat file | wc -l.
//


var fs = require('fs');
//           returns a buffer.
var len = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;

console.log(len);

//
// If you're looking for an easy way to count the number of newlines in a
// string, recall that a JavaScript String can be .split() into an array of
// substrings and that '\n' can be used as a delimiter. Note that the test file
// does not have a newline character ('\n') at the end of the last line, so
// using this method you'll end up with an array that has one more element than
// the number of newlines.
//
