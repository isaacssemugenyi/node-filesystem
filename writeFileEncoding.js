/**
 *  Writing data with different encoding format
 * ascii
 * utf8
 * base64
 *  fs.writeFile(filename, data, [encoding], [callback_function])
 */

 //Write Content to file with specified encoding
 // include file system module
 
 var data = "This is some data that has been created";
 
 // write data to file forth
 fs.writeFile('files/Fifth.txt',data, 'ascii',
     // callback function that is called after writing file is done
     function(err) { 
         if (err) throw err;
         // if no error
         console.log("Data is written to file successfully.")
 }); 
 