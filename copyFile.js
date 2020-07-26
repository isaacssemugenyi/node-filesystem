const fs = require('fs');

//const { COPYFILE_EXCL } = fs.constants;

//copying file synchronously
// fs.copyFileSync(src, dest[, mode])
//fs.copyFileSync('source.txt', 'files/destination.txt', COPYFILE_EXCL); 
// By using COPYFILE_EXCL, the operation will fail if destination.txt exists



//fs.copyFile(src, dest[, mode], callback)
fs.copyFile('source1.txt', 'files/source1.txt', err => console.log(err));