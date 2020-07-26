/**
 * fs.rename(old_file_path, new_file_path, callback_function)
 *
 * To rename a file asynchronously in Node.js using Node FS, use rename() function
 * Rename "first.txt" to "changed.txt"
*/

var fs = require('fs');
 
fs.rename('files/first.txt', 'files/changed.html', function (err) {
  if (err) console.log(err);

  console.log('File Renamed.');
}); 

//More research needed