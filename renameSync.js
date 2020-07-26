/**
 *  If there are no further tasks related to the file after renaming, rename file asynchronously, 
 * else rename it synchronously
 * 
 * Synchronous Operation costs execution time. So, based on your requirement, 
 * plan to use either rename() or renameSync().
 * 
 * fs.renameSync(old_name(file_path), new_name(file_path))
 * 
 * new_file_path (is a String and Mandatory) :  The new file path you would like to assign
 * old_file_path (is a String and Mandatory) : Path to the file whose name is to be changed
 * 
 * callback_function : When file renaming operation is done, Callback Function is called with an error object. 
 * (If there is no error, error object holds null value)
*/

var fs = require('fs');
 
// fs.renameSync(old_name(file_path), new_name(file_path))
fs.renameSync('second.html', 'first.html');
console.log('File Renamed.'); 

// More research needed