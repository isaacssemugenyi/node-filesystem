/*
* Create a new, empty file using the open() method 'w' specifies the mode    
*
* fs.open(‘<fileName>’,<file_open_mode>,callbackFunction)
*/

const fs = require('fs');
 fs.open('files/seven.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('File is opened in write mode.')
 })

 //need more research