/**
 * Read a File using filesystem
 * fs.readFile(‘<fileName>’,<callbackFunction>)
 * 
 * Callback function is provided as an argument to readFile function. 
 * When reading the file is completed (could be with or without error), 
 * call back function is called with err(if there is an error reading file) 
 * and data(if reading file is successful)
 */ 

// include file system module
var fs = require('fs');
 
/**
 * read file forth.html
*/
fs.readFile('files/forth.html', (err, data) => { 
        if (err) throw err;
        console.log(data.toString('utf8'))
}); 