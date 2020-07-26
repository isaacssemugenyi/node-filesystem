//Appending data with a file encoding option
const fs = require('fs');
var data = "\nUnderstanding FileSystem in node.js.";
 
// append data to file
fs.appendFile('files/forth.html',data, 'utf8', (err)=>{ 
        if (err) {
            console.log(err);
        } else {
            console.log("Data is appended to file")
        }
}); 