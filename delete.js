/**
 * Delete a File using unlink() or unlinkSync() functions
 * FS unlink(path, callback) can be used for asynchronous 
 * file operation and unlinkSync(path) can be used for synchronous file operation
*/

//Require the fs module
var fs = require('fs');

//Delete file asynchronously using unlink() function
//Once an attempt is made to delete the file, callback function is called with error (as argument) if any
//fs.unlink('filePath', 'callback Function')

fs.unlink('files/forth.html', function (err) {
    if (err) console.error(err);
    // if no error, file has been deleted successfully
    console.log('File deleted!');
});  



//To delete file synchronously, use unlinkSync() function
//fs.unlinkSync(filePath)

// delete file named 'sample.txt' Synchronously
fs.unlinkSync('sample.txt');
console.log('File deleted!'); 

// where filePath is a String that represents path of the file to be deleted

//if file specified to delete does not exist, (Error: ENOENT: no such file or directory)