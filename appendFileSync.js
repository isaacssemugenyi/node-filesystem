/**
 * To append data to file in Node.js, use Node FS appendFile() function 
 * for asynchronous file operation or Node FS appendFileSync() function for 
 * synchronous file operation.
 * 
 * fs.appendFileSync(filepath, data, options);
 * 
 * filepath [mandatory] is a String that specifies file path
 * data [mandatory] is what you append to the file
 * options [optional] to specify encoding/mode/flag
*/

var fs = require('fs');
 
var data = "\nLearning FileSystem in nodejs";
 
// append data to file
fs.appendFileSync('sample.txt',data, 'utf8');
console.log("Data is appended to file successfully.") 

